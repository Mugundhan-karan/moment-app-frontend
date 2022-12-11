
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/moments/`


//create new moment

const createMoment = async (formData) => {
    const response = await axios.post(API_URL, formData)
    return response.data
};


//Get all moments

const getMoments = async () => {
    const response = await axios.get(API_URL)
    return response.data
};


//Delete a moment

const deleteMoment = async (id) => {
    const response = await axios.delete(API_URL + id)
    return response.data
};

//Get a single moment

const getMoment = async (id) => {
    const response = await axios.get(API_URL + id)
    return response.data
};

//Update a moment

const updateMoment = async (id, formData) => {
    const response = await axios.patch(`${API_URL}${id}`, formData);
    return response.data
};




const momentService = {
    createMoment, getMoments, getMoment, deleteMoment, updateMoment
}

export default momentService