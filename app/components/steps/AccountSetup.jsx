'use client';

import { useFormContext } from 'react-hook-form';
import FormField from '../ui/FormField';

export default function AccountSetup() {
  const { formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="mb-2">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Create your account credentials</h3>
      </div>

      <div className="space-y-4">
        <FormField
          id="username"
          label="Username"
          type="text"
          placeholder="johndoe"
        />

        <FormField
          id="password"
          label="Password"
          type="password"
          placeholder="******"
        />

        <FormField
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="******"
        />

        {errors.confirmPassword && errors.confirmPassword.message === "Passwords do not match" && (
          <p className="text-sm text-red-600 dark:text-red-400 mt-1">
            Passwords do not match
          </p>
        )}
      </div>

      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        <p>Password must be at least 6 characters long</p>
      </div>
    </div>
  );
}