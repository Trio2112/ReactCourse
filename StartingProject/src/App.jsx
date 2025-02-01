import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import { CoreConcept, CoreConceptAlternate, CoreConceptAnotherAlternate } from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {
  const [clickedButtonId, setClickedButtonId] = useState(); /* Could also pass to constructor useState('btnComponents') */
  
  function handleClick(callerId) {
    //console.log(callerId + " was clicked!");
    setClickedButtonId(callerId);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (clickedButtonId) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[clickedButtonId].title}</h3>
        <p>{EXAMPLES[clickedButtonId].description}</p>
        <pre>{EXAMPLES[clickedButtonId].code}</pre>
      </div>
    );
  }
  
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            { /*}
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
            */}
            { /* CORE_CONCEPTS.map((item) => <CoreConcept title={item.title} description={item.description} image={item.image} />) */ }
            { CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item} />) }
            { /* CORE_CONCEPTS.map((item) => <CoreConceptAlternate concept={item} />) */ }
            { /* CORE_CONCEPTS.map((item) => <CoreConceptAnotherAlternate title={item.title} description={item.description} image={item.image} />) */ }
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={clickedButtonId === 'btnComponents'} onSelect={() => handleClick('btnComponents')}>Components</TabButton>
            <TabButton isSelected={clickedButtonId === 'btnJSX'} onSelect={() => handleClick('btnJSX')}>JSX</TabButton>
            <TabButton isSelected={clickedButtonId === 'btnProps'} onSelect={() => handleClick('btnProps')}>Props</TabButton>
            <TabButton isSelected={clickedButtonId === 'btnState'} onSelect={() => handleClick('btnState')}>State</TabButton>
          </menu>
        </section>
        
        {/* Option 1 to render content conditionally
        { !clickedButtonId ? "<p>Please select a topic.</p>" :
        (
          <div id="tab-content">
            <h3>{EXAMPLES[clickedButtonId].title}</h3>
            <p>{EXAMPLES[clickedButtonId].description}</p>
            <pre>{EXAMPLES[clickedButtonId].code}</pre>
          </div>
        )
        */}

        {/* Option 2 to render content conditionally
        { !clickedButtonId && "<p>Please select a topic.</p>" }
        { clickedButtonId &&
        (
          <div id="tab-content">
            <h3>{EXAMPLES[clickedButtonId].title}</h3>
            <p>{EXAMPLES[clickedButtonId].description}</p>
            <pre>{EXAMPLES[clickedButtonId].code}</pre>
          </div>
        )}
        */}

        {/* Option 3 to render content conditionally */}
        { tabContent }
      </main>
    </div>
  );
}

export default App;
