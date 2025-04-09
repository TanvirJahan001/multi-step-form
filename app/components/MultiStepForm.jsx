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
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= currentStep
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
                  }`}
              >
                {index + 1}
              </div>
              <span className="text-xs mt-1 text-gray-600">{step.title}</span>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full"></div>
          <div
            className="absolute top-0 left-0 h-1 bg-blue-600 transition-all duration-300"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {steps[currentStep].title}
          </h2>

          <CurrentStepComponent />

          {errorMessage && (
            <div className="p-3 bg-red-100 text-red-800 rounded-md mt-4">
              {errorMessage}
            </div>
          )}

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={goToPreviousStep}
              disabled={currentStep === 0}
              className={`px-4 py-2 rounded-md ${currentStep === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gray-200 hover:bg-gray-300'
                } text-gray-800 transition-colors`}
            >
              Previous
            </button>

            {currentStep === steps.length - 1 ? (
              /* Submit Button - Only on the last step (Summary) */
              <button
                type="submit" /* This triggers the onSubmit function */
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            ) : (
              /* Next Button - On all other steps */
              <button
                type="button" /* This is NOT a submit button */
                onClick={handleStepAdvance} /* This only advances to the next step */
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                Next
              </button>
            )}
          </div>
        </form>
      </FormProvider>

      {submitClicked && submissionSuccess && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
          Form submitted successfully!
        </div>
      )}

      {mutation.isError && (
        <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-md">
          Error submitting form. Please try again.
        </div>
      )}
    </div>
  );
}
