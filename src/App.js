import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM naming convention
    <div className="app">


      {/* Header */}
      <Header />

      {/* App body */}
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />

        {/* Feed */}
        

        {/* Widget */}
      </div>




    </div>
  );
}

export default App;
