import {useState} from 'react';

export default function NewTask({onAddTask}) {
    const [enteredTask, setEnteredTask] = useState('');
    
    function handleClick() {
        if (enteredTask.trim() === '') {
            return; // Do not add empty tasks
        }
        onAddTask(enteredTask);
        setEnteredTask('');
    }

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }
    
    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={enteredTask}
            />
            <button className="text-stone-700 hover:text-stone-900" onClick={handleClick}>Add Task</button>
        </div>
    );
}