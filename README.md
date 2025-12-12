# 📝 React Blog Application

This project is a technical challenge consisting of a **blog application built with React**.  
The main goal is to demonstrate **clean code**, **good architecture**, **component reusability**, **state management**, and **UI fidelity**.

The application allows users to browse blog posts, filter them by category or author, search content, sort results, and view individual post details.

---

## 🚀 Tech Stack

- **React** (with Vite)
- **TypeScript**
- **React Router DOM**
- **Context API** (state management)
- **CSS Modules**
- **ESLint**

---

## 📁 Project Structure

Below is an overview of the project structure and the responsibility of each folder:

```

src/
├── assets/        # Static assets (svg)
├── components/    # Reusable UI components (buttons, postCard, loaders, etc.)
├── context/       # Context API providers and contexts
├── hooks/         # Custom React hooks (data fetching, logic abstraction)
├── pages/         # Application pages (Home, Post details, 404)
├── router/        # Application routing configuration
├── services/      # API and data-fetching logic
├── types/         # TypeScript types and interfaces
├── util/          # Utility/helper functions
│
├── index.css      # Global styles and CSS variables
├── main.tsx       # Application entry point


## ▶️ How to Run the Project

Follow the steps below to run the project locally:

### 1. Clone the repository
```bash
git clone <repository-url>
````

### 2. Navigate to the project folder

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 6. Create a .env File

You need to create a .env file before run the server, for that follow the steps:

1 - Rename the .env-example for .env in the root of the project
2 - Change the variable for the api URL:

```bash
VITE_API_URL = ""
```


### 7. Run the development server


```bash
npm run dev
```

### 8. Open the application

After running the command above, open your browser and access:

```
http://localhost:5173
```

---

## 🧪 Linting

To run ESLint and check for code quality issues:

```bash
npm run lint
```

---

## 📦 Build for Production

To generate a production-ready build:

```bash
npm run build
```

To preview the build locally:

```bash
npm run preview
```

After running the command above, open your browser and access:

```
http://localhost:4173

---

## 👨‍💻 Author

Developed as part of a technical challenge to demonstrate React and frontend engineering skills.

```
