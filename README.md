# DevStack — Tech Stack Builder

DevStack is an interactive web application that helps developers explore popular technologies, compare tools, and easily build their ideal development stack.

---

## Technologies Used

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React-Toastify**
- **React Icons**

---

## Features

1. **Dynamic Technology Grid**: Displays technology cards loaded dynamically from a JSON file with ratings, category tags, difficulty level, and badges.
2. **Interactive Stack Management**: Add technologies to the "Your Stack" sidebar with one click. Prevent duplicate items, remove single items, or clear the entire stack with "Remove All".
3. **Instant Feedback & Responsive Design**: Instant toast notifications using React-Toastify for adding, removing, and duplicate attempts, fully responsive across mobile, tablet, and desktop screens.

---

## React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX is an HTML-like syntax used in React. It allows us to write HTML directly inside JavaScript to build UI easily.

### 2. What is the difference between props and state?
- **Props**: Data passed into a component from outside (read-only).
- **State**: Internal data managed inside the component that can change.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` stores and updates dynamic data in a component. In this project, it was used in `Stack.tsx` to store the selected technologies (`selectedStacks`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects like data fetching. It is needed to load the JSON data once when the component mounts so it does not fetch repeatedly on every render.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses the unique `key` to identify each item in a list and update only the changed items instead of re-rendering the whole list.

### 6. What is conditional rendering? Show one place you used it:
Conditional rendering means showing different UI based on a condition. In `Stack.tsx`, it shows an empty message if no technologies are selected, and shows the selected list when items are added.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to child**: Passes data down using **props**.
- **Child to parent**: Calls a **callback function** that the parent passed down as a prop.
