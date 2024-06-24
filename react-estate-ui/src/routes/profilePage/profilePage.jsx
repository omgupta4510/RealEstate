import './profilePage.scss'
import List from '../../components/list/list'
import Chat from '../../components/chat/chat'

function ProfilePage(){
  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>Avatar:
              <img src="/amisha.jpg" alt="" /></span>
            <span>Username:
               <b>Amisha Dixit</b></span>
            <span>E-mail:
               <b>amishadixit39@gmail.com</b></span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create new Post</button>
          </div>
          <List/>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatCounter">
        <div className="wrapper">
            <Chat/>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage