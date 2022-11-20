import Footer from "./components/footer"
import Header from "./components/header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from "./pages/main"
import Error from "./pages/error"

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/orion" element={ <Main /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
