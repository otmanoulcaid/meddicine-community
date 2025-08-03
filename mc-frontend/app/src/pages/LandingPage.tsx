import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
export default function LandingPage() {
  return (
    <div className="bg-[#F0F2F5] min-h-screen flex items-center justify-center p-4">
    <div className="relative w-full max-w-7xl aspect-[16/9] rounded-lg shadow-xl overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#ADD8E6] to-transparent flex items-center justify-between px-6 z-20">
            <h1 className="text-black text-2xl font-bold">medicineCommunity</h1>
            <Link to={""}  >
            <Button />
            </Link>
        </div>

        <div className="relative flex-grow bg-white">
            <div className="absolute inset-0 bg-cover bg-center bg-[url('https://webfmd.com/wp-content/uploads/2022/11/FMD-concept-Home-Page-Functional-Medicine-Community-Small.png')] "  >
                </div>

            <div  className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-8 z-10">
                <div className="bg-white bg-opacity-80 p-6 sm:p-8 rounded-lg shadow-lg max-w-2xl opacity-90">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-4">
                        Welcome to <span className="text-blue-600">medicineCommunity</span>
                    </h2>
                    <p className="text-base  sm:text-lg text-gray-700 leading-relaxed mb-6">
                        Where doctors can talk to patients for consulting, a possible meeting in real life.
                        Create an account and join us on this journey!
                    </p>
                    <Link to="/createAcount">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                            Create Account
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}
