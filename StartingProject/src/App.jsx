import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import { CoreConcept, CoreConceptAlternate, CoreConceptAnotherAlternate } from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {
  const [clickedButtonId, setClickedButtonId] = useState('btnComponents');
  
  function handleClick(callerId) {
    //console.log(callerId + " was clicked!");
    setClickedButtonId(callerId);
  }
  
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConceptAlternate concept={CORE_CONCEPTS[2]} />
            <CoreConceptAnotherAlternate
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick('btnComponents')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('btnJSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('btnProps')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('btnState')}>State</TabButton>
          </menu>
        </section>
        <div id="tab-content">
          <h3>{EXAMPLES[clickedButtonId].title}</h3>
          <p>{EXAMPLES[clickedButtonId].description}</p>
          <pre>{EXAMPLES[clickedButtonId].code}</pre>
        </div>
      </main>
    </div>
  );
}

export default App;
