import React from 'react'
import SignUpFrom from '../components/Home/SignUpForm'
import Banner from '../components/Home/Banner'

const Home = () => {
    return (
        <>
        <div style={{ display: "flex" }}>
            <Banner />
            <SignUpFrom />
        </div>
        </>
    )
}

export default Home;
