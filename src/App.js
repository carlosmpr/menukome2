import React from 'react';
import Content from './components/Content';
import Menu from './components/Menu';
import TopBar from './components/TopBar';
import Detail from './Pages/Detail';
function App() {
  return (
    <div className="w-screen h-screen bg-background relative" >
     {/* <TopBar /> */}
     {/* <Content /> */}
     <Detail />
     <Menu />
    </div>
  );
}

export default App;
