import ProjectForm from './components/ProjectForm.jsx';
import Sidebar from './components/Sidebar.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import {useState} from 'react';

function App() {
  const [projectState, setProjectsState] = useState(
    {
      selectedProjectId: undefined,
      projects: []
    }
  );

  function handleStartAddProject() {
    setProjectsState( prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      };
    });
  }
  
  let content;
  if (projectState.selectedProjectId === null) {
    content = <ProjectForm />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
