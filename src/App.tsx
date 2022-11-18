import Footer from "./components/footer"
import Header from "./components/header"
import Contact from "./pages/main/contact"
import FeedBack from "./pages/main/feedBack"
import ForWhom from "./pages/main/forWhom"
import Procedure from "./pages/main/procedure"
import Services from "./pages/main/services"
import Start from "./pages/main/start"
import WhyOrion from "./pages/main/whyOrion"
import Works from "./pages/main/works"

function App() {

  return (
    <>
     <Header />
     <main id="main">
        <Start />
        <WhyOrion />
        <Services />
        <ForWhom />
        <Procedure />
        <Works />
        <FeedBack />
        <Contact />
     </main>
     <Footer />
    </>
  )
}

export default App
