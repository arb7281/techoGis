
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div >
      <Header/>

      <div className="container mb-4 ">
      
        <div className="row">
        {/*sidebar section 1 */}
            <Sidebar/>
            {/*pages section 2 */}
            <Dashboard/>
        </div>
      </div>

    </div>
  );
}

export default App;
