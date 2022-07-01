import React from 'react';

const Tasks = ({ task }) => {
    return (
        <div>
            <div class="card break-all bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className='flex gap-2'>
                        <input type="checkbox" checked="checked" class="checkbox checkbox-md checkbox-accent mt-2" />
                        <h2 class="card-title">{task.task}</h2>
                    </div>


                    <div class="card-actions justify-end">
                        <p>{task.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;