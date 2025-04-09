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
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Review Your Information</h3>

      {/* Personal Information Section */}
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
        <h4 className="text-md font-medium text-gray-900 dark:text-gray-100 mb-2">Personal Information</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {/* Full Name */}
          <p className="text-gray-500 dark:text-gray-400">Full Name:</p>
          <p className="text-gray-900 dark:text-gray-100">{formValues.fullName}</p>

          {/* Email */}
          <p className="text-gray-500 dark:text-gray-400">Email:</p>
          <p className="text-gray-900 dark:text-gray-100">{formValues.email}</p>

          {/* Phone Number */}
          <p className="text-gray-500 dark:text-gray-400">Phone Number:</p>
          <p className="text-gray-900 dark:text-gray-100">{formValues.phoneNumber}</p>
        </div>
      </div>

      {/* Address Details Section */}
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
        <h4 className="text-md font-medium text-gray-900 dark:text-gray-100 mb-2">Address Details</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {/* Street Address */}
          <p className="text-gray-500 dark:text-gray-400">Street Address:</p>
          <p className="text-gray-900 dark:text-gray-100">{formValues.streetAddress}</p>

          {/* City */}
          <p className="text-gray-500 dark:text-gray-400">City:</p>
          <p className="text-gray-900 dark:text-gray-100">{formValues.city}</p>

          {/* Zip Code */}
          <p className="text-gray-500 dark:text-gray-400">Zip Code:</p>
          <p className="text-gray-900 dark:text-gray-100">{formValues.zipCode}</p>
        </div>
      </div>

      {/* Account Information Section */}
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
        <h4 className="text-md font-medium text-gray-900 dark:text-gray-100 mb-2">Account Information</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {/* Username */}
          <p className="text-gray-500 dark:text-gray-400">Username:</p>
          <p className="text-gray-900 dark:text-gray-100">{formValues.username}</p>

          {/* Password (masked for security) */}
          <p className="text-gray-500 dark:text-gray-400">Password:</p>
          <p className="text-gray-900 dark:text-gray-100">********</p>
        </div>
      </div>
    </div>
  );
}