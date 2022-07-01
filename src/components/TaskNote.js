import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify'

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
                if (data.acknowledged) {
                    toast.success("Task Noted!")
                    event.target.task.value = ''
                }
            })
    }


    return (
        <div className='text-center my-12'>
            <h1 className='text-4xl font-bold mb-12 text-zinc-700'>Note Your Task</h1>
            <form onSubmit={addTask} className='w-full'>
                <input name='task' class="w-96 h-52 input input-bordered input-warning text-xl" placeholder="Note Your Task Here" /><br />
                <input className='btn btn-outline btn-warning mt-8' type="submit" value="Add Task" />
            </form>
        </div>
    );
};

export default TaskNote;