"use client";
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [party, setParty] = useState(false)

  const toggleParty = () => {
    setParty(prev => !prev)
  }

  return (
    <main className={`min-h-screen md:px-24 px-8 pt-12 pb-16 overflow-x-hidden ${party ? "flashing spotlight font-party cursor tracking-wide space" : "font-mono"}`}>
      <div className={`flex flex-col-reverse md:items-end md:flex-row md:justify-start`}>
        <h1 className="text-3xl font-bold">hi, I'm Shahbaz</h1>
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
      <p className="text-base mt-1 mb-3">I build web applications in React and Go</p>
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
      <section>
        <div className="text-base my-3">
          <a href='Siddiqui_Resume.pdf' target='_blank'>Resume</a> <span> | </span>
          <a href='https://github.com/yalikebaz' target='blank'>Github</a> <span> | </span>
          <a href='https://www.linkedin.com/in/shahbaz-sidd/' target='blank'>LinkedIn</a> <span> | </span>
          <a href="mailto:shaysiddi@gmail.com">Email</a>
        </div>
      </section>

      <section>
        <h1 className="text-xl my-5 font-semibold">Currently I'm:</h1>
        <ul>
          <li>🥷 Building an application in stealth mode </li>
        </ul>
      </section>

      <section>
        <h1 className="text-xl my-4 font-semibold">Previously, I:</h1>
        <ul>
          <li>🏅 Built backend Go microservices and APIs as a senior software engineer at <a href="https://www.sportsnet.ca/" target="_blank">SportsNet</a></li>
          <li>🏥 Built the React frontend for a government application at <a href="https://www2.deloitte.com/ca/en/pages/about-deloitte/articles/home.html" target="_blank">Deloitte</a></li>
          <li>🏃 Architected the frontend for the <a href="https://www.onepeloton.ca/tread/" target="_blank">Peloton treadmill</a> screen interface</li>
          <li>🧩 Built a <a href="https://chrome.google.com/webstore/detail/tldr/ilngbocobgaemijmabhddjbeidhncaco" target="_blank">Chrome extension</a> to help you learn words</li>
        </ul>
      </section>

      <section>
        <h1 className="text-xl my-5 font-semibold">In my free time I like to:</h1>
        <ul>
          <li>🛫 Travel and learn new languages</li>
          <li>🏓 Topspin my way to victory in ping pong</li>
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
