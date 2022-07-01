import { format } from 'date-fns';
import React from 'react';

const TaskNote = ({ date }) => {
    const formattedDate = format(date, 'PP')
    const addTask = event => {
        event.preventDefault()
        const task = {
            task: event.target.task.value,
            date: formattedDate
        }

        fetch('https://sleepy-waters-32618.herokuapp.com/task', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.task.value = ''
            })
    }

    return (
        <div className='text-center my-12'>
            <h1 className='text-4xl font-bold mb-12 text-zinc-700 font-mono'>Note Your Task</h1>
            <form onSubmit={addTask} className='w-full'>
                <textarea name='task' class="lg:w-3/6 w-5/6 h-52 textarea textarea-warning" placeholder="Note Your Task Here"></textarea><br />
                <input className='btn btn-outline btn-warning mt-8' type="submit" value="Add Task" />
            </form>
        </div>
    );
};

export default TaskNote;