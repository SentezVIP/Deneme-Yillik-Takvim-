# Code Citations

## License: unknown
https://github.com/fabiocarrella/blog-admin/tree/96ece533f77abbb19a6303a500ceb6504701611a/src/components/login.jsx

```
useHistory } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('
```


## License: unknown
https://github.com/nhannn87dn/ReactJs-Basic-Tutorials/tree/b3f9b80dd53e2ee94d99f6c7017f870135305225/2.Examples/example-authentication/readme.md

```
useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const
```


## License: unknown
https://github.com/Braedencraig/shippingFunWow/tree/0837aae25b88466ff69ea74bcdb02e41f4fd925c/src/App.js

```
="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="
```


## License: unknown
https://github.com/ModestasCi/r1/tree/3f086b5570648b41f0783fca0731afec1de3ef96/src/components/Admin/AdminLogin.jsx

```
<h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(
```


## License: unknown
https://github.com/Toykingdom/click-collect/tree/28e21b6fbb8087d51f36e4d3105f5e1d7b87771a/src/app/login/page.js

```
onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value
```

## License: unknown
https://github.com/your-repo/your-project

```
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

export default ExamForm;
```

