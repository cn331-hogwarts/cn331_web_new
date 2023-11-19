import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { BiUser } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../services/authSlice'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../register.css'


const RegisterPage = () => {
    const [formData, setFormData] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "password": "",
        "re_password": "",
    })

    const { first_name, last_name, email, password, re_password } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password !== re_password) {
            toast.error("Passwords do not match")
        } else {
            const userData = {
                first_name,
                last_name,
                email,
                password,
                re_password,
            }
            dispatch(register(userData))
        }
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        } else if (isSuccess || user) {
            navigate("/")
            toast.success("An activation email has been sent to your email. Please check your email")
        }

        dispatch(reset())
    }, [isError, isSuccess, user, navigate, dispatch])

    return (
        <>
            <div className='register-container'>
                <div className="auth__container">
                    <h1 className="main__title">
                        Sign up <BiUser />
                    </h1>

                    {isLoading}

                    <Form className="auth__form">
                        <Form.Control
                            type="text"
                            placeholder="First Name"
                            name="first_name"
                            onChange={handleChange}
                            value={first_name}
                            required
                        />
                        <Form.Control
                            type="text"
                            placeholder="Last Name"
                            name="last_name"
                            onChange={handleChange}
                            value={last_name}
                            required
                        />
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={email}
                            required
                        />
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={password}
                            required
                        />
                        <Form.Control
                            type="password"
                            placeholder="Retype Password"
                            name="re_password"
                            onChange={handleChange}
                            value={re_password}
                            required
                        />

                        <Button className="btn btn-primary" type="submit" onClick={handleSubmit}>
                            Register
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage