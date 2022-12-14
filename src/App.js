import './App.css';
import About from './components/About';
import Header from './components/Header';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch ,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Header title="Text Utils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-4'>
          <Switch >
              <Route exact path="/about">
                <About mode={mode} />
              </Route>
              <Route exact path="/">
                <TextForm showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />
              </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
