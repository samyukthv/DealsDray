import React from "react";
import Select from "react-select";

function CreateEmployeeForm() {
  const options = [
    { value: "HR", label: "HR" },
    { value: "Sales", label: "Sales" },
    { value: "Manager", label: "Manager" },
  ];
  return (
    <div>
        
      <h1 className="font-bold text-4xl mt-5 text-center ml-2 sm:ml-20 ">
        Create Employee
      </h1>


      <form id="addevent">
        <div className="grid sm:grid-cols-1 md:grid-cols-2  place-items-center ">
          <div className="h-full">
            <h3 className="font-bold text-2xl mt-10 ml-2 sm:ml-20">Name</h3>
            <p className="ml-2 sm:ml-20">Name of the Employee</p>

            <input
              type="text"
              name="employeeName"
              className="ml-2 sm:ml-20 mt p-2 rounded border w-80 sm:w-96 border-gray-300 focus:border-primary focus:ring-0"
              placeholder="Employee Name"
            />

            <h1 className="font-bold text-2xl mt-10 ml-2 sm:ml-20">Email</h1>
            <p className="ml-2 sm:ml-20">Email id of the employee</p>

            <input
              type="text"
              name="emailId"
              className="ml-2 sm:ml-20 mt p-2 rounded border  w-80 sm:w-96 border-gray-300 focus:border-primary focus:ring-0"
              placeholder="Email Id"
            />

            <h1 className="font-bold text-2xl mt-10 ml-2 sm:ml-20">
              Mobile No
            </h1>
            <p className="ml-2 sm:ml-20">
              Enter the mobile number of the employee
            </p>

            <input
              type="text"
              name="mobile"
              className="ml-2 sm:ml-20 mt-4 p-2 rounded border w-80 sm:w-96 border-gray-300 focus:border-primary focus:ring-0"
              placeholder="Mobile No"
            />

            {/* <textarea
           type="text"
       e="about"
     assName="ml-2 sm:ml-20 mt-4 p-2    rounded border w-80 sm:w-96 border-gray-300 focus:border-primary focus:ring-0"
           placeholder="Event about"
         /> */}
          </div>

          <div className=" h-full">
            <h1 className="font-bold text-2xl mt-10 ml-2 sm:ml-20">
              Designation
            </h1>
            <p className="ml-2 sm:ml-20">
              Give the designation of the employee
            </p>
            <Select
              className="l-5 sm:ml-20 mt-4 p-2 rounded border w-80 sm:w-96"
              options={options}
            />

            <h1 className="font-bold text-2xl mt-10 ml-2 sm:ml-20">Image</h1>
            <p className="ml-2 sm:ml-20">upload an image of the employee</p>

            <input
              type="file"
              name="coverImage"
              className="ml-2 sm:ml-20 mt-4 p-2 rounded border w-80 sm:w-96 border-gray-300 focus:border-primary focus:ring-0"
              placeholder="Ticket price"
            />
 <div>
 <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className=" ml-2 sm:ml-20 sm:mb-10 mt-10 p-2 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Create
        </button>
 </div>
          </div>
        </div>
        
      </form>
    </div>
  );
}

export default CreateEmployeeForm;
