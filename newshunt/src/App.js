import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar.js";
import News from './components/News.js';
function App() {
  return (
<>
<BrowserRouter>
<Navbar/>
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
