"use client";
import Image from 'next/image'
import { useState } from 'react'
import Job from '../components/Job.jsx'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";

export default function Home() {
  const [party, setParty] = useState(false)

  const toggleParty = () => {
    setParty(prev => !prev)
  }

  return (
    <main className={`min-h-screen md:px-24 px-8 pt-8 overflow-x-hidden ${party ? "flashing spotlight font-party cursor tracking-wide space" : "font-inter"}`}>
      <div className={`flex flex-col-reverse md:items-end md:flex-row md:justify-start`}>
        <h1 className="text-3xl font-bold">Shahbaz Siddiqui</h1>
        <Image
          src="/Banana.gif"
          alt="banana"
          width={100}
          height={100}
          quality={100}
          className="banana"
          style={{ visibility: party ? 'visible' : 'hidden' }}
        />
        <Switch toggleParty={toggleParty} />
      </div>
      <p className="text-base mt-1">I can build your whole app</p>
      {party && (
        <Image
          src="/party-parrot.gif"
          alt="parrot"
          width={100}
          height={100}
          quality={100}
          className="parrot"
        />
      )}
      <Image
        src="/disco.gif"
        alt="disco"
        width={300}
        height={100}
        quality={100}
        className={`disco transition-transform duration-700 ease-in-out ${party ? 'translate-y-0' : '-translate-y-80'} invisible lg:visible`}
      />
      <section id="socials">
        <div className="text-base mt-3 mb-9 flex flex-row gap-5">
          <a href='Siddiqui_Resume.pdf' target='_blank' className='text-[#eaeaea]'>
            <IoNewspaperSharp size="2rem" />
          </a>
          <a href='https://github.com/yalikebaz' target='blank' className='text-[#eaeaea]'>
            <FaGithubSquare size="2rem" />
          </a>
          <a href='https://www.linkedin.com/in/shahbaz-sidd/' target='blank' className='text-[#eaeaea]'>
            <FaLinkedin size="2rem" />
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h1 className="text-xl mb-3 font-semibold">Currently</h1>
        <Job image="/ownr.webp" company="Ownr" title="Senior software engineer" url="https://www.ownr.co/" />
      </section>

      <section>
        <h1 className="text-xl mb-3 font-semibold">Previously</h1>
        <ul>
          <Job image="/stealth.jpg" company="Stealth Startup" title="Founding engineer" url="https://en.wikipedia.org/wiki/Stealth_startup" />
          <Job image="/sportsnet.jpg" company="SportsNet" title="Senior software engineer" url="https://www.sportsnet.ca/" />
          <Job image="/peloton.jpg" company="Peloton" title="Software engineer" url="https://www.onepeloton.ca/tread/" />
          <Job image="/deloitte.jpg" company="Deloitte" title="Software engineer" url="https://www.deloitte.com/ca/en.html" />
          <Job image="/chrome.jpg" company="Chrome extension" title="Developer" url="https://chrome.google.com/webstore/detail/tldr/ilngbocobgaemijmabhddjbeidhncaco" />
        </ul>
      </section>
    </main >
  )
}

const Switch = ({ toggleParty }) => {
  return (
    <div className="checkbox-wrapper-5">
      <div className="check">
        <input id="check-5" type="checkbox" onClick={toggleParty} />
        <label htmlFor="check-5" />
      </div>
    </div>
  )
}
