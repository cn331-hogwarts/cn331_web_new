import React from 'react'
import { useSelector } from 'react-redux'


const Profile = () => {

    const { userInfo } = useSelector((state) => state.auth)


    return (
        <div>
            <h1>this is profile</h1>
            <h1>fitst_name:{userInfo.first_name} </h1>
            <h1>last_name:{userInfo.last_name}</h1>
            <h1>id:{userInfo.id}</h1>
            <h1>email:{userInfo.email}</h1>
            
            
        </div>
    )
}

export default Profile