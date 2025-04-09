'use client';

/**
 * Summary Form Step
 *
 * This component renders the final step of the multi-step form,
 * showing a summary of all the information the user has entered.
 * It displays the collected data in organized sections before submission.
 */

import { useFormContext } from 'react-hook-form';

export default function Summary() {
  // Get the current form values using the watch method
  const { watch } = useFormContext();
  const formValues = watch();

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Review Your Information</h3>

      {/* Personal Information Section */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md">
        <h4 className="text-md font-semibold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          Personal Information
        </h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {/* Full Name */}
          <p className="text-gray-500 dark:text-gray-400 font-medium">Full Name:</p>
          <p className="text-gray-900 dark:text-gray-100 font-semibold">{formValues.fullName}</p>

          {/* Email */}
          <p className="text-gray-500 dark:text-gray-400 font-medium">Email:</p>
          <p className="text-gray-900 dark:text-gray-100 font-semibold">{formValues.email}</p>

          {/* Phone Number */}
          <p className="text-gray-500 dark:text-gray-400 font-medium">Phone Number:</p>
          <p className="text-gray-900 dark:text-gray-100 font-semibold">{formValues.phoneNumber}</p>
        </div>
      </div>

      {/* Address Details Section */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md">
        <h4 className="text-md font-semibold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          Address Details
        </h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {/* Street Address */}
          <p className="text-gray-500 dark:text-gray-400 font-medium">Street Address:</p>
          <p className="text-gray-900 dark:text-gray-100 font-semibold">{formValues.streetAddress}</p>

          {/* City */}
          <p className="text-gray-500 dark:text-gray-400 font-medium">City:</p>
          <p className="text-gray-900 dark:text-gray-100 font-semibold">{formValues.city}</p>

          {/* Zip Code */}
          <p className="text-gray-500 dark:text-gray-400 font-medium">Zip Code:</p>
          <p className="text-gray-900 dark:text-gray-100 font-semibold">{formValues.zipCode}</p>
        </div>
      </div>

      {/* Account Information Section */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md">
        <h4 className="text-md font-semibold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1-.257-.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
          </svg>
          Account Information
        </h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {/* Username */}
          <p className="text-gray-500 dark:text-gray-400 font-medium">Username:</p>
          <p className="text-gray-900 dark:text-gray-100 font-semibold">{formValues.username}</p>

          {/* Password (masked for security) */}
          <p className="text-gray-500 dark:text-gray-400 font-medium">Password:</p>
          <p className="text-gray-900 dark:text-gray-100 font-semibold">••••••••</p>
        </div>
      </div>
    </div>
  );
}