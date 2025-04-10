'use client';

import { useFormContext } from 'react-hook-form';

/**
 * Reusable form field component that handles input fields with labels and error messages
 * 
 * @param {Object} props - Component props
 * @param {string} props.id - Input ID and field name
 * @param {string} props.label - Input label text
 * @param {string} props.type - Input type (text, email, password, etc.)
 * @param {string} props.placeholder - Input placeholder text
 */
export default function FormField({
  id,
  label,
  type = 'text',
  placeholder = ''
}) {
  // Get form methods and state from the parent form context
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register(id)}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        placeholder={placeholder}
        aria-invalid={errors[id] ? "true" : "false"}
        aria-describedby={errors[id] ? `${id}-error` : undefined}
      />
      {errors[id] && (
        <p
          id={`${id}-error`}
          className="text-sm text-red-600 dark:text-red-400"
          role="alert"
        >
          {errors[id].message}
        </p>
      )}
    </div>
  );
}