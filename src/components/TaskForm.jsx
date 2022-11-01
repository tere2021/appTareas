import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault(); //evita q refresque la pag
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
      <h1 className="text-2xl font-bold mb-3 text-white">Crea tu tarea</h1>
        <input
          placeholder="Escriba su tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title} //para limpiar una vez que guarde la tarea
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button
          className="bg-indigo-500 py-1 px-3 text-white"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
