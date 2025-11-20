# 🔐 Password Generator

A fully interactive password generator built with **React**, featuring customisable password options, auto-generation, clipboard copy functionality, and a clean UI powered by **Material UI**.

This project demonstrates practical front-end development skills, including component design, controlled forms, state management, and utility-based logic separation.

---

## 🚀 Features

- **Auto-generate password** whenever options change
- Adjustable **password length slider**
- Toggle **uppercase / lowercase / numbers / symbols**
- Generate password on demand
- **Copy to clipboard** button
- Password strength indicator
- Built with **Material UI** for consistent, modern styling
- Clean, reusable React components

---

## 🧩 Tech Stack

- **React (Hooks)**
- **Material UI**
- **Vite**
- **JavaScript (ES6+)**
- **SCSS**
- Custom password generation utility

---

## 📂 Project Structure

### 🔍 Component Responsibilities

- **PasswordOptions**  
  - Sliders + checkboxes for all config options  
  - Controlled inputs synced with parent state  

- **PasswordDisplay**  
  - Renders password  
  - "Copy" button triggers clipboard API  

- **generatePassword.js**  
  - Receives options  
  - Builds character pool dynamically  
  - Returns new random password  

- **App.jsx**  
  - Global state holder  
  - Handles auto-generation  
  - Integrates UI components

---

## ▶️ How to Run

```bash
npm install
npm run dev

💡 What I Learned

Designing React components that communicate via props

Managing multiple related pieces of state with objects

Using useEffect to trigger auto-generation logic

Implementing clipboard copy using the Clipboard API

Integrating Material UI for a professional UI

Structuring a project with isolated utility modules

This project demonstrates practical skills relevant to everyday front-end tasks in Australian companies, including forms, interactive controls, state-driven UI, and reusable component patterns.

🛠️ Potential Improvements

Add password strength scoring algorithm

Add dark mode toggle

Add “Include similar characters” filter

Persist user options in localStorage

Convert to TypeScript for stronger typing
