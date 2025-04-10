'use client';

import { useFormContext } from 'react-hook-form';

export default function PersonalInfo() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          {...register('fullName')}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          placeholder="John Doe"
        />
        {errors.fullName && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.fullName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          placeholder="john.doe@example.com"
        />
        {errors.email && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          type="tel"
          {...register('phoneNumber')}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          placeholder="1234567890"
        />
        {errors.phoneNumber && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.phoneNumber.message}</p>
        )}
      </div>
    </div>
  );
}