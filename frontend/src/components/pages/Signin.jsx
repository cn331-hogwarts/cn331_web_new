import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiBox } from "react-icons/fi";

import { useDispatch, useSelector } from 'react-redux'
import { login, reset, getUserInfo } from '../services/authSlice'
import { toast } from 'react-toastify'
import '../Signin.css'

const Signin = () => {

    const [formData, setFormData] = useState({
        "email": "",
        "password": "",
    })

    const { email, password } = formData
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password,
        }
        dispatch(login(userData))
    }


    useEffect(() => {
        if (isError) {
            toast.error('error wrong email or password')
        }

        if (isSuccess || user) {
            toast.success("signin was successul")
            navigate("/")
        }

        dispatch(reset())
        dispatch(getUserInfo())

    }, [isError, isSuccess, user, navigate, dispatch])



    return (
        <>
            <div className="body_page">
                <div className="container auth__container">
                    <h1 className="main__title">Sign in <FiBox /></h1>
                        {isLoading}
                    <form className="auth__form">
                        <input type="text"
                            placeholder="email"
                            name="email"
                            onChange={handleChange}
                            value={email}
                            required
                        />
                        <input type="password"
                            placeholder="password"
                            name="password"
                            onChange={handleChange}
                            value={password}
                            required
                        />
                        <Link to="/reset-password">Forget Password ?</Link>
                        <Link to="/register"> signup</Link>
                        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>signin</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signin;