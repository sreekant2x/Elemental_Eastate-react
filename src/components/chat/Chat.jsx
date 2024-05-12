import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <div className="messages" onClick={()=>setChat(true)}>
        <h1>Messages</h1>
        <div className="message">
          <img src="https://progressive.org/downloads/8145/download/Screen%20Shot%202017-03-09%20at%2011.43.55%20AM.png?cb=9bfb2696d6edfc4d3b2816c899bbdae0&w=1200" alt="" />
          <span>Arun Gupta</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img src="https://progressive.org/downloads/8145/download/Screen%20Shot%202017-03-09%20at%2011.43.55%20AM.png?cb=9bfb2696d6edfc4d3b2816c899bbdae0&w=1200" alt="" />
          <span>Arun Gupta</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img src="https://progressive.org/downloads/8145/download/Screen%20Shot%202017-03-09%20at%2011.43.55%20AM.png?cb=9bfb2696d6edfc4d3b2816c899bbdae0&w=1200" alt="" />
          <span>Arun Gupta</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img src="https://progressive.org/downloads/8145/download/Screen%20Shot%202017-03-09%20at%2011.43.55%20AM.png?cb=9bfb2696d6edfc4d3b2816c899bbdae0&w=1200" alt="" />
          <span>Arun Gupta</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img src="https://progressive.org/downloads/8145/download/Screen%20Shot%202017-03-09%20at%2011.43.55%20AM.png?cb=9bfb2696d6edfc4d3b2816c899bbdae0&w=1200" alt="" />
          <span>Arun Gupta</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img src="https://progressive.org/downloads/8145/download/Screen%20Shot%202017-03-09%20at%2011.43.55%20AM.png?cb=9bfb2696d6edfc4d3b2816c899bbdae0&w=1200" alt="" />
          <span>Arun Gupta</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="https://progressive.org/downloads/8145/download/Screen%20Shot%202017-03-09%20at%2011.43.55%20AM.png?cb=9bfb2696d6edfc4d3b2816c899bbdae0&w=1200" alt="" />
              Arun Gupta
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem, ipsum dolor.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem, ipsum.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit.</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>
              Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
