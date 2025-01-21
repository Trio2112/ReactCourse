export function CoreConcept(props) {
    return (
      <li>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    );
  }
  
export function CoreConceptAlternate({concept}) {
    return (
      <li>
        <img src={concept.image} alt={concept.title} />
        <h3>{concept.title}</h3>
        <p>{concept.description}</p>
      </li>
    );
  }
  
export function CoreConceptAnotherAlternate({...concept}) {
    return (
      <li>
        <img src={concept.image} alt={concept.title} />
        <h3>{concept.title}</h3>
        <p>{concept.description}</p>
      </li>
    );
  }
