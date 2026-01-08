# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




 <!-- Simple Booking Manager -->

A basic full-stack booking management system built to demonstrate fundamental full-stack skills, clean code, and learning approach.

🛠 Tech Stack

Frontend: React, Formik, Yup, Tailwind CSS

Backend: Node.js, Express

Database: MongoDB

<!-- Features -->

Create booking

View all bookings

Update booking

Delete booking

Form validation using Formik + Yup

Basic error handling

 <!-- API Endpoints -->
Method	Endpoint
POST	/api/bookings
GET	/api/bookings
PUT	/api/bookings/:id
DELETE	/api/bookings/:id
 <!-- Run Project -->
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev

 <!-- Purpose -->

This project focuses on clarity, fundamentals, and real-world CRUD flow, not advanced features or over-engineering.