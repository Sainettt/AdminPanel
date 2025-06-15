# 📊 Staff Hours

Staff Hours is a mobile application built with React Native, designed for managing employee working hours in a company. The application allows registering workers, editing their data, and adding work hour logs. Perfect for small organizations and managers who need to track team productivity.

## 🧠 Features

- User authentication (including workers and administrators)
- CRUD operations for worker accounts
- Adding and viewing work hour logs
- Secure storage of tokens and data
- Notifications (when manager authenticates)

## 📱 Tech Stack
### Client (React Native + Expo)
- React Native (with Expo)
- Expo Notifications — notifications
- Expo Secure Store — secure token storage
- Axios — network requests
- CryptoJS — encryption
- Jest — testing
- React Navigation — navigation between screens

### Server (Express + PostgreSQL)
- Express — server API
- dotenv — environment variables
- pg — PostgreSQL client
- Knex — SQL query builder
- jsonwebtoken — authorization and API protection

## 🧭 Screen Structure
### Authentication (3 screens):
- LoginScreen — login
- RegisterScreen — registration
- AuthScreen — welcome and routing
### Main Application (5 screens):
- UserListScreen — worker list
- AddUserScreen - worker creation
- EditSesnsitiveInfoScreen — worker data modification
- UserWorkLogsScreen — worker logs viewing
- AddWorkLogScreen — adding work hour logs

## 🚀 Installation and Setup
1. Clone the repository
- git clone https://github.com/Sainettt/Staff-Hours.git
- cd staff-hours
  
2. Install React Native dependencies
- cd react-native
- npm install
  
3. Install server dependencies
- cd ../back-end
- npm install

## ⚙️ Environment Configuration
### React Native (react-native/constants.js)
- Specify your machine's IP address (where backend is running) in the api_url variable:
- // Example
- export const api_url = "http://192.168.1.5:3000";
- ⚠️ Make sure you're using a local IP address accessible from device/emulator.

### Backend (back-end/.env)
- Create .env file in back-end folder:

- PORT=3000
- JWT_SECRET=your_jwt_secret
- DB_HOST=localhost
- DB_USER=your_user
- DB_PASSWORD=your_password
- DB_NAME=staff_hours_db

## 🛠️ Running the Application
### Start the backend server
- cd back-end
- npm start

### Start the React Native app
- cd react-native
- npx expo start
### Open Expo Go on your phone or Android/iOS emulator.

## 📌 Notes
- Application actively uses REST API, all data is retrieved from backend
- Notifications work through expo-notifications — don't forget to allow notifications on device
- Currently the project lacks full roles — all workers are equal
  
### 🤝 Contributing
- Fork the project
- Create your feature branch (git checkout -b feature/myFeature)
- Commit your changes (git commit -m 'Add some myFeature')
- Push to the branch (git push origin feature/myFeature)
- Open a Pull Request