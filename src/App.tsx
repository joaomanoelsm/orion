import Header from "./components/header"
import Start from "./pages/main/start"
import WhyOrion from "./pages/main/whyOrion"

function App() {

  return (
    <>
     <Header />
     <main id="main">
        <Start />
        <WhyOrion />
     </main>
    </>
  )
}

export default App
