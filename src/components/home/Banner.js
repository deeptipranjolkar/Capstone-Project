import React from 'react'
import BackgroundImage from '../../assets/page1_bg.png'
import styles from  './Banner.css'

const Banner = ()=>{

    return(
        <> 
            <div className ="newthings">
                <p>Discover new things on </p><br/>
                <p className='supap'>SuperApp</p>
            </div>
            <img src={BackgroundImage} alt='Loading...'/>
        </>
    )
}

export default Banner;