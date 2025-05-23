# BrewLog ☕️

BrewLog is a React + Firebase web application for coffee enthusiasts to track their coffee consumption, monitor caffeine levels, and analyze their coffee habits and spending.

## Features

- 🔐 User authentication (sign up, login, logout) with Firebase Auth
- ☕️ Log coffee drinks with type, cost, and time of consumption
- 📊 View stats: daily caffeine, average coffees, daily/total cost, and most popular drinks
- 🧮 Real-time caffeine level calculation (with half-life decay)
- 🕒 History of all logged drinks
- 🎨 Responsive UI with [FantaCSS](http://www.fantacss.smoljames.com)
- 💾 Data persistence with Firebase Firestore

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/brewlog.git
   cd brewlog
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure Firebase:**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Email/Password authentication and Firestore Database.
   - Copy your Firebase config and add it to a `.env` file in the project root:

     ```
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECTID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APPID=your_app_id
     ```

4. **Run the app:**

   ```sh
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173).

## Project Structure

```
.
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── firebase.js
├── .env
├── package.json
└── ...
```

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Firebase Auth & Firestore](https://firebase.google.com/)
- [FantaCSS](http://www.fantacss.smoljames.com)
- [Font Awesome](https://fontawesome.com/)

## Credits

- App by [Anand Kumar](https://www.linkedin.com/in/anand-kumar-023231291)
- Inspired by coffee lovers everywhere!

## License

MIT

---

> BrewLog: Logging your coffee, one cup at a time!
