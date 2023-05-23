import React from 'react';
import ClassPage from './pages/ClassPage';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <ClassPage /> {/* Add the ComponentWithVideo component */}
    </div>
  );
}

export default App;
