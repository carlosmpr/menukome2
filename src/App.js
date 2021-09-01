import React from 'react';
import Content from './components/Content';
import Menu from './components/Menu';
import TopBar from './components/TopBar';
import Detail from './Pages/Detail';
import {useSelector} from 'react-redux'
function App() {
  const detail = useSelector(state=> state.counter.detailsSelected)
  console.log(detail)
  return (
    <div className="w-screen h-screen bg-background relative" >
     
     
     { detail !== "" ? <Detail /> : 
     <>
     <TopBar />
     <Content /> 
     </>}
     <Menu />
    </div>
  );
}

export default App;
