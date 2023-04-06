import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import Navbar from "./components/Navbar.js";
import News from './components/News.js';

import { useEffect, useState } from "react";

function App() {
  // let location = useLocation();
  const [progress,setProgress] = useState(0);
 
  // useEffect(()=>{
    
  //   setProgress(progress + 30);
  // },[progress])
    return (
<>
<BrowserRouter>
<Navbar/>
<LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
<Routes>

 <Route path="/" element={<News category={"general"}/>}/>
 <Route path="/sports" element={<News category={"sports"}/>}/>
 <Route path="/entertainment" element={<News category={"entertainment"}/>}/>
 <Route path="/science" element={<News category={"science"}/>}/>
 <Route path="/health" element={<News category={"health"}/>}/>
 <Route path="/business" element={<News category={"business"}/>}/>
 <Route path="/technology" element={<News category={"technology"}/>}/>
</Routes>
</BrowserRouter>
 
 
</>
  );
}

export default App;
