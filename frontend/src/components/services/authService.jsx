import axios from "axios";

const BACKEND_DOMAIN ="http://localhost:8000"//https backend

const REGISTER_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/`
const LOGIN_URL = `${BACKEND_DOMAIN}/api/v1/auth/jwt/create/`
const ACTIVATE_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/activation/`
const RESET_PASSWORD_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/reset_password/`
const RESET_PASSWORD_CONFIRM_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/reset_password_confirm/`
const GET_USER_INFO = `${BACKEND_DOMAIN}/api/v1/auth/users/me/`


const register = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(REGISTER_URL, userData, config)

    return response.data
}


const login = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(LOGIN_URL, userData, config)

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data
}



const logout = () => {
    return localStorage.removeItem("user")
}



const activate = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(ACTIVATE_URL, userData, config)

    return response.data
}


const resetPassword = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(RESET_PASSWORD_URL, userData, config)

    return response.data
}


const resetPasswordConfirm = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(RESET_PASSWORD_CONFIRM_URL, userData, config)

    return response.data
}


const getUserInfo = async (accessToken) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }

    const response = await axios.get(GET_USER_INFO, config)

    return response.data
}

const updateUserProfile = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${userData.accessToken}`
        }
    };

    const response = await axios.put(GET_USER_INFO, userData, config);

    return response.data;
};

const USER_INFO_KEY = 'user_info';

const saveUserInfoToLocal = (userInfo) => {
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
};

const getUserInfoFromLocal = () => {
    const userInfo = localStorage.getItem(USER_INFO_KEY);
    return userInfo ? JSON.parse(userInfo) : null;
};

const authService = { register, login, logout, activate, resetPassword, resetPasswordConfirm, getUserInfo ,updateUserProfile,saveUserInfoToLocal,getUserInfoFromLocal}

export default authService