import { useState } from "react";
import axios from "axios";
import { signUpAPI } from "../../utils/api";

const SignUp = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    user_name: "",
    gender: "male",
    password: "",
    img: "",
    thumb_img: "",
    email: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    //  console.log(formData)
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(signUpAPI, formData);
      console.log("Signup successful:", response.data);
      // Handle successful signup (e.g., redirect)
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle signup error (e.g., display error message)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
          />
          {/* Other input fields with similar structure */}
          <input
            placeholder="User Name"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
          />
          <input
            placeholder="Email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <label
            className="text-sm mb-2 text-gray-900 cursor-pointer"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input
            placeholder="Image"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />

          <input
            placeholder="Thumbnail image"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            name="thumb_img"
            value={formData.thumb_img}
            onChange={handleChange}
          />

          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
