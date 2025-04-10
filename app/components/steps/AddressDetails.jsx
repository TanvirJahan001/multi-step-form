'use client';

import { useFormContext } from 'react-hook-form';

export default function AddressDetails() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Street Address
        </label>
        <input
          id="streetAddress"
          type="text"
          {...register('streetAddress')}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          placeholder="123 Main St"
        />
        {errors.streetAddress && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.streetAddress.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          City
        </label>
        <input
          id="city"
          type="text"
          {...register('city')}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          placeholder="New York"
        />
        {errors.city && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.city.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Zip Code
        </label>
        <input
          id="zipCode"
          type="text"
          {...register('zipCode')}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          placeholder="10001"
        />
        {errors.zipCode && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.zipCode.message}</p>
        )}
      </div>
    </div>
  );
}