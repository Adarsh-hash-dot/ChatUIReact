import React from "react";
import DonutLargeSharpIcon from "@mui/icons-material/DonutLargeSharp";
import ChatBubbleSharpIcon from "@mui/icons-material/ChatBubbleSharp";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar, IconButton } from "@mui/material";
import { SidebarChat } from "./../../components";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <Avatar></Avatar>
        <div className={styles.sidebar__header_right}>
          <IconButton>
            <DonutLargeSharpIcon></DonutLargeSharpIcon>
          </IconButton>
          <IconButton>
            <ChatBubbleSharpIcon></ChatBubbleSharpIcon>
          </IconButton>
          <IconButton>
            <MoreVertSharpIcon></MoreVertSharpIcon>
          </IconButton>

          {/* <SettingsSharpIcon></SettingsSharpIcon> */}
        </div>
      </div>
      <div className={styles.sidebar__search}>
        <div className={styles.sidebar__searchContainer}>
          <IconButton>
            <SearchOutlinedIcon></SearchOutlinedIcon>
          </IconButton>
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className={styles.sidebar_chats}>
        <SidebarChat addNewChat={true} />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
