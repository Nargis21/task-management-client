import React from 'react';

const Tasks = ({ task }) => {
    return (
        <div>
            <div class="card overflow-x-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" checked="checked" class="checkbox checkbox-md checkbox-accent" />
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