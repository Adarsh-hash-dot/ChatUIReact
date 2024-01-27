import React from "react";
import { Avatar } from "@mui/material";
import styles from "./SidebarChat.module.css";

const SidebarChat = ({ addNewChat }) => {
  const addNewRoom = () => {
    const roomName = prompt("Enter room name");

    if (roomName) {
      // do some stuff
    }
  };
  return !addNewChat ? (
    <div className={styles.sidebarChat}>
      <Avatar src="https://i.pravatar.cc/100"></Avatar>
      <div className={styles.sidebarChat__info}>
        <h2>Room Name</h2>
        <div>chats...</div>
      </div>
    </div>
  ) : (
    <div onClick={() => addNewRoom()} className={styles.sidebarChat}>
      <h2>Add new Chat</h2>
    </div>
  );
};

export default SidebarChat;
