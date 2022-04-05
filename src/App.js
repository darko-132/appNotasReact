import './App.css';
import Tarea from './componentes/Tareas';
import ListaDeTareas from './componentes/ListaDeTareas'

function App() {
  return (
    <main className="aplicacionTareas">
      <section className='listaTareas'>
        <h1>Mis tareas</h1>
        <ListaDeTareas/>
      </section>
    </main>
  );
}

export default App;
