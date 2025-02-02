import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import { useState } from 'react';



export default function Examples() {
    const [clickedButtonId, setClickedButtonId] = useState(); /* Could also pass to constructor useState('btnComponents') */
  
    function handleClick(callerId) {
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
        <>
            <Section id="examples" title="Examples">
                <menu>
                    <TabButton isSelected={clickedButtonId === 'btnComponents'} onClick={() => handleClick('btnComponents')}>Components</TabButton>
                    <TabButton isSelected={clickedButtonId === 'btnJSX'} onClick={() => handleClick('btnJSX')}>JSX</TabButton>
                    <TabButton isSelected={clickedButtonId === 'btnProps'} onClick={() => handleClick('btnProps')}>Props</TabButton>
                    <TabButton isSelected={clickedButtonId === 'btnState'} onClick={() => handleClick('btnState')}>State</TabButton>
                </menu>
            </Section>

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
            {tabContent}
        </>
    );
}