import React from 'react'
import "./landing.css"
import LandingImage from "../../images/expense.svg"


async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

const Landing = () => {
  return (
    <div className='h-[calc(100vh-70px)] bg-[#031410] flex '>
        <div className='md:w-[50vw] flex justify-center items-center'>
            <span className='text-[62px] p-4 text-blue-200 font-extrabold'>Expense Tracker.</span><br />
            <div className='flex justify-center items-center input-cursor'>
    <span id="sentence" className=''>{typeSentence("hello", "#sentence")}</span>
    <span className='inline-block w-0.5 h-11 bg-white ml-2'></span>
  </div>
        </div>
        <div className='w-[50vw] h-full  hidden md:flex items-center justify-center'>
            <img src={LandingImage} alt="" srcset="" className='h-96 w-96 p-10' />
        </div>


    </div>
  )
}

export default Landing