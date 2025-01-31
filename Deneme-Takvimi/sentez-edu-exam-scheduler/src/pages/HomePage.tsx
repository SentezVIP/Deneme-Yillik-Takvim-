import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Sentez Eğitim Exam Scheduler</h1>
            <p>Here you can find the latest exam schedule and important information.</p>
            <Link to="/calendar">View Exam Calendar</Link>
            <p>If you are an admin, please <Link to="/login">login here</Link> to manage exams.</p>
        </div>
    );
};

export default HomePage;