"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAIModel'
import { UserAnswer } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/db'
import moment from 'moment'

function RecordAnswerSection({mockInterviewQuestion, activeQuestionIndex, interviewData}) {
    const [userAnswer, setUserAnswer] = useState('');
    const {user} = useUser();
    const [loading, setLoading] = useState(false);
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });

      useEffect(()=>{
        results.map((result)=>{
            setUserAnswer(prevAns => prevAns+result?.transcript)
        })
      },[results])

      useEffect(()=>{
        if(!isRecording && userAnswer.length > 10) UpdateUserAnswer();
        
      },[userAnswer])

      const StartStopRecording=async()=>{
        if(isRecording) stopSpeechToText();
        else startSpeechToText();
      }

      const UpdateUserAnswer=async()=>{
        console.log(userAnswer);
        setLoading(true);
        const feedbackPrompt = "Question: "+mockInterviewQuestion[activeQuestionIndex]?.question+", User Answer: "+userAnswer+". Based on the question and the user's answer, please provide a rating (out of 10) for the answer and feedback. Keep the feedback concise (3-5 lines) with suggestions for improvement, and include a 'rating' field along with a 'feedback' field in the format of a JSON object."
        const result = await chatSession.sendMessage(feedbackPrompt);
        const mockJsonRes = (result.response.text()).replace('```json','').replace('```','');
        const JsonFeedbackRes = JSON.parse(mockJsonRes);

        const resp = await db.insert(UserAnswer)
        .values({
          mockIdRef:interviewData?.mockId,
          question:mockInterviewQuestion[activeQuestionIndex]?.question,
          correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
          userAns:userAnswer,
          feedback:JsonFeedbackRes?.feedback,
          rating:JsonFeedbackRes?.rating,
          userEmail:user?.primaryEmailAddress?.emailAddress,
          createdAt:moment().format('DD-MM-YYYY')
        })

        if(resp) {
          toast('User answer recorded successfully!');
          setUserAnswer('');
          setResults([]);
        }
        setResults([]);
        setLoading(false);
      }

  return (
    <div className='flex item-center justify-center flex-col'>
        <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
            <Image src={'/webcam.png'} width={200} height={200} className='absolute'/>
            <Webcam
            mirrored={true}
            style={{
                height:300,
                width:'100%',
                zIndex:10
            }}
            />
        </div>
        <div className='flex item-center justify-center'>
          <Button disabled={loading} variant="outline" className="my-10 w-40" onClick = {StartStopRecording}>
            {isRecording?
              <h2 className='text-red-600 flex gap-2'>
                <Mic/>'Stop Recording'
              </h2>
              :
              <h2 className='text-blue-700 flex gap-2'>
                <Mic/>'Record Answer'
              </h2>
            }
          </Button>
        </div>
    </div>
  )
}

export default RecordAnswerSection  