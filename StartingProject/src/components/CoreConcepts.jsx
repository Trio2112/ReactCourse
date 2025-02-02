import { CORE_CONCEPTS } from '../data.js';
import { CoreConcept, CoreConceptAlternate, CoreConceptAnotherAlternate } from './CoreConcept.jsx';

export default function CoreConcepts() {
    return (
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
                */ }
                { /* CORE_CONCEPTS.map((item) => <CoreConcept title={item.title} description={item.description} image={item.image} />) */}
                {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item} />)}
                { /* CORE_CONCEPTS.map((item) => <CoreConceptAlternate concept={item} />) */}
                { /* CORE_CONCEPTS.map((item) => <CoreConceptAnotherAlternate title={item.title} description={item.description} image={item.image} />) */}
            </ul>
        </section>
    );
}