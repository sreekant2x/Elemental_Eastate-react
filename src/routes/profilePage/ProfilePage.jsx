import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar: <img src="https://progressive.org/downloads/8145/download/Screen%20Shot%202017-03-09%20at%2011.43.55%20AM.png?cb=9bfb2696d6edfc4d3b2816c899bbdae0&w=1200" alt="" />
            </span>
            <span>
              Username: <b>Arun Gupta</b>
            </span>
            <span>
              Email: <b>Arun@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add New Post</button>
          </div>

          <List />

          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
