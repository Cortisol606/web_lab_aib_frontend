import { Routes, Route, Link } from 'react-router-dom'
import Main from './Pages/Main'
import About from './Pages/About'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <>
      <body>
        <div><Link to="/">Main</Link></div>
        <div><Link to="/about">About</Link></div>
      </body>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
