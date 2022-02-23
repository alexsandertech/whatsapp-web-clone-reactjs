import React from "react";
import './ChatListItem.css';

export default function ChatListItem() {
  return (
    <div className="chatListItem">
      <img className="chatListItem--avatar" src="https://ik.imagekit.io/nightcafe//assets/profile.png" alt=""/>
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">Alexsander Siqueira</div>
          <div className="chatListItem--date">20:00</div>
        </div>
        <div className="chatListItem--line">
          <div className="chatListItem--lastMsg">
            <p>Hey there I am using WhatsApp.</p>
          </div>
        </div>
      </div>
    </div>
  )
}