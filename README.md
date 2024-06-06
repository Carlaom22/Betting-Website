# Betting Website

A web application that allows users to bet on sports teams. The standings are displayed using SofaScore, and users can place bets on which team will advance through the group stage.

## Table of Contents

- [Features]
- [Installation]
- [Usage]
- [Folder Structure]
- [Dependencies]
- [Scripts]
- [Contributing]
- [License]

## Features

- Display sports standings using SofaScore
- Allow users to place bets on sports teams
- Backend API to handle bets using Express and MongoDB

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Carlaom22/betting-website.git
   cd betting-website
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up MongoDB:**

   Make sure MongoDB is installed and running on your local machine. The application will connect to MongoDB at `mongodb://localhost:27017/betting` by default.

## Usage

1. **Build the frontend:**

   ```sh
   npm run build
   ```

2. **Start the backend server:**

   ```sh
   npm start
   ```

3. **Development mode:**

   If you want to run the frontend in development mode with hot-reloading, use:

   ```sh
   npm run dev
   ```

4. **Access the application:**

   Open your browser and navigate to `http://localhost:9000` for the frontend, or `http://localhost:3000` for the backend API.

## Folder Structure

```
betting-website/
├── public/
│   ├── index.html
│   └── styles.css
├── src/
│   ├── index.js
│   ├── App.js
│   ├── SofaScore.js
│   └── BettingForm.js
├── .babelrc
├── package.json
├── server.js
└── webpack.config.js
```

## Dependencies

- **Frontend:**
  - React
  - Webpack
  - Babel

- **Backend:**
  - Express
  - Mongoose
  - Body-parser
  - Cors

## Scripts

- `npm run build`: Build the frontend using webpack
- `npm start`: Start the backend server
- `npm run dev`: Start the development server with hot-reloading

## Contributing

Me, myself and I. And ChatGPT.
