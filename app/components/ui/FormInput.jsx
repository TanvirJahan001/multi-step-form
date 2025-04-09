'use client';

import { useFormContext } from 'react-hook-form';

/**
 * Reusable form input component that handles validation states and styling
 * 
 * @param {Object} props - Component props
 * @param {string} props.id - Input ID and field name
 * @param {string} props.label - Input label text
 * @param {string} props.type - Input type (text, email, password, etc.)
 * @param {string} props.placeholder - Input placeholder text
 * @param {boolean} props.required - Whether the field is required
 */
export default function FormInput({
  id,
  label,
  type = 'text',
  placeholder = '',
  required = false
}) {
  // Get form methods and state from the parent form context
  const { register, formState: { errors, touchedFields } } = useFormContext();

  /**
   * Helper function to determine input border color based on validation state
   * - Red border for fields with errors
   * - Green border for valid fields that have been touched
   * - Default border for untouched fields
   */
  const getInputClassName = () => {
    // Base styling for all inputs
    const baseClass = "w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 ease-in-out shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 dark:bg-gray-800 dark:text-white";

    // Field has an error - show red border
    if (errors[id]) {
      return `${baseClass} border-red-400 dark:border-red-500 focus:ring-red-200 dark:focus:ring-red-800 animate-shake`;
    }

    // Field has been touched and is valid - show green border
    if (touchedFields[id] && !errors[id]) {
      return `${baseClass} border-emerald-400 dark:border-emerald-600 focus:ring-emerald-200 dark:focus:ring-emerald-800`;
    }

    // Default state - standard border
    return `${baseClass} border-gray-300 dark:border-gray-700 focus:border-indigo-400 focus:ring-indigo-200 dark:focus:border-indigo-500 dark:focus:ring-indigo-800 hover:border-gray-400 dark:hover:border-gray-600`;
  };

  // Add keyframe animation for shake effect on error
  const animationStyle = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-5px); }
      40%, 80% { transform: translateX(5px); }
    }
    .animate-shake {
      animation: shake 0.5s ease-in-out;
    }
  `;

  return (
    <div className="space-y-2">
      {/* Add the animation style */}
      <style dangerouslySetInnerHTML={{ __html: animationStyle }} />

      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors">
        {label} {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          {...register(id)} // Register this field with react-hook-form
          className={getInputClassName()}
          placeholder={placeholder}
        />
      </div>
      {/* Show error message if validation fails with improved styling */}
      {errors[id] && (
        <p className="mt-1.5 text-sm font-medium text-red-500 dark:text-red-400 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {errors[id].message}
        </p>
      )}
    </div>
  );
}