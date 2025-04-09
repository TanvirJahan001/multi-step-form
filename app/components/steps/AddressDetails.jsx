'use client';

/**
 * Address Details Form Step
 *
 * This component renders the second step of the multi-step form,
 * collecting the user's address information including:
 * - Street Address
 * - City
 * - Zip Code
 */

import { useFormContext } from 'react-hook-form';

export default function AddressDetails() {
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
      {/* Street Address Field */}
      <div className="space-y-2">
        <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Street Address <span className="text-red-500">*</span>
        </label>
        <input
          id="streetAddress"
          type="text"
          {...register('streetAddress')} // Register this field with react-hook-form
          className={getInputClassName('streetAddress')}
          placeholder="123 Main St"
        />
        {/* Show error message if validation fails */}
        {errors.streetAddress && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.streetAddress.message}</p>
        )}
      </div>

      {/* City Field */}
      <div className="space-y-2">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          City <span className="text-red-500">*</span>
        </label>
        <input
          id="city"
          type="text"
          {...register('city')} // Register this field with react-hook-form
          className={getInputClassName('city')}
          placeholder="New York"
        />
        {/* Show error message if validation fails */}
        {errors.city && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.city.message}</p>
        )}
      </div>

      {/* Zip Code Field */}
      <div className="space-y-2">
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Zip Code <span className="text-red-500">*</span>
        </label>
        <input
          id="zipCode"
          type="text"
          {...register('zipCode')} // Register this field with react-hook-form
          className={getInputClassName('zipCode')}
          placeholder="10001"
        />
        {/* Show error message if validation fails */}
        {errors.zipCode && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.zipCode.message}</p>
        )}
      </div>

      {/* Required fields note */}
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        <p>All fields marked with <span className="text-red-500">*</span> are required</p>
      </div>
    </div>
  );
}