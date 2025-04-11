'use client';
import { useState } from 'react';

const Summary = ({ formData, prevStep }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log('Submitted Data:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 border-b border-purple-100 dark:border-gray-700 pb-2">Review Your Information</h2>

      {isSubmitted ? (
        <div className="bg-[var(--success-bg)] p-6 rounded-lg border border-[var(--success-border)] text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-emerald-500 dark:text-emerald-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-bold text-[var(--success-text)] mb-2">Form Submitted Successfully!</h3>
          <p className="text-[var(--success-text)] opacity-90">Thank you for completing the form. Your information has been received.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">Personal Information</h3>
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-gray-500 dark:text-gray-400 w-32">Full Name:</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">{formData.fullName}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 dark:text-gray-400 w-32">Email:</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">{formData.email}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 dark:text-gray-400 w-32">Phone Number:</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">{formData.phoneNumber}</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">Address Details</h3>
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-gray-500 dark:text-gray-400 w-32">Street Address:</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">{formData.streetAddress}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 dark:text-gray-400 w-32">City:</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">{formData.city}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 dark:text-gray-400 w-32">Zip Code:</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">{formData.zipCode}</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">Account Information</h3>
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-gray-500 dark:text-gray-400 w-32">Username:</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">{formData.username}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 dark:text-gray-400 w-32">Password:</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">••••••••</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-sm font-medium transition-all duration-200 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 dark:from-emerald-600 dark:to-teal-600 dark:hover:from-emerald-700 dark:hover:to-teal-700 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow flex items-center"
            >
              Submit
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Summary;