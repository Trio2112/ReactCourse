import ProjectForm from './components/ProjectForm.jsx';
import Sidebar from './components/Sidebar.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import {useState} from 'react';
import ProjectDetails from './components/ProjectDetails.jsx';

function App() {
  const [projectsState, setProjectsState] = useState(
    {
      selectedProjectId: undefined,
      projects: [],
      tasks: []
    }
  );

  function handleAddTask(text) {
     setProjectsState(prevState => {
      const newTask = {
        projectId: prevState.selectedProjectId,
        text: text,
        id: self.crypto.randomUUID()
      };
      
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState( prevState => {
      const newTasks = [...prevState.tasks];
      const indexToRemove = newTasks.findIndex(item => item.id === id);
      if (indexToRemove > -1) {
         newTasks.splice(indexToRemove, 1);
      }
      
      return {
        ...prevState,
        tasks: newTasks
      };
    });
  }

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

  function handleDeleteProject() {
    setProjectsState( prevState => {
      const newProjects = [...prevState.projects];
      const indexToRemove = newProjects.findIndex(item => item.id === prevState.selectedProjectId);
      if (indexToRemove > -1) {
         newProjects.splice(indexToRemove, 1);
      }
      
      return {
        ...prevState,
        projects: newProjects,
        selectedProjectId: undefined
      };
    });
  }
  
  let content;
  if (projectsState.selectedProjectId === null) {
    content = <ProjectForm onSaveProject={handleSaveProject} onCancel={handleCancel} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    content = <ProjectDetails 
                project={projectsState.projects.find((item) => item.id === projectsState.selectedProjectId)}
                onDeleteProject={handleDeleteProject}
                onAddTask={handleAddTask}
                onDeleteTask={handleDeleteTask}
                tasks={projectsState.tasks}
              />;
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
