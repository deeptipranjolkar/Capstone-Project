import React from 'react'
import { useNavigate } from 'react-router-dom'
import Weather from '../components/Browse/Weather'
import Notes from '../components/Browse/Notes'
import News from '../components/Browse/News'
import Info from '../components/Browse/Info'

import Timer from '../components/Browse/Timer'

const Browse = () => {

    const handleClick = () => {
        navigate('/movies')
    }

    const navigate = useNavigate();

    return (
        <>
        <div style={{ height: "100vh",paddingLeft: "3vw", paddingTop: "3vh", boxSizing: "border-box", width: "100vw", background: "black",  }}>
            <div style={{ gap: "20px", display: "flex" }}>
                <div>
                    <Info />
                    <Weather />
                    <Timer />
                </div>
                <div>
                    <Notes />
                </div>
                <div>
                    <News />
                </div>
            </div>
            <button style={{ background: "green", border: "none", color: "white", position: "absolute", bottom: "2vh", right: "3vw", borderRadius: "12px", padding: "6px", }} onClick={handleClick}>Next Page</button>
        </div>
        </>
    )
}

export default Browse;