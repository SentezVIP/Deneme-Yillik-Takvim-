import React, { useState } from 'react';
import ExamForm from '../components/ExamForm';
import Preview from '../components/Preview';
import { addExam } from '../services/api';

const AdminPanel = () => {
    const [exams, setExams] = useState([]);

    const handleAddExam = (exam) => {
        setExams([...exams, exam]);
        addExam(exam); // Assuming this function handles the API call to add the exam
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <ExamForm onAddExam={handleAddExam} />
            <Preview exams={exams} />
        </div>
    );
};

export default AdminPanel;