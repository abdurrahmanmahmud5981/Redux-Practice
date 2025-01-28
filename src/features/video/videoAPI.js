import axios from "../../utils/axios"

export const getVideo = async (id)=>{
    const response = await axios.get(`/videos/${id}`);
    return response.data;
}

// increment dislike
export const dislikeVideo = async (id)=>{
    const response = await axios.post(`/videos/${id}/dislike`);
    return response.data;
}

