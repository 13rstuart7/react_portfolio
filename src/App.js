import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
<div>
<section>
        <Header />
      </section>
      
      <section>
        <About />
      </section>
      
      <section>
        <Projects />
      </section>
      
      <section>
        <Contact />
      </section>

      <section>
          <Footer />
      </section>
</div>

    </div>
  );
}

export default App;
