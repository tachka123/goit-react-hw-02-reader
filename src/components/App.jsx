import React from 'react';
import variableCSS from './variables.module.css';
import Reader from './Reader/Reader';

const App = () => {
  return (
    <div className={variableCSS.container}>
      <Reader />
    </div>
  );
};

export default App;
