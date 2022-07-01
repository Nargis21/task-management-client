import React from 'react';
import { toast } from 'react-toastify'


const Task = ({ task, refetch, setUpdateTask }) => {
    const completeTask = () => {
        fetch(`https://sleepy-waters-32618.herokuapp.com/task/${task._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })

        fetch('https://sleepy-waters-32618.herokuapp.com/completeTask', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Task Completed!')
                    refetch()
                }
            })

    }
    return (

        <div>
            <div class="card break-all bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className='flex gap-2'>
                        <button className='' onClick={completeTask}>
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