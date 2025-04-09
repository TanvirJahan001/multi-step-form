
/**
 * Address Details Form Step
 *
 * This component renders the second step of the multi-step form,
 * collecting the user's address information including:
 * - Street Address
 * - City
 * - Zip Code
 */

import FormInput from '../ui/FormInput';

export default function AddressDetails() {
  return (
    <div className="space-y-4">
      {/* Street Address Field */}
      <FormInput
        id="streetAddress"
        label="Street Address"
        placeholder="123 Main St"
        required
      />

      {/* City Field */}
      <FormInput
        id="city"
        label="City"
        placeholder="New York"
        required
      />

      {/* Zip Code Field */}
      <FormInput
        id="zipCode"
        label="Zip Code"
        placeholder="10001"
        required
      />

      {/* Required fields note */}
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        <p>All fields marked with <span className="text-red-500">*</span> are required</p>
      </div>
    </div>
  );
}