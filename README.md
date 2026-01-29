# Nike Shoes Ecommerce

A modern, responsive ecommerce website for Nike shoes, rebuilt from legacy HTML/CSS using **React** and **Tailwind CSS**. This project features a high-performance UI, smooth animations, and a fully functional shopping cart with persistent state.

## 🚀 Tech Stack

- **Framework:** [React](https://react.dev/) (Vite)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management:** React Context API
- **Persistence:** LocalStorage
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

## ✨ Features

- **Responsive Design:** Mobile-first approach ensuring a seamless experience across all devices (Mobile, Tablet, Desktop).
- **Shopping Cart:**
  - Add, remove, and update item quantities.
  - Real-time cart total calculation.
  - **Persistence:** Cart state is saved to `localStorage`, so items remain after page refreshes.
- **Modern UI/UX:**
  - Glassmorphism effects and gradient accents.
  - Smooth scroll and reveal animations using Framer Motion.
  - Interactive hover states and product filtering.
- **Component-Based Architecture:** Clean, reusable React components (`ProductCard`, `Navbar`, `Footer`, etc.).

## 📂 Project Structure

```
src/
├── components/   # Reusable UI components (Navbar, Cart, Footer, ProductCard)
├── sections/     # Landing page sections (Hero, PopularProducts, AboutUs, etc.)
├── context/      # Global state management (CartContext)
├── constants/    # Static data (Products, Reviews, NavLinks)
├── assets/       # Images and media files
└── index.css     # Tailwind v4 configuration and global styles
```

## 🛠️ Getting Started

Follow these steps to run the project locally:

1.  **Navigate to the project directory:**

    ```bash
    cd my-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📝 Notes

- The project uses **Tailwind CSS v4**, utilizing the new CSS-first configuration approach in `src/index.css`.
- All product data is currently mocked in `src/constants/index.js` for demonstration purposes but structured to be easily replacable with an API response.
