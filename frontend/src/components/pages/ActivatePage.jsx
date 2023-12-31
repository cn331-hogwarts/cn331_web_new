import { useEffect } from 'react';
import { BiUserCheck } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activate, reset } from '../services/authSlice';
import { toast } from 'react-toastify';
import '../ActivatePage.css';

const ActivatePage = () => {


    const { uid, token } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            uid,
            token
        }
        dispatch(activate(userData))
        toast.success("Your account has been activated! You can login now")
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            navigate("/")
        }

        dispatch(reset())

    }, [isError, isSuccess, navigate, dispatch])


    return (
        <div>
            <div className="Activate_container">
                <div className="auth__container">
                    <h1 className="main__title">Activate Account <BiUserCheck /> </h1>

                    {isLoading }

                    <button className="btn btn-accent btn-activate-account" type="submit" onClick={handleSubmit}>Activate Account</button>
                </div>
            </div>    
        </div>
    )
}

export default ActivatePage;