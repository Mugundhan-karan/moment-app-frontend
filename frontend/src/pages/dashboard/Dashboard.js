import React, { useEffect } from 'react'
import useRedirectLoggedOutUser from '../../components/customHook/useRedirectLoggedOutUser';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/features/auth/authSlice';
import { getMoments } from "../../redux/features/moments/momentSlice";
import MomentList from '../../components/content/momentLists/MomentList'

const Dashboard = () => {
    useRedirectLoggedOutUser("/login")
    const dispatch = useDispatch()

    const isLoggedIn = useSelector(selectIsLoggedIn)
    const { moments, isLoading, isError, message } = useSelector((state) => state.moment)  //destruct all properties from redux state

    useEffect(() => {
        if (isLoggedIn === true) {
            dispatch(getMoments())
        }

        if (isError) {
            console.log(message);
        }
    }, [isLoggedIn, isError, message, dispatch,])

    return (
        <div>

            <MomentList moments={moments} isLoading={isLoading} />
        </div>
    )
}

export default Dashboard;