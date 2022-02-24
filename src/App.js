import React, {useState, useEffect} from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon       from '@material-ui/icons/Chat';
import MoreVertIcon   from '@material-ui/icons/MoreVert';
import SearchIcon     from '@material-ui/icons/Search';

export default function App( ) {

  const [chatList, setChatList] = useState([
    {chatId: 1, title:'Name Person - 1', image: "https://ik.imagekit.io/nightcafe//assets/profile.png"},
    {chatId: 2, title:'Name Person - 2', image: "https://ik.imagekit.io/nightcafe//assets/profile.png"},
    {chatId: 3, title:'Name Person - 3', image: "https://ik.imagekit.io/nightcafe//assets/profile.png"},
    {chatId: 4, title:'Name Person - 4', image: "https://ik.imagekit.io/nightcafe//assets/profile.png"},
  ]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className='app-window'>
      <div className='sidebar'>

        <header>
          <img className='header--avatar' src="https://ik.imagekit.io/nightcafe//assets/profile.png" alt="Avatar Foto"/>
          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon style={{color: '#919191'}}/>
            </div>
            <div className='header--btn'>
              <ChatIcon style={{color: '#919191'}}/>
            </div>
            <div className='header--btn'>
              <MoreVertIcon style={{color: '#919191'}}/>
            </div>
          </div>
        </header>

        <div className='search'>
          <div className='search-input'>
              <SearchIcon fontSize="small" style={{color: '#919191'}}/>            
              <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>

        <div className='chatList'>
          {chatList.map((item, key) => (
            <ChatListItem 
              key = {key}
              onClick = { 
                () => { setActiveChat( chatList[key]) } 
              }
            />
          ))}
        </div>

      </div>
      <div className='contentarea'>
        { activeChat.chatId ? (
            <ChatWindow/>
          ) : (
            <ChatIntro/>
          )
        }
        
      </div>
    </div>
  );
}
