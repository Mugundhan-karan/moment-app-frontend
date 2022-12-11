import React, { useEffect, useState } from 'react';
import "./Profile.scss"
import useRedirectLoggedOutUser from '../../components/customHook/useRedirectLoggedOutUser'
import { useDispatch } from 'react-redux';
import { getUser } from '../../services/authService';
import { SET_USER, SET_NAME } from '../../redux/features/auth/authSlice';
import { Link } from 'react-router-dom';


const Profile = () => {

    useRedirectLoggedOutUser("/login")
    const dispatch = useDispatch()

    const [profile, setProfile] = useState(null)

    useEffect(() => {

        async function getUserData() {
            const data = await getUser()
            console.log(data);

            setProfile(data)
            await dispatch(SET_USER(data))
            await dispatch(SET_NAME(data.name));


        }
        getUserData()
    }, [dispatch])

    return (
        <div className='profile-box'>
            <div className='profile --my2'>
                <>
                    {profile === null ? (
                        <p>Something, went wrong, please reload the page</p>
                    ) : (

                        <div className="card">
                            <span className="profile-photo">
                                <img src={profile?.photo} alt="profile-pic" />

                            </span>
                            <span className='profile-data'>
                                <p>
                                    <b>Name: </b> {profile?.name}
                                </p>
                                <p>
                                    <b>Email: </b> {profile?.email}
                                </p>
                                <p>
                                    <b>Phone: </b> {profile?.phone}
                                </p>
                                <div>
                                    <Link to="/edit-profile">
                                        <button>Edit profile</button>
                                    </Link>
                                </div>
                            </span>

                        </div>

                    )}

                </>

            </div>
        </div>
    )
}

export default Profile