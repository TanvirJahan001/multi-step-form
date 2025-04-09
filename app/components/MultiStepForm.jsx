'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { formSchema } from './FormSchema';

// Import step components
import AccountSetup from './steps/AccountSetup';
import AddressDetails from './steps/AddressDetails';
import PersonalInfo from './steps/PersonalInfo';
import Summary from './steps/Summary';

const steps = [
  { id: 'personal', title: 'Personal Information', component: PersonalInfo },
  { id: 'address', title: 'Address Details', component: AddressDetails },
  { id: 'account', title: 'Account Setup', component: AccountSetup },
  { id: 'summary', title: 'Summary', component: Summary },
];

// Simulate API submission
const submitFormData = async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data;
};

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      streetAddress: '',
      city: '',
      zipCode: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { handleSubmit, trigger, getValues, formState } = methods;
  const { isSubmitting } = formState;

  const [errorMessage, setErrorMessage] = useState('');

  // Track if the Submit button has been clicked
  const [submitClicked, setSubmitClicked] = useState(false);

  // Track if the form submission was successful
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const mutation = useMutation({
    mutationFn: submitFormData,
    onSuccess: (data) => {
      // Only show success message if Submit was clicked
      if (submitClicked) {
        setSubmissionSuccess(true);
        // Log the successful submission data
        console.log('Form submitted successfully:', data);
      }
    },
  });

  const CurrentStepComponent = steps[currentStep].component;

  const getFieldsToValidate = (step) => {
    switch (step) {
      case 0:
        return ['fullName', 'email', 'phoneNumber'];
      case 1:
        return ['streetAddress', 'city', 'zipCode'];
      case 2:
        return ['username', 'password', 'confirmPassword'];
      default:
        return [];
    }
  };

  const areCurrentStepFieldsFilled = () => {
    const fieldsToCheck = getFieldsToValidate(currentStep);
    const values = getValues();

    return fieldsToCheck.every(field => {
      const value = values[field];
      return value !== undefined && value !== null && value.toString().trim() !== '';
    });
  };

  const goToNextStep = async () => {
    const fieldsToValidate = getFieldsToValidate(currentStep);
    const allFieldsFilled = areCurrentStepFieldsFilled();

    if (!allFieldsFilled) {
      setErrorMessage('Please fill in all required fields before proceeding.');
      return;
    }

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setErrorMessage('');
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    } else {
      setErrorMessage('Please fix the validation errors before proceeding.');
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setErrorMessage('');
      setCurrentStep(currentStep - 1);
    }
  };

  // Reset submission state when changing steps
  useEffect(() => {
    setSubmitClicked(false);
    setSubmissionSuccess(false);
  }, [currentStep]);

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      setSubmitClicked(true);

      // Log the form data to the console
      console.log('Form data being submitted:', data);

      // Submit the form data
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Reset success state on error
      setSubmissionSuccess(false);
    }
  };

  const handleStepAdvance = async () => {
    if (currentStep < steps.length - 1) {
      await goToNextStep();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
      {/* Progress Indicator */}
      <div className="mb-10">
        <div className="flex justify-between relative z-10">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${index < currentStep
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 scale-90'
                  : index === currentStep
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500 ring-4 ring-indigo-100 dark:ring-indigo-900 scale-110 shadow-md'
                    : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                  }`}
              >
                {index + 1}
              </div>
              <span className={`text-xs mt-2 font-medium transition-all duration-300 ${index === currentStep ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'}`}>{step.title}</span>
            </div>
          ))}
        </div>
        <div className="relative mt-5">
          <div className="absolute top-0 left-0 h-1.5 bg-gray-200 dark:bg-gray-700 w-full rounded-full"></div>
          <div
            className="absolute top-0 left-0 h-1.5 bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
            {steps[currentStep].title}
          </h2>

          <CurrentStepComponent />

          {errorMessage && (
            <div className="p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg mt-6 flex items-center shadow-sm border border-red-100 dark:border-red-900/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errorMessage}
            </div>
          )}

          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={goToPreviousStep}
              disabled={currentStep === 0}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center ${currentStep === 0
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed opacity-70'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-sm'
                }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            {currentStep === steps.length - 1 ? (
              /* Submit Button - Only on the last step (Summary) */
              <button
                type="submit" /* This triggers the onSubmit function */
                disabled={isSubmitting}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </>
                )}
              </button>
            ) : (
              /* Next Button - On all other steps */
              <button
                type="button" /* This is NOT a submit button */
                onClick={handleStepAdvance} /* This only advances to the next step */
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow flex items-center"
              >
                Next
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </form>
      </FormProvider>

      {submitClicked && submissionSuccess && (
        <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg flex items-center shadow-sm border border-emerald-100 dark:border-emerald-900/50 animate-fadeIn">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Form submitted successfully!
        </div>
      )}

      {mutation.isError && (
        <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center shadow-sm border border-red-100 dark:border-red-900/50 animate-fadeIn">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          Error submitting form. Please try again.
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
