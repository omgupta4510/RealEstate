import { useState } from 'react'
import './chat.scss'

function Chat(){
    const [chat,setChat]=useState(true);
    return (
    <div className='chat'>
        <div className="messages">
            <h1>Messages</h1>
            <button onClick={()=>setChat(true)}>
                <div className="message">
                    <img src="/om.jpeg" alt="" />
                    <span>Om Gupta</span>
                    <p>Radhe Radhe</p>
                </div>
            </button>
            
            <button onClick={()=>setChat(true)}>
                <div className="message">
                    <img src="/om.jpeg" alt="" />
                    <span>Om Gupta</span>
                    <p>Radhe Radhe</p>
                </div>
            </button>
            <button onClick={()=>setChat(true)}>
                <div className="message">
                    <img src="/om.jpeg" alt="" />
                    <span>Om Gupta</span>
                    <p>Radhe Radhe</p>
                </div>
            </button>
            <button onClick={()=>setChat(true)}>
                <div className="message">
                    <img src="/om.jpeg" alt="" />
                    <span>Om Gupta</span>
                    <p>Radhe Radhe</p>
                </div>
            </button>
        </div>
       {     
        chat &&(
            <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="/om.jpeg" alt="" />
                        Om Gupta
                    </div>
                    <span className='close' onClick={()=>setChat(null)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>I love you❤️</p>
                        <span>1 sec ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>I love you❤️</p>
                        <span>1 sec ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>I love you❤️</p>
                        <span>1 sec ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>I love you❤️</p>
                        <span>1 sec ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>I love you❤️</p>
                        <span>1 sec ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>I love you❤️</p>
                        <span>1 sec ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Kutraaa</p>
                        <span>1 sec ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>
            )}
    </div>
  )
}

export default Chat