import React from 'react';

const Preview: React.FC<{ exams: Array<{ type: string; session: string; time: string; duration: string }> }> = ({ exams }) => {
    return (
        <div>
            <h2>Exam Preview</h2>
            {exams.length === 0 ? (
                <p>No exams scheduled.</p>
            ) : (
                <ul>
                    {exams.map((exam, index) => (
                        <li key={index}>
                            <strong>Exam Type:</strong> {exam.type} <br />
                            <strong>Session:</strong> {exam.session} <br />
                            <strong>Time:</strong> {exam.time} <br />
                            <strong>Duration:</strong> {exam.duration} <br />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Preview;