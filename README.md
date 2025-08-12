# My Personal Portfolio

This repository contains the code for my personal portfolio website, showcasing my skills, projects, and contact information. The main focus is on creating a clean, modern, and responsive user interface.

## Technologies Used

This project is built with the following modern web development technologies:

  * **React:** A JavaScript library for building user interfaces.
  * **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
  * **Vite:** A fast build tool that provides a lightning-fast development experience.
  * **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
  * **shadcn-ui:** A collection of accessible and reusable components built with Radix UI and Tailwind CSS.
  * **Lucide-React:** A clean and consistent icon library.

## Getting Started

To get a copy of this project up and running on your local machine, follow these simple steps.

### Prerequisites

Make sure you have the following installed:

  * **Node.js:** (version 18 or later is recommended)
  * **npm:** (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/BahetiGiriraj/your-repository-name.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repository-name
    ```
3.  **Install the dependencies:**
    ```sh
    npm install
    ```

### Running the Project

To start the development server and view the project in your browser, run:

```sh
npm run dev
```

This will run the application on `http://localhost:5173` (or another port if 5173 is in use). The page will automatically reload as you make changes.

## File Structure

The core code for the header component is located at `src/components/Header.tsx`.

```
/
├── public/
│   └── assets/
│       └── profile/
│           └── profile.png  # Your profile image
├── src/
│   ├── components/
│   │   ├── ui/               # shadcn-ui components
│   │   └── Header.tsx        # The main header component
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Entry point of the application
│   └── index.css             # Global Tailwind CSS styles
├── tailwind.config.js        # Tailwind CSS configuration
└── package.json              # Project dependencies and scripts
```

## Customization

You can easily customize this component to fit your needs:

  * **Change the name and title:** Edit the text directly in `src/components/Header.tsx`.
  * **Update social links:** Modify the `onClick` events on the social buttons with your own LinkedIn and GitHub URLs.
  * **Replace the profile picture:** Place your own image in `public/assets/profile/profile.png` (or update the path in the `img` tag).
  * **Adjust styling:** Use the Tailwind CSS classes within the component to change colors, sizes, and layout.

-----

Feel free to customize this `README` further with any additional sections, such as a **Contact** section or details about deploying the project.
