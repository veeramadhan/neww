import Head from "next/head"
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillLinkedin,AiFillMail} from "react-icons/ai"
import veera from "../public/veera.png"
import Image from "next/image"
import { useState } from "react"
import ResumeButton from "@/public/Resume"

export default function Home() {
   
  const[darkMode,setDarkMode]= useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
    <main >
      <title>Resume</title>
      <section className="min-h-screen  dark:bg-gray-600">
        <nav className="flex justify-between py-10 px-7 mb-12">
              <h1 className=" text-2xl ">Portfolio</h1>
              <ul className="flex gap-6 items-center ">
                <li className="">
                     <BsFillMoonStarsFill  onClick={()=>setDarkMode(!darkMode)} className="gap-3 cursor-pointer"/>
                </li>
             <li className="justify-center bg-cyan-600 text-neutral-200 rounded-2xl p-1.5 px-5 cursor-pointer "><ResumeButton></ResumeButton></li>
              </ul>
              </nav> 
              <div className=" text-center items-center text-1.5xl p-10 ">
        <h1 className=" text-4xl text-cyan-500 items-center pb-3">Veeramanikandan</h1>
        <h2 className=" text-lg">Software developer</h2>
        <h3 className=" leading-6">Freelancer providing services for programing and design content needs.Join me down and let'sget cracking!</h3>
      </div>
      <div className="flex gap-10 justify-center text-blue-600 text-4xl">
             <button> <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3Bfq5XuYJvRyyY8yEGvVUrSQ%3D%3D"><AiFillLinkedin/></a></button> 
             <button>  <a href="mailto:apkveeraa@gmail.com"><AiFillMail/> </a></button>
      </div>
      <div className="relative w-60 mt-5 mx-auto  bg-sky-300 rounded-full overflow-hidden ">
            <Image src={veera}  className=""/>
      </div>
      </section>
     
    </main>
    </div>
  )
}
