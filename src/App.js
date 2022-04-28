import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import CompFunc from './CompFunc';
import CompClass from './CompClass';

function App() {
  return (
    <Fragment>
      <div className="app">
        <CompFunc />
        <CompClass />
      </div>
    </Fragment>
  );
}

export default App;
