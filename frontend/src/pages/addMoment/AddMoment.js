import React, { useState } from 'react'
import MomentForm from '../../components/content/momentForm/MomentForm'
import useRedirectLoggedOutUser from '../../components/customHook/useRedirectLoggedOutUser';
import { useSelector, useDispatch } from 'react-redux'
import { createMoment } from '../../redux/features/moments/momentSlice'
import { useNavigate } from 'react-router-dom'

const initialState = {
    title: "",
    tags: "",

}

export const AddMoment = () => {
    useRedirectLoggedOutUser("/login")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [moment, setMoment] = useState(initialState)
    const [momentImage, setMomentImage] = useState("")
    const [imagePreview, setImagePreview] = useState(null)



    const { title, tags } = moment

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMoment({ ...moment, [name]: value });
    };

    const handleImageChange = (e) => {
        setMomentImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    };

    const generateSKU = (tags) => {
        const letter = tags.slice(0, 3).toUpperCase()
        const number = Date.now()
        const sku = letter + "-" + number
        return sku;
    };

    const saveMoment = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", title)
        formData.append("sku", generateSKU(tags))
        formData.append("tags", tags)
        formData.append("image", momentImage)



        await dispatch(createMoment(formData))
        navigate("/dashboard")


    };



    return (
        <div>
            <h3>Add new moment</h3>
            <MomentForm
                moment={moment}
                momentImage={momentImage}
                imagePreview={imagePreview}
                handleInputChange={handleInputChange}
                handleImageChange={handleImageChange}
                saveMoment={saveMoment}

            />

        </div>
    );
};

export default AddMoment;