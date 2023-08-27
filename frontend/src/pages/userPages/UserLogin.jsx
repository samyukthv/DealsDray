import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../yup";
import { adminLogin } from "../../api/AdminApi";
import bimg from "../../assets/fg.jpg"
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { setUserDetails } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";



const initialValues = {
  username: "",
  password: "",
};

function UserLogin() {
  const dispatch = useDispatch();
  const navigate=useNavigate()


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values) => {
        let res=await adminLogin(values)
        if(res.data.success){
          console.log( res);
          dispatch(
            setUserDetails({
              username: res.data.user,
            
            })
          );

          localStorage.setItem("adminToken", res.data.token);
          toast.success("logged in successfully");
          navigate("/admin/");
    
        }else{
          toast.error(res.data.message)
        }
       

       
    
      },
    });
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 " style={{ backgroundImage: `url(${bimg})`, backgroundSize:"cover" }}>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-2xl  transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                  Login Form with Floating Labels
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form onSubmit={handleSubmit}>
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="username"
                        value={values.username}
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="username"
                      />
                      {errors.username && touched.username ? (
                        <small className="form-error text-red-500">
                          {errors.username}
                        </small>
                      ) : null}
                      <label
                        for="username"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        username
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="password"
                        value={values.password}
                        type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                      />
                      {errors.password && touched.password ? (
                        <small className="form-error text-red-500">
                          {errors.password}
                        </small>
                      ) : null}
                      <label
                        for="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-md px-2 py-1"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
