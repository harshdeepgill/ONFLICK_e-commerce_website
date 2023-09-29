import React from 'react'
import { useSelector } from 'react-redux'
import WLoginHome from '../Components/WLoginHome';
import WOLoginHome from '../Components/WOLoginHome';

const Home = () => {
    const isAuth = useSelector(store => store.authReducer.isAuth);
    console.log(isAuth)
  return (
    <div>
        <WOLoginHome/>
        {/* {isAuth? <WLoginHome/> : <WOLoginHome/>} */}
    </div>
  )
}

export default Home