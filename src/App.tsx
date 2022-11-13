import Header from "./components/header"
import ForWhom from "./pages/main/forWhom"
import Services from "./pages/main/services"
import Start from "./pages/main/start"
import WhyOrion from "./pages/main/whyOrion"

function App() {

  return (
    <>
     <Header />
     <main id="main">
        <Start />
        <WhyOrion />
        <Services />
        <ForWhom />
     </main>
    </>
  )
}

export default App
