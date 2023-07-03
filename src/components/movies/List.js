import React, { useEffect, useState } from "react"
import styles from './List.module.css'

const List = ({ genre }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8dd36133c5mshfb3c6de015c1b54p191bfejsneaeff09d9e6b',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        const fetchMovies = async () => {
            await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`, options)
                .then(response => response.json())
                .then(response => setMovies(response.results.splice(4, 4)))
                .catch(err => console.error(err));
        }
        fetchMovies();
    }, []);

    return (
        <>
            <p className={styles.heading}>{genre}</p>
            <div style={{overflow: "hidden", marginLeft: "2vw", display: "flex",  }}>
                {movies.map((movie, idx) => {
                    
                    return (
                        <div style={{ margin: "2vw", width: "20vw", }} key={idx}>
                            <img src={movie?.primaryImage?.url} alt="Loading..." style={{ height: "20vh", borderRadius: "12px" ,objectFit: "cover", width: "20vw", }} />
                        </div>
                    )
                    
                })}
            </div>
        </>
    )
}

export default List;