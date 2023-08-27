import axios from "axios";
import { toast } from "react-hot-toast";

export const adminApi= axios.create({
    baseURL: "http://localhost:4000/admin"
})

// adminApi.interceptors.request.use((req) => {
//     if (localStorage.getItem("adminToken")) {
//       console.log("interceptor keeps the token in the header organizer");
//       req.headers.Authorization =
//         "Bearer " + localStorage.getItem("adminToken");
//     }
//     return req;
//   });

