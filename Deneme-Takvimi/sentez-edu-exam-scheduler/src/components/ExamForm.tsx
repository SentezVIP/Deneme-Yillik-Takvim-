import React, { useState } from 'react';

const ExamForm = ({ onAddExam }) => {
    const [examType, setExamType] = useState('');
    const [examSession, setExamSession] = useState('');
    const [examTime, setExamTime] = useState('');
    const [examDuration, setExamDuration] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const exam = { type: examType, session: examSession, time: examTime, duration: examDuration };
        onAddExam(exam);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Sınav Türü:</label>
                <select value={examType} onChange={(e) => setExamType(e.target.value)}>
                    <option value="">Seçiniz</option>
                    <option value="YKS">YKS</option>
                    <option value="LGS">LGS</option>
                </select>
            </div>
            <div>
                <label>Sınav Oturumu:</label>
                <select value={examSession} onChange={(e) => setExamSession(e.target.value)}>
                    <option value="">Seçiniz</option>
                    {examType === 'YKS' && (
                        <>
                            <option value="TYT">TYT</option>
                            <option value="AYT">AYT</option>
                            <option value="TYT-AYT">TYT-AYT</option>
                        </>
                    )}
                    {examType === 'LGS' && (
                        <>
                            <option value="SAYISAL">SAYISAL</option>
                            <option value="SÖZEL">SÖZEL</option>
                            <option value="SAYISAL-SÖZEL">SAYISAL-SÖZEL</option>
                        </>
                    )}
                </select>
            </div>
            <div>
                <label>Sınav Saati:</label>
                <input
                    type="time"
                    value={examTime}
                    onChange={(e) => setExamTime(e.target.value)}
                />
            </div>
            <div>
                <label>Sınav Süresi:</label>
                <input
                    type="text"
                    value={examDuration}
                    onChange={(e) => setExamDuration(e.target.value)}
                    placeholder="Dakika cinsinden"
                />
            </div>
            <button type="submit">Kaydet</button>
        </form>
    );
};

export default ExamForm;import React, { useState } from 'react';

const ExamForm = ({ onAddExam }) => {
    const [examType, setExamType] = useState('');
    const [examSession, setExamSession] = useState('');
    const [examTime, setExamTime] = useState('');
    const [examDuration, setExamDuration] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const exam = { type: examType, session: examSession, time: examTime, duration: examDuration };
        onAddExam(exam);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Sınav Türü:</label>
                <select value={examType} onChange={(e) => setExamType(e.target.value)}>
                    <option value="">Seçiniz</option>
                    <option value="YKS">YKS</option>
                    <option value="LGS">LGS</option>
                </select>
            </div>
            <div>
                <label>Sınav Oturumu:</label>
                <select value={examSession} onChange={(e) => setExamSession(e.target.value)}>
                    <option value="">Seçiniz</option>
                    {examType === 'YKS' && (
                        <>
                            <option value="TYT">TYT</option>
                            <option value="AYT">AYT</option>
                            <option value="TYT-AYT">TYT-AYT</option>
                        </>
                    )}
                    {examType === 'LGS' && (
                        <>
                            <option value="SAYISAL">SAYISAL</option>
                            <option value="SÖZEL">SÖZEL</option>
                            <option value="SAYISAL-SÖZEL">SAYISAL-SÖZEL</option>
                        </>
                    )}
                </select>
            </div>
            <div>
                <label>Sınav Saati:</label>
                <input
                    type="time"
                    value={examTime}
                    onChange={(e) => setExamTime(e.target.value)}
                />
            </div>
            <div>
                <label>Sınav Süresi:</label>
                <input
                    type="text"
                    value={examDuration}
                    onChange={(e) => setExamDuration(e.target.value)}
                    placeholder="Dakika cinsinden"
                />
            </div>
            <button type="submit">Kaydet</button>
        </form>
    );
};

export default ExamForm;