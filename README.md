# Multi-Step Form Application

## Overview

This is a modern, responsive multi-step form application built with Next.js. The application guides users through a sequential form submission process, breaking down complex forms into manageable steps with validation at each stage.

## Features

- **Multi-step Navigation**: Intuitive step-by-step form progression
- **Form Validation**: Real-time validation using Zod schema validation
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Dark Mode Support**: Automatic theme switching based on system preferences
- **Accessibility**: ARIA-compliant form controls and keyboard navigation
- **Form State Management**: Persistent form state between steps using React Hook Form
- **Data Submission**: Simulated API submission with React Query

## Technologies Used

- **Next.js 15.2.5**: React framework for server-rendered applications
- **React 19.0.0**: UI library for building component-based interfaces
- **React Hook Form 7.55.0**: Form state management and validation
- **Zod 3.24.2**: TypeScript-first schema validation
- **TailwindCSS 4**: Utility-first CSS framework
- **React Query 5.72.1**: Data fetching and state management library
- **Geist Font**: Modern, minimal typeface from Vercel

## Installation

```bash
# Clone the repository (if applicable)
# git remote https://github.com/TanvirJahan001/multi-step-form.git

# Navigate to the project directory
cd multi-step-form

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   │   ├── steps/          # Form step components
│   │   │   ├── AccountSetup.jsx
│   │   │   ├── AddressDetails.jsx
│   │   │   ├── PersonalInfo.jsx
│   │   │   └── Summary.jsx
│   │   ├── ui/             # Reusable UI components
│   │   │   ├── FormField.jsx
│   │   │   └── FormInput.jsx
│   │   ├── FormSchema.js   # Zod validation schemas
│   │   └── MultiStepForm.jsx # Main form component
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout component
│   ├── page.js             # Home page component
│   └── providers.js        # React Query provider
├── public/                 # Static assets
├── .gitignore              # Git ignore file
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.mjs      # PostCSS configuration
└── tailwind.config.js      # TailwindCSS configuration
```

## Form Steps

1. **Personal Information**: Collects user's full name, email, and phone number
2. **Address Details**: Gathers street address, city, and zip code
3. **Account Setup**: Requests username and password creation
4. **Summary**: Displays all entered information for review before submission

## Form Validation

Each step of the form includes validation rules defined using Zod schemas:

- **Personal Information**: Validates name presence, email format, and phone number format
- **Address Details**: Ensures address fields are properly filled
- **Account Setup**: Validates username length, password requirements, and password confirmation match

## Development

### Making Changes

You can start editing the application by modifying files in the `app` directory. The application uses Next.js App Router, so changes will be reflected in real-time during development.

### Adding New Form Steps

To add a new form step:

1. Create a new component in the `app/components/steps` directory
2. Update the `steps` array in `MultiStepForm.jsx`
3. Add corresponding validation schema in `FormSchema.js`
4. Update the form's default values in `MultiStepForm.jsx`

## Deployment

The application can be deployed using Vercel:

```bash
# Build the application
npm run build

# Start the production server
npm start
```

For more deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is open source and available under the [MIT License](LICENSE).
