import React from 'react';
import "./MomentList.scss"

import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiOutlineEye } from 'react-icons/ai';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useDispatch, useSelector } from "react-redux";
import { deleteMoment, getMoments } from '../../../redux/features/moments/momentSlice';
import { Link } from 'react-router-dom';



const MomentList = ({ moments }) => {

    const dispatch = useDispatch();



    const delMoment = async (id) => {

        await dispatch(deleteMoment(id))
        await dispatch(getMoments())
    };                     //function to dispatch redux action to del 

    const confirmDelete = (id) => {
        confirmAlert({
            title: 'Delete moment',
            message: 'Are you sure to delete this.',
            buttons: [
                {
                    label: 'Delete',
                    onClick: () => delMoment(id)
                },
                {
                    label: 'Cancel',
                    //onClick: () => alert('Click No')
                }
            ]
        });
    }


    return (
        <div className='moment-list'>
            <div className='--flex-between--flex-dir-column'>
                <span>
                    <h3>Moments List</h3>
                </span>
            </div>

            <div className="table">
                {!moments.length === 0 ? (<p>The List is
                    empty</p>) : (

                    <table>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Tags</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                moments.map((moment, index) => {
                                    const { _id, image, title, tags } = moment
                                    return (
                                        <tr key={_id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div class="circular--landscape"> <img src={moment.image.filePath} ></img></div>
                                            </td>
                                            <td>
                                                {title}
                                            </td>
                                            <td>{tags}</td>
                                            <td className='icons'>
                                                <span>
                                                    <Link to={`/moment-details/${_id}`}>
                                                        <AiOutlineEye size={15} /></Link>
                                                </span>
                                                <span>
                                                    <Link to={`/edit-moment/${_id}`}>
                                                        <FaEdit size={15}

                                                        />
                                                    </Link>
                                                </span>
                                                <span>
                                                    <FaTrashAlt size={15} onClick={() => confirmDelete(_id)}

                                                    />
                                                </span>

                                            </td>



                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>)
                }
            </div>
        </div>
    )
}

export default MomentList