import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Section from './components/section/Section';
import { sectionData } from './data/sectionData';
import {SiblingContextProvider} from './contexts/siblingContext';
import HaHaButton from './sections/haHaButton/HaHaButton.jsx'
import {useState} from 'react';
import changeTitleContext  from './contexts/siblingContext.js';



function App() {
  const [text, setText] = useState('')






  return (
    < changeTitleContext.Provider value= {{text, setText}}>
    <div className="App">
        <Header/>
        <Nav />
        {sectionData.map((section, index) => (
        <Section key={index} dataSmall={section.dataSmall}>
          {section.child}
        </Section>
      ))}
    </div>
    </changeTitleContext.Provider>
  );
}

export default App;
