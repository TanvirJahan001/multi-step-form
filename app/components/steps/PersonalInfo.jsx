
/**
 * Personal Information Form Step
 *
 * This component renders the first step of the multi-step form,
 * collecting the user's personal information including:
 * - Full Name
 * - Email
 * - Phone Number
 */

import FormInput from '../ui/FormInput';

export default function PersonalInfo() {
  return (
    <div className="space-y-4">
      {/* Full Name Field */}
      <FormInput
        id="fullName"
        label="Full Name"
        placeholder="John Doe"
        required
      />

      {/* Email Field */}
      <FormInput
        id="email"
        label="Email"
        type="email"
        placeholder="john.doe@example.com"
        required
      />

      {/* Phone Number Field */}
      <FormInput
        id="phoneNumber"
        label="Phone Number"
        type="tel"
        placeholder="1234567890"
        required
      />

      {/* Required fields note */}
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        <p>All fields marked with <span className="text-red-500">*</span> are required</p>
      </div>
    </div>
  );
}