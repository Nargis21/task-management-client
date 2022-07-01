import React, { useState } from 'react';
import Task from './Task';
import { useQuery } from 'react-query';
import Loading from './Loading';
import UpdateTaskModal from './UpdateTaskModal';

const ToDo = () => {
    const [updateTask, setUpdateTask] = useState(null)
    const { data: tasks, isLoading, refetch } = useQuery('tasks', () => fetch('https://sleepy-waters-32618.herokuapp.com/task', {
        method: 'GET',
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-6 pb-20 bg-slate-200'>
            <div className='py-12 text-center'>
                <div class="indicator">
                    <span class="indicator-item badge badge-accent font-bold">{tasks.length}</span>
                    <h1 className='text-4xl font-bold  text-zinc-700'>Your Tasks</h1>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                {
                    tasks.map(task => <Task key={task._id} task={task} refetch={refetch} setUpdateTask={setUpdateTask}></Task>)
                }
            </div>
            {
                updateTask && <UpdateTaskModal
                    updateTask={updateTask}
                    setUpdateTask={setUpdateTask}
                    refetch={refetch}
                ></UpdateTaskModal>
            }
        </div>
    );
};

export default ToDo;