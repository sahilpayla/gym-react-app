import './App.css';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Mentor from './components/Mentor/Mentor';
import SubSection from './components/SubSection/SubSection';
import ProgramCard from './components/ProgramCard/ProgramCard';
import Section from './components/Section/Section.js';
import Section2 from './components/Section2/Section2.js';
import StartPage from './components/StartPage/StartPage.js';

function App() {
  return (
    <div className="App">
    <Header />
    <StartPage />
    <Section />
    <Mentor />
    <ProgramCard />
    <Section2 />
    <SubSection />
    <Footer />
    </div>
  );
}

export default App;
