import Footer from "./app/components/Footer"
import Header from "./app/components/Header"
import HightlightSection from "./app/components/HightlightSection";
import Section from "./app/components/Section"

function App() {

  return (
    <div className="wrapper">
      <Header />
      <main
        style={{
          marginTop: '8rem'
        }}>

        <HightlightSection />
        <Section title="Para Você"/>

        <Section title="Para Toda Sua Familia"/>
      </main>
      <Footer />
    
    </div>


  )
} 

export default App;
