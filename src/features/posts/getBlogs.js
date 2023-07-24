import { axiosInstance } from "../../utils/axios";
export const getPosts=async(link)=>{
    const blogs=await axiosInstance.get(link)
    return blogs.data
}