import React from "react";

const ChatList = ({ chats, username }) => {
    return (
      <div className="chatsContainer">
        {chats.map((chat) => {
          return (
            <div className={chat.username === username ? "divRight" : "divLeft"}>
              <div
                className={
                  chat.username === username
                    ? " commonStyle myChatContainer "
                    : "commonStyle chatContainer"
                }
                key={Math.random()}
              >
                {chat.username !== username && (
                  <div className="msgAuthor">{chat.username}</div>
                )}
                <div>{chat.message}</div>
              </div>
  
              <div
                className={
                  chat.username === username
                    ? "arrowRight arrow"
                    : "arrowLeft arrow"
                }
              ></div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default ChatList;