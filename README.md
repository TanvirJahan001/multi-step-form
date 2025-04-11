# Multi-Step Form with Dark Mode


## 📋 Overview

A modern, responsive multi-step form application built with Next.js and Tailwind CSS. This application guides users through a sequential form submission process, breaking down complex forms into manageable steps with validation at each stage. It features a beautiful UI with a fully functional dark mode toggle.

## ✨ Features

### Core Features
- **🔄 Multi-step Navigation**: Intuitive step-by-step form progression with progress indicator
- **✅ Form Validation**: Real-time validation using Zod schema validation
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **🌓 Dark Mode**: Toggle between light and dark themes with persistent user preference
- **♿ Accessibility**: ARIA-compliant form controls and keyboard navigation
- **💾 Form State Management**: Persistent form state between steps using React Hook Form
- **🔄 Data Submission**: Simulated API submission with React Query

### Dark Mode Implementation
- **🔘 Theme Toggle**: Accessible toggle button in the top-right corner
- **💾 Preference Persistence**: User's theme preference saved in localStorage
- **🖥️ System Preference Detection**: Automatically detects system color scheme preference
- **🎨 CSS Variables**: Custom CSS variables for consistent theming
- **🔄 Smooth Transitions**: All UI elements smoothly transition between themes

### Form Steps
1. **👤 Personal Information**: Collects user's full name, email, and phone number
2. **🏠 Address Details**: Gathers street address, city, and zip code
3. **🔐 Account Setup**: Requests username and password creation
4. **📋 Summary**: Displays all entered information for review before submission

## 🛠️ Technologies Used

- **Next.js**: React framework for server-rendered applications
- **React**: UI library for building component-based interfaces
- **React Hook Form**: Form state management and validation
- **Zod**: TypeScript-first schema validation
- **Tailwind CSS**: Utility-first CSS framework
- **React Query**: Data fetching and state management library
- **Geist Font**: Modern, minimal typeface from Vercel

## 📸 Screenshots

<details>
<summary>Click to expand screenshots</summary>

### Light Mode
![Light Mode - Personal Information](https://via.placeholder.com/800x500/f3f4f6/333333?text=Light+Mode+-+Personal+Information)
![Light Mode - Summary](https://via.placeholder.com/800x500/f3f4f6/333333?text=Light+Mode+-+Summary)

### Dark Mode
![Dark Mode - Personal Information](https://via.placeholder.com/800x500/1e1e1e/ffffff?text=Dark+Mode+-+Personal+Information)
![Dark Mode - Summary](https://via.placeholder.com/800x500/1e1e1e/ffffff?text=Dark+Mode+-+Summary)
</details>

## 🚀 Getting Started

### Prerequisites
- Node.js 14.x or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/multi-step-form.git

# Navigate to the project directory
cd multi-step-form

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   │   ├── steps/          # Form step components
│   │   │   ├── AccountSetup.jsx
│   │   │   ├── AddressDetails.jsx
│   │   │   ├── PersonalInfo.jsx
│   │   │   └── Summary.jsx
│   │   ├── ThemeProvider.jsx  # Dark mode context provider
│   │   ├── ThemeToggle.jsx    # Dark mode toggle button
│   │   ├── FormSchema.js      # Zod validation schemas
│   │   └── MultiStepForm.jsx  # Main form component
│   ├── globals.css         # Global styles with dark mode variables
│   ├── layout.js           # Root layout component
│   ├── page.js             # Home page component
│   └── providers.js        # React Query and Theme providers
├── public/                 # Static assets
├── .gitignore              # Git ignore file
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.mjs      # PostCSS configuration
└── tailwind.config.js      # TailwindCSS configuration with dark mode
```

## 🔍 Form Validation

Each step of the form includes validation rules defined using Zod schemas:

### Personal Information
- **Full Name**: Required field
- **Email**: Required field, must be a valid email format
- **Phone Number**: Required field, must be at least 10 digits

### Address Details
- **Street Address**: Required field
- **City**: Required field
- **Zip Code**: Required field, must be at least 5 digits

### Account Setup
- **Username**: Required field, must be at least 4 characters
- **Password**: Required field, must be at least 6 characters
- **Confirm Password**: Required field, must match password

## 🎨 Dark Mode Implementation

### CSS Variables
The application uses CSS variables to manage colors across light and dark modes:

```css
:root {
  /* Light mode variables */
  --background: #ffffff;
  --foreground: #171717;
  --card-bg: #ffffff;
  /* ... more variables ... */
}

.dark {
  /* Dark mode variables */
  --background: #121212;
  --foreground: #f3f4f6;
  --card-bg: #1e1e1e;
  /* ... more variables ... */
}
```

### ThemeProvider
A React context provider that manages the dark mode state:
- Detects system color scheme preference
- Stores user preference in localStorage
- Provides a toggle function to switch between modes

### Theme Toggle
A button component that:
- Displays in the top-right corner of the screen
- Shows a sun icon in dark mode and moon icon in light mode
- Toggles between light and dark themes when clicked

## 🧩 Adding New Form Steps

To add a new form step:

1. Create a new component in the `app/components/steps` directory
2. Update the `steps` array in `MultiStepForm.jsx`
3. Add corresponding validation schema in `FormSchema.js`
4. Update the form's default values in `MultiStepForm.jsx`

## 🚀 Deployment

The application can be deployed using Vercel:

```bash
# Build the application
npm run build

# Start the production server
npm start
```

For more deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms
- [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema validation
- [React Query](https://tanstack.com/query/latest) - Powerful asynchronous state management
