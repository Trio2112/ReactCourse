//import AuthInputs from './components/AuthInputsDynamicStyling.jsx';
//import AuthInputs from './components/AuthInputsCSSModules.jsx';
import AuthInputs from './components/AuthInputsStyledComponents.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
