import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [desp, setDesp] = useState('');
  const [duedate, setDuedate] = useState('');
  const [taskar, setTaskar] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [view, setView] = useState('all');

  const addTask = () => {
    if (task.trim() !== '') {
      setTaskar([...taskar, { task, desp, duedate }]);
      setCompleted([...completed, false]);
      setTask('');
      setDesp('');
      setDuedate('');
    }
  };

  const deleteTask = (index) => {
    setTaskar(taskar.filter((_, i) => i !== index));
    setCompleted(completed.filter((_, i) => i !== index));
  };

  const markComplete = (index) => {
    const updated = [...completed];
    updated[index] = true;
    setCompleted(updated);
  };

  const unmarkComplete = (index) => {
    const updated = [...completed];
    updated[index] = false;
    setCompleted(updated);
  };

  // Pair task with completion state
  const taskList = taskar.map((t, i) => ({ ...t, done: completed[i], index: i }));

  // Filtered based on view
  const filtered = taskList.filter((t) =>
    view === 'completed' ? t.done : view === 'pending' ? !t.done : true
  );

  return (
    <>
      {/* Task Manager Box */}
      <div className="container">
        <h2>📝 Task Manager</h2>
        <div className="input-area">
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="date"
            value={duedate}
            onChange={(e) => setDuedate(e.target.value)}
          />
          <input
            type="text"
            className="desc"
            placeholder="Optional description"
            value={desp}
            onChange={(e) => setDesp(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <div className="filter-buttons">
          <button onClick={() => setView('all')}>All Tasks</button>
          <button onClick={() => setView('pending')}>Pending</button>
          <button onClick={() => setView('completed')}>Completed</button>
        </div>
      </div>

      {/* Task List Section (Outside the Box) */}
      <div className="task-list">
        {filtered.map((t) => (
          <div key={t.index} className={`task ${t.done ? 'done' : ''}`}>
            <p>
              <strong>Task:</strong> {t.task}
            </p>
            <p>
              <strong>Description:</strong> {t.desp || 'N/A'}
            </p>
            <p>
              <strong>Due Date:</strong> {t.duedate || 'Not set'}
            </p>
            <div className="btn-group">
              <button onClick={() => deleteTask(t.index)} className="delete">
                Delete
              </button>
              {!t.done ? (
                <button onClick={() => markComplete(t.index)} className="mark">
                  Mark
                </button>
              ) : (
                <button onClick={() => unmarkComplete(t.index)} className="unmark">
                  Unmark
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
