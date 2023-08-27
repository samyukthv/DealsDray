import { adminApi } from "../utils/Api's";

export const adminLogin=async(values)=>{
try {
 
    const data =await adminApi.post("/login",values)
    return data
} catch (error) {
    console.log("api catch");
}
}