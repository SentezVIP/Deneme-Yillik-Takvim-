import React, { useState, useEffect } from 'react';
import { fetchExams } from '../services/api';

const Calendar = () => {
    const [exams, setExams] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    useEffect(() => {
        const loadExams = async () => {
            const examData = await fetchExams();
            setExams(examData);
        };
        loadExams();
    }, []);

    const handleMonthChange = (direction) => {
        const newMonth = new Date(currentMonth.setMonth(currentMonth.getMonth() + direction));
        setCurrentMonth(newMonth);
    };

    const renderCalendar = () => {
        const month = currentMonth.getMonth();
        const year = currentMonth.getFullYear();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startDay = firstDay.getDay();

        const calendarDays = [];
        for (let i = 0; i < startDay; i++) {
            calendarDays.push(<div className="empty-day" key={`empty-${i}`}></div>);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const examDate = new Date(year, month, day);
            const examList = exams.filter(exam => new Date(exam.date).toDateString() === examDate.toDateString());
            calendarDays.push(
                <div className="calendar-day" key={day}>
                    <span>{day}</span>
                    {examList.map(exam => (
                        <div key={exam.id} className="exam-item">
                            {exam.type} - {exam.session}
                        </div>
                    ))}
                </div>
            );
        }
        return calendarDays;
    };

    return (
        <div className="calendar">
            <header>
                <button onClick={() => handleMonthChange(-1)}>Previous</button>
                <h2>{currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}</h2>
                <button onClick={() => handleMonthChange(1)}>Next</button>
            </header>
            <div className="calendar-grid">
                {renderCalendar()}
            </div>
        </div>
    );
};

export default Calendar;