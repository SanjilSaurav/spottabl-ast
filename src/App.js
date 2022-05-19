import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  let initCsm;
  if(localStorage.getItem("csms")===null){
    initCsm = [];
  }
  else{
    initCsm = JSON.parse(localStorage.getItem("csms"));
  }
  const [csms, setCsms] = useState(initCsm);

  const onDelete = (userDetail)=>{
    setCsms(csms.filter((user)=>{
      return user !== userDetail;
    }));
  }


  const addCsm = (selectedUsers)=>{

    selectedUsers.map((csm)=>{
      setCsms((csms) => [...csms, csm]);
    });
  }

  useEffect(()=>{
    localStorage.setItem("csms", JSON.stringify(csms));
  }, [csms])


  return (
    <div className="App">
      <Header/>
      <Home csms={csms} onDelete={onDelete} addCsm={addCsm}/>
    </div>
  );
}

export default App;