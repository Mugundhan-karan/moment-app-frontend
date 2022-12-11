import React, { useEffect } from 'react'
import './MomentDetails.scss'
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectIsLoggedIn } from '../../../redux/features/auth/authSlice';
import { getMoment } from '../../../redux/features/moments/momentSlice';

const MomentDetails = () => {
    useRedirectLoggedOutUser("/login")
    const dispatch = useDispatch()

    const { id } = useParams()


    const isLoggedIn = useSelector(selectIsLoggedIn)
    const { moment, isError, message } = useSelector((state) => state.moment)  //destruct all properties from redux state

    useEffect(() => {
        if (isLoggedIn === true) {
            dispatch(getMoment(id))

        }

        if (isError) {
            console.log(message);
        }
    }, [isLoggedIn, isError, message, dispatch,])




    return (
        <div className="moment-details">
            <h3 className='--mt'>Moment Details</h3>

            <div>
                {moment && (
                    <div class="frame">
                        <div> <center>
                            {moment?.image ? (
                                <img class='img'
                                    src={moment.image.filePath}
                                    alt={moment.fileName}
                                />

                            ) : (
                                <p>No image</p>
                            )}

                            <h3>{moment.title}</h3>
                        </center>
                        </div>


                    </div>
                )}
            </div>

        </div>
    )
}

export default MomentDetails

//https://res.cloudinary.com/dqoczp1gd/image/upload/v1670698158/Moments%20App/w6lmxmkipmbdlvbvme6m.jpg