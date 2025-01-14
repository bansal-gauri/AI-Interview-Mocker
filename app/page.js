"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(()=>{

  },[]);
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center py-10 shadow-lg">
        <h1 className="font-extrabold text-6xl md:text-7xl mb-6 leading-tight tracking-tight">Welcome to Mokerview</h1>
        <h2 className="font-extrabold text-6xl md:text-4xl mb-6 leading-tight tracking-tigh">Mock It Till You Rock It!</h2>
        <p className="italic text-xl md:text-2xl max-w-3xl mx-auto mb-7">Prepare confidently, ace your interviews, and land your dream job.</p>
        <Button className="bg-white text-blue-800 px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-blue-100 transition duration-300"
        onClick={()=>router.replace('/dashboard')}>
          Get Started
        </Button>
      </div>

      {/* Why choose Mockerview Section */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-[#2d3e50] mb-12 text-center">Why Choose Mokerview?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-8">
          <div className="flex flex-col justify-center space-y-6 text-lg text-gray-700">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">1</div>
              <p><strong>Personalized Experience</strong> - Get mock interviews tailored to your job role and experience level, ensuring the practice is relevant to your goals.</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">2</div>
              <p><strong>ConvenienceRealistic Interview Simulations</strong> - Practice with real-world questions that mirror actual interviews, so you’re always prepared.</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">3</div>
              <p><strong>ConvenienceExpert Feedback</strong> - Receive actionable feedback from industry experts to fine-tune your answers and improve your performance.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 text-lg text-gray-700">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">4</div>
              <p><strong>Convenience & Flexibility</strong> - Prepare at your own pace, whenever and wherever suits you, with no scheduling hassles.</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">5</div>
              <p><strong>ConvenienceTrack Your Progress</strong> - Monitor your improvement over time, keeping you motivated and on track to succeed.</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">6</div>
              <p><strong>ConvenienceAffordable & Accessible</strong> - Enjoy high-quality preparation at an affordable price, making it accessible to everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-gray-100 py-20">
        <h3 className="text-4xl font-semibold text-[#2d3e50] mb-8 text-center">Success Stories</h3>
        <p className="text-lg text-gray-700 mx-auto max-w-3xl text-center">
          Many of our users have successfully aced their interviews and landed their dream jobs after practicing with Mokerview. With tailored mock interviews and expert feedback, you too can improve your skills and confidently face any interview.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <p className="text-lg">© 2025 Mokerview. All Rights Reserved.</p>
          <a href="mailto:support@mokerview.com" className="text-lg hover:text-blue-200 transition duration-300">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}
