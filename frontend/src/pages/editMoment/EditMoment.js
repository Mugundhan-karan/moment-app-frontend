import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import MomentForm from '../../components/content/momentForm/MomentForm';
import { getMoment, getMoments, selectMoment, updateMoment } from '../../redux/features/moments/momentSlice';

const EditMoment = () => {

    const { id } = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const momentEdit = useSelector(selectMoment)

    const [moment, setMoment] = useState(momentEdit)
    const [momentImage, setMomentImage] = useState("")
    const [imagePreview, setImagePreview] = useState(null)




    useEffect(() => {
        dispatch(getMoment(id))
    }, [dispatch, id])

    useEffect(() => {
        setMoment(momentEdit)

        setImagePreview(
            momentEdit && momentEdit.image ?
                `${momentEdit.image.filepath}` : null
        )

    }, [momentEdit])


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMoment({ ...moment, [name]: value });
    };

    const handleImageChange = (e) => {
        setMomentImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    };

    const saveMoment = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", moment.title)
        formData.append("tags", moment.tags)
        if (momentImage) {
            formData.append("image", momentImage);
        }

        console.log(...formData);
        await dispatch(updateMoment({ id, formData }))
        await dispatch(getMoments())
        navigate("/dashboard")


    };



    return (
        <div>
            <h3>Update moment</h3>
            <MomentForm
                moment={moment}
                momentImage={momentImage}
                imagePreview={imagePreview}
                handleInputChange={handleInputChange}
                handleImageChange={handleImageChange}
                saveMoment={saveMoment}

            />

        </div>
    )
}

export default EditMoment