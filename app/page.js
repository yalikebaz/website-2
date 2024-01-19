export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-3xl font-bold">hi, I'm Shay</h1>
      <p className="text-base mt-1 mb-3">I build web applications in <span className="font-bold">React</span>, Node, and Go</p>

      <section>
        <div className="text-base my-3">
          <a href='Siddiqui_Resume.pdf' target='_blank'>Resume</a> <span> | </span>
          <a href='https://github.com/ShaySS' target='blank'>Github</a> <span> | </span>
          <a href='https://www.linkedin.com/in/shay-siddiqui/' target='blank'>LinkedIn</a> <span> | </span>
          <a href="mailto:shaysiddi@gmail.com">Email</a>
        </div>
      </section>

      <section>
        <h1 className="text-xl my-5 font-semibold">Currently I'm:</h1>
        <ul>
          <li>💻 Working at <a href="https://www.thoughtworks.com/en-ca" target="_blank">Thoughtworks</a> as a senior software engineer</li>
          <li>🏅 Building backend Go microservices and APIs for <a href="https://www.sportsnet.ca/" target="_blank">SportsNet</a>; leveraging caching strategies to optimize for speed</li>
        </ul>
      </section>

      <section>
        <h1 className="text-xl my-4 font-semibold">Previously, I:</h1>
        <ul>
          <li>🏥 Built the frontend for a large scale public sector immigration application at <a href="https://www2.deloitte.com/ca/en/pages/about-deloitte/articles/home.html" target="_blank">Deloitte</a></li>
          <li>🏃 Developed the front-end for the <a href="https://www.onepeloton.ca/tread/" target="_blank">Peloton treadmill</a> screen interface; selecting their tech stack and data-fetching strategy</li>
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
