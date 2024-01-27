import React from "react";
import styles from "./chat.module.css";
import Avatar from "@mui/material/Avatar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const chat = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.chat__header}>
        <Avatar></Avatar>
        <div className={styles.chat__headerInfo}>
          <h3>Room Name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlinedIcon></SearchOutlinedIcon>
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon></AttachFileOutlinedIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className={styles.chat__body}></div>

      <div className={styles.chat__footer}></div>
    </div>
  );
};

export default chat;
