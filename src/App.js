import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./pages/Home"
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.title = "SnappBox Appticket";  
  }, []);
  return (
    <>
      <BrowserRouter>
      {/* <Header/> */}
        <Routes>
        <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
