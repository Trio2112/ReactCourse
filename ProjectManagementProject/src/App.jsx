import ProjectForm from './components/ProjectForm.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <ProjectForm />
    </main>
  );
}

export default App;
