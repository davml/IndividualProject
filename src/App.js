import './App.css';
import NavBar from './components/header/NavigationBar/NavBar';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import JobsSearch from './components/pages/JobsSearch/JobsSearch';

function App() {

  const [session, setSession] = useState(false);
  const toggleSession = () => setSession(!session);

  return (
    <div className="container">
      <div className="content-wrap">
        <Router>
          <NavBar session={session} toggle={toggleSession}/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/search' exact component={JobsSearch}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
