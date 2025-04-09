import MultiStepForm from "./components/MultiStepForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Multi-Step Form
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Complete the form by navigating through each step
          </p>
        </div>

        <MultiStepForm />
      </div>
    </div>
  );
}
