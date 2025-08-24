import React from "react";

import  {Routes, BrowserRouter, Route, Link, useNavigate} from "react-router-dom"

export default function App() {
  return (
    <div>
      <h1>Allen</h1>
      <BrowserRouter>
       <Link to='/'>Landing</Link>
       <Link to='/class11'>Class11</Link>
       <Link to='/class12'>Class12</Link>
        <Routes>
          <Route path="/class11" element={<Class11Program />} />
          <Route path="/" element={<Landing />} />
          <Route path="/class12" element={<Class12Program />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Class11Program(){
  return <div>
   <h1> Class11 Neet Preparation!!!</h1>
  </div>
}

function ErrorPage(){
  return(
    <div>
      <h1>Page not Found</h1>
    </div>
  )
}

function Class12Program(){
 const navigate = useNavigate();
  function landingPage(){
   
    navigate('/');
  }
  return <div>
    Class12 Neet Programme!!
    <button onClick={landingPage}>Go to Landing Page</button>

  </div>
}

function Landing(){
  return <div>
    Welcome to allen
  </div>
}


