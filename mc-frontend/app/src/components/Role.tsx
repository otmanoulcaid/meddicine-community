import React from "react";
import { useState } from "react";
import type { RoleProps } from "../types/createAccountTypes";
import { UserIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function Role({ onContinue }: RoleProps) {
  const [role, setRole] = useState<"doctor" | "patient" | "">("");
  const [doctorForm, setDoctorForm] = useState({
    specialization: "",
    jobDate: "",
    isValid: false
  });

  const handleDoctorFormChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setDoctorForm(prev => {
      const newForm = {
        ...prev,
        [name]: value
      };
      // Validate form
      const isValid = newForm.specialization.length > 0 && newForm.jobDate.length > 0;
      return { ...newForm, isValid };
    });
  };

  const handleSubmit = () => {
    if (role === "patient") {
      onContinue();
      return;
    }

    if (role === "doctor" && doctorForm.isValid) {
      // You can pass the doctor data to onContinue if needed
      onContinue({
        role: "doctor",
        specialization: doctorForm.specialization,
        jobDate: doctorForm.jobDate
      });
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <div className="relative flex flex-col items-center w-full max-w-lg">
      <div className="grid grid-cols-2 gap-6 mb-8 w-full">
        {/* Patient Selection Box */}
        <button
          onClick={() => setRole("patient")}
          className={`p-6 rounded-xl transition-all duration-200 flex flex-col items-center justify-center h-48
            ${
              role === "patient"
                ? "bg-blue-100 border-2 border-blue-500 shadow-lg"
                : "bg-white border-2 border-gray-200 hover:border-blue-300 shadow-md"
            }`}
        >
          <UserIcon className="w-20 h-20 mb-4 text-blue-600" />
          <span className="text-xl font-semibold text-gray-800">Patient</span>
          <span className="text-sm text-gray-600 mt-2">I need medical help</span>
        </button>

        {/* Doctor Selection Box */}
        <button
          onClick={() => setRole("doctor")}
          className={`p-6 rounded-xl transition-all duration-200 flex flex-col items-center justify-center h-48
            ${
              role === "doctor"
                ? "bg-blue-100 border-2 border-blue-500 shadow-lg"
                : "bg-white border-2 border-gray-200 hover:border-blue-300 shadow-md"
            }`}
        >
          <UserCircleIcon className="w-20 h-20 mb-4 text-blue-600" />
          <span className="text-xl font-semibold text-gray-800">Doctor</span>
          <span className="text-sm text-gray-600 mt-2">I provide medical care</span>
        </button>
      </div>

      {/* Rest of the white box content */}
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full text-center min-h-[220px] flex flex-col items-center">
        {role === "" && (
          <p className="text-gray-600 text-lg font-medium">
            Please select if you are a doctor or a patient.
          </p>
        )}
        
        {role === "patient" && (
          <>
            <p className="text-gray-700 text-lg font-semibold mb-8">
              There is no more information that you can provide, thank you.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg 
                py-3 px-8 rounded-lg shadow-md transition-colors duration-200"
              onClick={handleSubmit}
            >
              Continue to the main page
            </button>
          </>
        )}

        {role === "doctor" && (
          <>
            <div className="flex flex-col md:flex-row md:space-x-6 w-full justify-center mb-8">
              <div className="flex flex-col mb-4 md:mb-0 w-full md:w-1/2">
                <label className="text-left text-gray-700 font-medium mb-2">
                  Specialization *
                </label>
                <input
                  type="text"
                  name="specialization"
                  value={doctorForm.specialization}
                  onChange={handleDoctorFormChange}
                  placeholder="e.g. Cardiologist"
                  className="border border-gray-300 rounded-lg px-4 py-2 
                    focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <label className="text-left text-gray-700 font-medium mb-2">
                  Date of Job *
                </label>
                <input
                  type="date"
                  name="jobDate"
                  value={doctorForm.jobDate}
                  onChange={handleDoctorFormChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 
                    focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg 
                py-3 px-8 rounded-lg shadow-md transition-colors duration-200 
                disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={!doctorForm.isValid}
            >
              Continue to the main page
            </button>
          </>
        )}
      </div>
    </div>
  );
}
