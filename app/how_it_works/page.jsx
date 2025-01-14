import { UserButton } from '@clerk/nextjs'
import React from 'react'

function How_It_Works() {
  return (
    <div className="bg-gray-50">
      {/* How Mokerview Works Section */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-[#2d3e50] mb-12 text-center">How Mokerview Works</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-8">
          <div className="flex flex-col justify-center space-y-6 text-lg text-gray-700">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">1</div>
              <p>Create Your Profile - Sign up and specify your desired job position, years of experience, and a brief job description. This helps us tailor the mock interview to your unique needs.</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">2</div>
              <p>Choose Your Interview Type - Select the interview type based on your job role (e.g., software engineer, marketing manager, etc.). We'll customize the questions to match the position and industry you're targeting.</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">3</div>
              <p>Receive Tailored Questions - Based on your job position and experience, you'll get relevant, role-specific interview questions. This ensures you're preparing for the right challenges.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 text-lg text-gray-700">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">4</div>
              <p>Record and Answer the Questions - During the mock interview, you'll record and answer each question, just like in a real interview. This helps you practice your delivery and refine your responses.</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">5</div>
              <p>Get Detailed Feedback - After your session, receive expert feedback on your answers. Get insights on your strengths and areas to improve, helping you fine-tune your performance.</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">6</div>
              <p>Improve and Rehearse - Use the feedback to enhance your responses and keep practicing until you're ready to rock your real interview!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default How_It_Works