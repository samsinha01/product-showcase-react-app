# Product Showcase react App

## Overview
The *Product Showcase App* is a modern ReactJS application designed to display a collection of product cards. Each card contains details like product image, brand, category, price, and description. Users can interact with the cards to reveal or hide additional details dynamically using the "Read More" button. This app demonstrates effective state management and responsive design principles in ReactJS.

---

## Features

- *Dynamic Product Rendering*: Automatically renders product cards based on data provided in an array of objects.
- *Individual Description Toggle*: Each card's description can be toggled independently using the "Read More" button.
- *Responsive Design*: The app uses flexbox to align and display cards in a user-friendly and responsive layout.
- *State Management*: Utilizes the useState hook for dynamic UI updates.
- *Reusable Components*: Well-structured code with reusable components for better scalability and maintenance.

---

## Technologies Used

- *ReactJS*: Core framework for building the user interface.
- *CSS*: Styling for responsive and attractive UI.
- *JavaScript (ES6)*: Logic for dynamic rendering and interactivity.
- *React Hooks*: Simplified state and lifecycle management.

---

## Installation and Setup

Follow these steps to set up the app locally:

1. *Clone the Repository*
   ```bash
   git clone <repository-url>
   cd product-showcase-app

## File Structure
src/
├── components/
│   ├── ProductCardMain.jsx  # Component handling the layout of product cards
│   └── ProductCard.jsx      # Component rendering individual product cards
├── ProductData.jsx          # Product data (array of objects)
├── App.css                  # Application styles
└── App.jsx                  # Root component of the app

## How It Works

*Dynamic Rendering*: The ProductCard component maps through the product data array to generate individual cards dynamically.
*State Management*: Each card tracks its own toggle state with useState. The openCardId determines which card's description is visible.
*Responsive Layout*: Cards are wrapped in a flexbox container for seamless alignment and spacing.

---

## 👨‍💻 About Me

### *Sameer Sinha*  
I am a passionate *Frontend/UI-UX Developer* with over *2+ years of experience* in building and designing visually appealing and user-friendly websites and applications. I specialize in creating responsive, efficient, and aesthetically pleasing interfaces.

### *Skills:*
- *HTML5* 📝
- *CSS3* 🎨
  - *CSS Libraries*: Bootstrap, Tailwind
  - *CSS Preprocessors*: SASS, LESS
- *JavaScript* 💻
  - *JavaScript Libraries*: jQuery
  - *JavaScript Frameworks*: React
- *Other Skills*: Dart, Canva 🎨

Feel free to connect with me or explore my work! 😊
- *anuragsinha.20411@gmail.com*