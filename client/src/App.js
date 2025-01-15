import React,{useEffect,useState} from "react";
import {Container} from '@mui/material';
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import { CustomAppBar,CustomTypography,CustomImage,CustomGrid} from "./Styles";
import Home from "./components/Home/Home";
import Auth from './components/AUTH/Auth'
import {Navbar} from './components/Navbar/Navbar';

// console.log('Google client id App: '+process.env.REACT_APP_CLIENT_ID);

const App=()=> {
  // alert('I am rendering');
  const [ind, setInd] = useState(true);

  const handleReload=()=>{
    setInd(!ind);
  }

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar onReload={handleReload}/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/auth" element={<Auth/>}/>
          {/* <Navbar/> */}
        </Routes>
      </Container>
      </BrowserRouter>
  );
}

export default App;
