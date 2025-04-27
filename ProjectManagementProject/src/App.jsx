import ProjectForm from './components/ProjectForm.jsx';
import Sidebar from './components/Sidebar.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import {useState} from 'react';
import ProjectDetails from './components/ProjectDetails.jsx';

function App() {
  const [projectsState, setProjectsState] = useState(
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

  function handleSaveProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: self.crypto.randomUUID()
      };
      
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleCancel() {
    setProjectsState( prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectsState( prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId
      };
    });
  }
  
  let content;
  if (projectsState.selectedProjectId === null) {
    content = <ProjectForm onSaveProject={handleSaveProject} onCancel={handleCancel} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    content = <ProjectDetails project={projectsState.projects.find((item) => item.id === projectsState.selectedProjectId)} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
