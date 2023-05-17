"use client"; // This is a client component 👈🏽

import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-white flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/9c070a2c-35cb-468d-8da4-ca7160e874ef" className='flex flex-col max-w-[700px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-amber-500'>Contact</p>
                    <p className='pt-6 text-gray-700'>Submit the form below or shoot me an email - andre-g96@hotmail.com</p>
                </div>
                <input className='bg-gray-300 p-2 shadow-custom' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-gray-300 shadow-custom' type="email" placeholder='Email' name='email' />
                <textarea className='bg-gray-300 p-2 shadow-custom' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white bg-amber-500 hover:bg-amber-400 hover:border-pink-600 font-medium px-4 py-3 my-8 mx-auto flex items-center ease-in duration-100 shadow-md'>Submit</button>
            </form>
        </div>
    )
}

export default Contact