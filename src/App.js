import React from 'react';
import Content from './components/Content';
import Menu from './components/Menu';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="w-screen h-screen bg-background relative" >
     <TopBar />
     <Content />
     <Menu />
    </div>
  );
}

export default App;
