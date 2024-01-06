
const clickHandler = (e) => {
  // * If its not the link that's meant to act as a regular a link (AKA the AWS one)...
  // * intercept the <a> link from copy and mimic <Link> behaviour
  // * (by rerouting and not causing browser refresh)
  const targetLink = e.target.closest("a");
  if (!targetLink) return;
  if (!e.target.href.includes("AWS") && !e.target.href.includes("Resume")) {
    e.preventDefault();
    // const nav = targetLink.href.substring(targetLink.href.lastIndexOf("/") + 1);
    // history.push(nav);
  }
};

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-3xl">hi, I'm Shay</h1>
      <p className="text-base my-1">I build web applications in <span className="font-bold">React</span>, Node, and Go</p>


      <div className="text-base my-3">
        <a href='Siddiqui_Resume.pdf' target='_blank'>Resume</a> <span> | </span>
        <a href='https://github.com/ShaySS' target='blank'>Github</a> <span> | </span>
        <a href='https://www.linkedin.com/in/shay-siddiqui/' target='blank'>LinkedIn</a> <span> | </span>
        <a href="mailto:shaysiddi@gmail.com">Email</a>
      </div>
      <div className="my-4">
        <h1 className="text-2xl my-2">Currently I am:</h1>
        <ul className="list-disc">
          <li>💻 Working at <a href="https://www.thoughtworks.com/en-ca" target="_blank">Thoughtworks</a> as a senior software engineer</li>
          <li>🏅 Building backend microservices and APIs for <a href="https://www.sportsnet.ca/">SportsNet</a></li>
        </ul>
      </div>
      <div className="my-5">
        <h1 className="text-2xl my-2">Previously, I:</h1>
        <ul className="list-disc">
          <li>Built the frontend for a large scale public sector immigration application at <a href="https://www2.deloitte.com/ca/en/pages/about-deloitte/articles/home.html">Deloitte</a></li>
          <li>🏃 Developed the front-end for the <a href="https://www.onepeloton.ca/tread/" target="_blank">Peloton treadmill</a> screen interface</li>
          <li>🧩 Built a <a href="https://chrome.google.com/webstore/detail/tldr/ilngbocobgaemijmabhddjbeidhncaco" target="_blank">Chrome extension</a> to help you learn words</li>
        </ul>
      </div>
      <div className="my-5">
        <h1>In my free time I like to:</h1>
        <ul>
          <li>🛫 Travel and learn new languages</li>
          <li>🏓 Topspin my way to victory in ping pong</li>
        </ul>
      </div>
    </main >
  )
}
