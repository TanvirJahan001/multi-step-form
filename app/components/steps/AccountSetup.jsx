'use client';

/**
 * Account Setup Form Step
 *
 * This component renders the third step of the multi-step form,
 * collecting the user's account information including:
 * - Username
 * - Password
 * - Password Confirmation
 */

import { useFormContext } from 'react-hook-form';

export default function AccountSetup() {
  // Get form methods and state from the parent form context
  const { register, formState: { errors, touchedFields }, getValues } = useFormContext();

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
      {/* Username Field */}
      <div className="space-y-2">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Username <span className="text-red-500">*</span>
        </label>
        <input
          id="username"
          type="text"
          {...register('username')} // Register this field with react-hook-form
          className={getInputClassName('username')}
          placeholder="johndoe"
        />
        {/* Show error message if validation fails */}
        {errors.username && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.username.message}</p>
        )}
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          id="password"
          type="password"
          {...register('password')} // Register this field with react-hook-form
          className={getInputClassName('password')}
          placeholder="******"
        />
        {/* Show error message if validation fails */}
        {errors.password && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password Field */}
      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword')} // Register this field with react-hook-form
          className={getInputClassName('confirmPassword')}
          placeholder="******"
        />
        {/* Show error message if validation fails */}
        {errors.confirmPassword && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.confirmPassword.message}</p>
        )}
      </div>

      {/* Required fields note */}
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        <p>All fields marked with <span className="text-red-500">*</span> are required</p>
      </div>
    </div>
  );
}