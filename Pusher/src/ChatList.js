import React from "react";
import "./ChatList.css";
import avatar from "./avatar.png";

const ChatList = ({ chats }) => (
  
  <ul>
    {
    chats.map(chat => {
      console.warn(chat)
      return (
        <div>
          <div className="row show-grid">
            <div className="col-xs-12">
              
              <div className="chatMessage">
                <div key={chat.id} className="box">
                  <p>
                    <strong>{chat.username}</strong>
                  </p>
                  <p>{chat.message}</p>
                </div>

                <div className="imageHolder">
                <img src={avatar} className="img-responsive avatar" alt="logo" />
              </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </ul>
);

export default ChatList