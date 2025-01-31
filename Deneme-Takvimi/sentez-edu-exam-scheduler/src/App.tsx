import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';
import HomePage from './pages/HomePage';
import Login from './components/Login';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/admin" component={AdminPanel} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
};

export default App;