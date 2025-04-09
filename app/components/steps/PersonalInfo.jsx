'use client';

/**
 * Personal Information Form Step
 *
 * This component renders the first step of the multi-step form,
 * collecting the user's personal information including:
 * - Full Name
 * - Email
 * - Phone Number
 */

import { useFormContext } from 'react-hook-form';

export default function PersonalInfo() {
  // Get form methods and state from the parent form context
  const { register, formState: { errors, touchedFields } } = useFormContext();

  /**
   * Helper function to determine input border color based on validation state
   * - Red border for fields with errors
   * - Green border for valid fields that have been touched
   * - Default border for untouched fields
   */
  const getInputClassName = (fieldName) => {
    // Base styling for all inputs
    const baseClass = "w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white";

    // Field has an error - show red border
    if (errors[fieldName]) {
      return `${baseClass} border-red-500 dark:border-red-500`;
    }

    // Field has been touched and is valid - show green border
    if (touchedFields[fieldName] && !errors[fieldName]) {
      return `${baseClass} border-green-500 dark:border-green-500`;
    }

    // Default state - standard border
    return `${baseClass} border-gray-300 dark:border-gray-600`;
  };

  return (
    <div className="space-y-4">
      {/* Full Name Field */}
      <div className="space-y-2">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          {...register('fullName')} // Register this field with react-hook-form
          className={getInputClassName('fullName')}
          placeholder="John Doe"
        />
        {/* Show error message if validation fails */}
        {errors.fullName && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register('email')} // Register this field with react-hook-form
          className={getInputClassName('email')}
          placeholder="john.doe@example.com"
        />
        {/* Show error message if validation fails */}
        {errors.email && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Number Field */}
      <div className="space-y-2">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phoneNumber"
          type="tel"
          {...register('phoneNumber')} // Register this field with react-hook-form
          className={getInputClassName('phoneNumber')}
          placeholder="1234567890"
        />
        {/* Show error message if validation fails */}
        {errors.phoneNumber && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.phoneNumber.message}</p>
        )}
      </div>

      {/* Required fields note */}
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        <p>All fields marked with <span className="text-red-500">*</span> are required</p>
      </div>
    </div>
  );
}