# REST Countries API with Color Theme Switcher
> A responsive REST Countries API web application built with React and Tailwind CSS.
> This project was created to practice React fundamentals, state management, prop drilling, dynamic filtering, theme switching (Light/Dark mode), and external API integration.

---

## Overview

![Preview](./preview.jpg)

### About The Project
This is a React-based interactive web application that fetches data from a REST Countries dataset to display detailed information about countries around the world. Users can search for specific countries, filter them by region, toggle between Light and Dark visual modes, and click on any country card to view detailed specs including border countries.

The application allows users to:
- View all countries on the homepage with their flags, population, region, and capital
- Search for a country using a live text input field
- Filter countries by region (Africa, Americas, Asia, Europe, Oceania)
- Click on a country card to see a detailed page with expanded information
- Navigate through border countries directly from the detail view
- Toggle the theme between Light Mode and Dark Mode with persistent user selection via `localStorage`

### Live Demo
[Live Demo](https://rest-countries-api-seven-woad.vercel.app/) <!-- Add your Vercel or Netlify link here -->

### Repository
[GitHub Repository](https://github.com/abdullah-zulfiqar0/rest-countries-Api) <!-- Update with your exact repo link -->

---

## My Process

### Built With
- React.js
- JavaScript (ES6+)
- JSX
- Tailwind CSS
- Axios (for data fetching)
- React Hooks (`useState`, `useEffect`)
- Component-Based Architecture & Prop Drilling
- Responsive Design (Flexbox & CSS Grid)

### What I Learned
While building this project, I strengthened my core understanding of state management, API data handling, conditional rendering, and theme management without relying on external libraries or Context API.

This project helped me understand:
- How to manage complex application state using `useState` and pass it down via prop drilling
- How to fetch data asynchronously using Axios within the `useEffect` hook
- How to write clean, derived filtering logic that combines both search input and region filter simultaneously
- How to implement a Dark/Light mode toggle that updates the root DOM class and persists preferences in `localStorage`
- How to dynamically render UI states based on API status (Loading, Error, Data render)
- How to look up related array data using `find()` to enable seamless navigation through border countries
- How to build clean, accessible, and fully responsive layouts with Tailwind CSS

### Continued Development
In future projects, I want to focus more on:
- Managing global state using **React Context API** and **Redux Toolkit / Zustand** for larger applications
- Implementing client-side routing with **React Router** for dedicated multi-page navigation
- Enhancing performance using optimization hooks like `useMemo` and `useCallback`
- Writing custom reusable React hooks to separate business logic from UI components
- Connecting web applications with live backend APIs and handling real-time data sync

### Useful Resources
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Frontend Mentor](https://www.frontendmentor.io/)

---

## Author
- **Name:** Abdullah Zulfiqar
- **GitHub:** [github.com/abdullah-zulfiqar0](https://github.com/abdullah-zulfiqar0)

---

## Acknowledgments
This project is a solution to a Frontend Mentor challenge, built as part of my React learning journey to strengthen my understanding of component hierarchies, state management, prop drilling, and API data processing.
