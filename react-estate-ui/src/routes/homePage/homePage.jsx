import { useContext } from 'react'
import SearchBar from '../../searchBar/searchBar'
import './homePage.scss'
import { AuthContext } from '../../context/AuthContext'

function HomePage(){
    const {currentUser}=useContext(AuthContext);
    console.log(currentUser);
  return (
    <div className='homePage'>
        <div className='textContainer'>
            <div className='wrapper'>
                <h1 className='title'> Find Real Estate & Get your Dream Place</h1>
                <p>Welcome to  Real Estate, your trusted partner in buying and selling properties.
                     Whether you're searching for your dream home or looking to sell, 
                     our expert team provides personalized guidance and comprehensive services to ensure a smooth and successful transaction.
                      Explore our extensive listings and let us help you find your perfect place today.
                </p>
                <SearchBar/>
                <div className='boxes'>
                    <div className='box'>
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className='box'>
                        <h1>200</h1>
                        <h2>Awards Gained</h2>
                    </div>
                    <div className='box'>
                        <h1>2000+</h1>
                        <h2>Property Ready</h2>
                    </div>

                </div>
            </div>
        </div>
        <div className='imgContainer'>
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage