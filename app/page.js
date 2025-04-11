'use client';
import { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Summary from './components/Summary';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    zipCode: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  // Calculate progress percentage
  const progressPercentage = ((currentStep - 1) / 3) * 100;

  return (
    <div className="bg-[var(--card-bg)] rounded-xl shadow-xl overflow-hidden border border-[var(--card-border)] transition-colors duration-300">
      {/* Progress bar */}
      <div className="h-2 bg-gray-100 dark:bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-[var(--primary-gradient-from)] to-[var(--primary-gradient-to)] transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Step indicators */}
      <div className="flex justify-between px-8 pt-6">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${step < currentStep
                ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 scale-90'
                : step === currentStep
                  ? 'bg-gradient-to-r from-[var(--primary-gradient-from)] to-[var(--primary-gradient-to)] text-white ring-4 ring-indigo-100 dark:ring-indigo-900/30 scale-110 shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                }`}
            >
              {step}
            </div>
            <span className={`text-xs mt-2 font-medium ${step === currentStep ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'}`}>
              {step === 1 ? 'Personal' : step === 2 ? 'Address' : step === 3 ? 'Account' : 'Summary'}
            </span>
          </div>
        ))}
      </div>

      <div className="p-8">
        {currentStep === 1 && <Step1 nextStep={nextStep} updateFormData={updateFormData} formData={formData} />}
        {currentStep === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} formData={formData} />}
        {currentStep === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} formData={formData} />}
        {currentStep === 4 && <Summary formData={formData} prevStep={prevStep} />}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[var(--primary-gradient-from)] to-[var(--primary-gradient-to)] bg-clip-text text-transparent sm:text-5xl">
            Multi-Step Form
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
            Complete the form by navigating through each step
          </p>
        </div>

        <MultiStepForm />
      </div>
    </div>
  );
}
