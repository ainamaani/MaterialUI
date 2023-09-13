import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MaterialPractice from './components/Material';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element ={ <MaterialPractice/> }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
