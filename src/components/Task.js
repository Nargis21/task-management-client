import React from 'react';

const Task = ({ task, refetch, setUpdateTask }) => {
    const completeTask = () => {
        fetch(`http://localhost:5000/task/${task._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
        fetch('http://localhost:5000/completeTask', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (

        <div>
            <div class="card overflow-x-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className='flex items-center gap-2'>
                        <button className='mt-2' onClick={completeTask}>
                            <input type="checkbox" class="checkbox checkbox-md checkbox-accent" />
                        </button>
                        <h2 class="card-title">{task.task}</h2>
                    </div>


                    <div class="flex items-center justify-between">
                        <p>{task.date}</p>
                        <label onClick={() => setUpdateTask(task)} for="update-task-modal" class="btn btn-link">Edit</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;