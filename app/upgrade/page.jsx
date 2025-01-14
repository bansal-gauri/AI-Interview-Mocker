"use client"
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

const plans = [
    {
        id: 1,
        name: 'Free',
        cost: 0,
        offering: [
            { value: '✔ Create 3 Free Mock Interview' },
            { value: '✔ Unlimited Retake Interview' },
            { value: '✘ Practice Question' },
            { value: '✘ Mockerview.com Exclusive App Access' },
            { value: '✘ Email Support' }
        ]
    },
    {
        id: 2,
        name: 'Monthly',
        cost: 7.99,
        paymentLink: '',
        offering: [
            { value: '✔ Create 3 Free Mock Interview' },
            { value: '✔ Unlimited Retake Interview' },
            { value: '✔ Practice Question' },
            { value: '✔ Mockerview.com Exclusive App Access' },
            { value: '✔ Email Support' }
        ]
    }
]

function Upgrade() {
    const router = useRouter()

    const handleFreePlanClick = () => {
        router.push('http://localhost:3000/dashboard')
    }

    const handleMonthlyPlanClick = () => {
        router.push('https://buy.stripe.com/test_6oEcQlfj75zWd9e9AA')
    }
    return (
        <div className='text-center mt-10'>
            <div>
                <h2 className='font-bold text-2xl text-center'>Upgrade</h2>
                <h2 className='text-gray-500'>Upgrade to monthly plan to access unlimited mock interview</h2>
            </div>
            <div className="flex justify-center gap-8 flex-wrap my-12">
                {plans.map(plan => (
                <div key={plan.id} className="bg-white rounded-xl shadow-lg p-6 w-100 text-left transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-500">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{plan.name}</h2>
                <p className="text-4xl text-black mb-6 font-bold text-center">
                    ${plan.cost.toFixed(2)} / month
                </p>
                <ul className="list-none p-0 m-0">
                    {plan.offering.map((item, index) => (
                    <li key={index} className={`text-base mb-4 flex items-center justify-start space-x-2 ${item.value.includes('✘') ? 'text-red-500' : 'text-black'}`}>
                        <span>{item.value}</span>
                    </li>
                    ))}
                </ul>
                <div className="flex justify-center text-center mt-6">
                    <Button className='flex item-center text-primary gap-2 w-64 border-primary rounded-full' variant="outline"
                    onClick={plan.name === 'Free' ? handleFreePlanClick : handleMonthlyPlanClick}>
                        {plan.name === 'Free' ? 'Get Started' : 'Get Subscription'}</Button>
                </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Upgrade
