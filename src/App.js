import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Post from './Components/Post';
import Navbar from './Components/Navbar';
// import {} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        {/* <div className='Nav'> */}
        {/* #1)React Router <BrowserRouter>
        <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Post" element={<Post/>} />
        </Routes>
        </BrowserRouter> */}

        {/* </div> */}

        <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Post" element={<Post/>} />
        </Routes>
        
        </BrowserRouter>
        
        {/* <h1>We are Fetching Dummy APIs</h1> */}
    </div>
  );
}

export default App;
