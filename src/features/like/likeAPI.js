import axios from "axios";

// increment like 
export const likeVideo = async (id)=>{
    const response = await axios.post(`/videos/${id}/like`);
    return response.data?.likes || 0;
}
