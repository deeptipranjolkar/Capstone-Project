import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Form.css'

const SignUpForm = () => {

    const [nameError, setNameError] = useState(false)
    const [formValues, setFromValues] = useState({ mail: "", mobile: "", name: "", username: "",check: false,  })
    const [userNameError, setUserNameError] = useState(false)
    const [mobileError, setMobileError] = useState(false)
    const [signUpError, setSignUpError] = useState(false)
    const [mailError, setMailError] = useState(false)

    const navigate = useNavigate();

    
    const handleSubmit = (e) => {
        e.preventDefault()
        let valid = true;

        if (!(formValues.mail.trim().length > 0)) {
            setMailError(true)
            valid = false;
        } else {
            setMailError(false)
        }
        if (!(formValues.mobile.trim().length > 0)) {
            setMobileError(true)
            valid = false;
        } else {
            setMailError(false)
        }
        if (!(formValues.name.trim().length > 0)) {
            setNameError(true)
            valid = false;
        } else {
            setNameError(false)
        }
        if (!(formValues.username.trim().length > 0)) {
            setUserNameError(true)
            valid = false;
        } else {
            setUserNameError(false)
        }
       
        if (!formValues.check) {
            setSignUpError(true)
            valid = false;
        } else {
            setSignUpError(false)
        }
        if (valid) {
            window.localStorage.setItem("userData", JSON.stringify(formValues))
            navigate('/genre')
        }
    }
    
    const handleChange = (e) => {
        setFromValues({ ...formValues, [e.target.name]: e.target.value })
    }

    return (
        <div className={styles.body}>
            <p className='sp'>Super App</p>
            <p className='createacc'>Create a new Account</p>
           
            <form>
                <input onChange={(e) => handleChange(e)} type="text" name='name' placeholder="Name"></input>
                {nameError ? <p style={{color:"red"}}>field is required</p> : <></>}
                <input onChange={(e) => handleChange(e)} type="text" name='username' placeholder="UserName"></input>
                {userNameError ? <p style={{color:"red"}}>field is required</p> : <></>}
                <input onChange={(e) => handleChange(e)} type="email" name='mail' placeholder="Email"></input>
                {mailError ? <p style={{color:"red"}}>field is required</p> : <></>}
                <input onChange={(e) => handleChange(e)} type="tel" name='mobile' placeholder="Mobile"></input>
                {mobileError ? <p style={{color:"red"}}>field is required</p> : <></>}
                <br/>
                <label>
                    <input onChange={(e) => setFromValues({ ...formValues, [e.target.name]: e.target.checked })} type="checkbox" name='check' />
                    <h1 className='ckb'>Share my registration data with Superapp</h1>
                </label>
                {signUpError ? <p style={{color:"red"}}>Please check this</p> : <></>}
                <button type='submit' onClick={(e) => handleSubmit(e)}>SIGN UP</button>
            </form>
            <footer className={styles.footer}>
                <p className='termcon'>By clicking on Sign up. you agree to Superapp<span style={{ color: "green" }}> Terms and Conditions of Use</span></p>
                <p className='termcon'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span style={{ color: "green" }}> Privacy Policy</span></p>
            </footer>
        </div>
    )
}

export default SignUpForm