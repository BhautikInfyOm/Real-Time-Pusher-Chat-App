import React, {useEffect, useState} from "react";
import ChatList from "./ChatList";
import ChatInput from "./ChatInput";

import Pusher from "pusher-js";

const ChatScreen = ({ channelName, userName }) => {
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState();

  useEffect(() => {
    const pusher = new Pusher('dc26be17ccaceb24e6da', {
      cluster: 'ap2',
      encrypted: true,
    });
    const channel = pusher.subscribe(channelName);
    channel.bind("message", (data) => {
      setMsg(data);
    });
    return () => {
      pusher.unsubscribe(channelName);
    };
  }, []);

  useEffect(() => {
    if (msg) setChats([...chats, msg]);
  }, [msg]);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="userProfile">Hello, {userName}</div>
        <ChatList chats={chats} username={userName} />
        <ChatInput channelName={channelName} username={userName} />
      </div>
    </div>
  );
};

export default ChatScreen;