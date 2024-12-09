import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicPage from "./pages/PublicPage"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login" 
function App() {
  return (
    <>
    <Router>
        <Routes>     
          <Route path="/Login" element={<Login></Login>} ></Route>
          <Route path="/SignUp" element={<SignUp></SignUp>} ></Route>
          <Route path="/" element={<PublicPage />} />
        </Routes>
    </Router>
    </>
  )
}
export default App
