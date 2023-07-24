import { axiosInstance } from "../../utils/axios";
export const patchLikes=async({link,body})=>{
    const blogs=await axiosInstance.patch(link,body)
    return blogs.data
}