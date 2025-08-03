import { useState } from "react";
import type { SignUpForm } from "../types/createAccountTypes";
import type { SingUpProps } from "../types/createAccountTypes";
const SignUp = ({ handlesignUp }: SingUpProps) => {
  const [formData, setFormData] = useState<SignUpForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "radio" ? value : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handlesignUp();
    const singupData = await fetch ("http://localhost:3000/api/v1/auth/signup", {
      method : "POST",
      credentials : "include",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(formData)
    });
    if (!singupData.ok) {
      const errorData = await singupData.json();
      console.error("Sign up failed:", errorData);
      return;
    }
    const response = await singupData.json();
    console.log("Sign up successful:", response);
    handlesignUp();
     
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit} method="POST" action="#">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="username"
            >
              First Name
            </label>
            <div className="mt-1">
              <input
                value={formData.firstName}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                autoComplete="firstname"
                type="text"
                name="firstName"
                id="firstname"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="username"
            >
              Last Name
            </label>
            <div className="mt-1">
              <input
                value={formData.lastName}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                autoComplete="lastname"
                type="text"
                name="lastName"
                id="lastname"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                value={formData.email}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                autoComplete="email"
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                value={formData.password}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                autoComplete="current-password"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <div className="mt-1">
              <input
                value={formData.confirmPassword}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                autoComplete="current-password"
                type="password"
                name="confirmPassword"
                id="confirm-password"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="dob"
            >
              Date of Birth
            </label>
            <div className="mt-1">
              <input
                value={formData.dob}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                type="date"
                name="dob"
                id="dob"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <span className="mr-3 text-gray-700 font-medium">Gender:</span>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-pink-600"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-700">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-purple-600"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-700">Female</span>
            </label>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                type="checkbox"
                name="terms-and-condition"
                id="terms-and-condition"
              />
              <label
                className="ml-2 block text-sm text-gray-900"
                htmlFor="terms-and-condition"
              >
                I agree to the terms and conditions
              </label>
            </div>
          </div>
          <div className="mt-6">
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
