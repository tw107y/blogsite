import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Router>
      <div>
        {/* Your other components can go here */}
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;