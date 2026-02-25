# Fullstack Login System

A simple fullstack authentication system using Angular, Node.js, Express, TypeScript, MySQL, and JWT.

## Features

- Register and Login

- JWT Authentication

- Protected Profile API

- Angular frontend + Express backend

- MySQL database

- Password hashing with bcrypt

## Tech Stack

- Frontend: Angular, TypeScript

- Backend: Node.js, Express, TypeScript

- Database: MySQL

- Auth: JWT, bcrypt

## Setup
### Backend
cd backend  
npm install  
npm run dev

### Create .env:

PORT=3001  
DB_HOST=localhost  
DB_USER=root  
DB_PASSWORD=yourpassword  
DB_NAME=login_system  
JWT_SECRET=your_secret  

### Frontend
cd frontend    
npm install  
ng serve  

- Frontend: http://localhost:4200
- Backend: http://localhost:3001

## API

### Register

POST /api/auth/register

### Login

POST /api/auth/login

### Profile (Protected)

GET /api/auth/profile  
Authorization: Bearer TOKEN

## Author

Punnathorn Musikphan  
https://github.com/PunTwT
