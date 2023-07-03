import React from 'react'
import Profile from '../assets/profileSmall.png'
import List from "../components/Movies/List"

const Movies = () => {

    const movies = JSON.parse(window.localStorage.getItem("genres"))

    return (
        <>
            <img src={Profile} alt='Loading' style={{position: "absolute", right: "3vw", height: "60px", top: "2vh", width: "60px" }} />
            <div style={{ width: "100vw",background: "black", overflowX: "hidden" , minHeight: "100vh", }}>
                <p style={{fontSize: "3rem", margin: "1vw", color: "green",  }}>Super app</p>
                <p style={{  margin: "3vw",color: "white", fontSize: "2rem", }}>Entertainment according to your choice</p>
                {movies.map((movie) => <List genre={movie} />)}
            </div>
        </>
    )
}


export default Movies;