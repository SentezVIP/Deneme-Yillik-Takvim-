# Sentez Edu Exam Scheduler

## Overview
Sentez Edu Exam Scheduler is a web application designed for students and administrators to manage and view exam schedules. The application allows administrators to define exams and students to view them in a calendar format.

## Features
- **Admin Panel**: A dedicated interface for administrators to log in and manage exam schedules.
- **Exam Form**: A form for entering exam details such as type, session, time, and duration.
- **Calendar View**: A calendar interface displaying scheduled exams for easy navigation.
- **Preview Exams**: A preview section to review exams that have been added.

## Project Structure
```
sentez-edu-exam-scheduler
├── src
│   ├── components
│   │   ├── Calendar.tsx
│   │   ├── ExamForm.tsx
│   │   ├── Login.tsx
│   │   └── Preview.tsx
│   ├── pages
│   │   ├── AdminPanel.tsx
│   │   └── HomePage.tsx
│   ├── services
│   │   └── api.ts
│   ├── App.tsx
│   └── index.tsx
├── public
│   ├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/sentez-edu-exam-scheduler.git
   ```
2. Navigate to the project directory:
   ```
   cd sentez-edu-exam-scheduler
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.