import React from 'react';

const UpdateTaskModal = ({ updateTask, setUpdateTask, refetch }) => {
    const handleUpdateTask = event => {
        event.preventDefault()
        const task = {
            task: event.target.task.value
        }

        fetch(`https://sleepy-waters-32618.herokuapp.com/task/${updateTask._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUpdateTask(null)
                refetch()
            })


    }
    return (
        <div>
            <input type="checkbox" id="update-task-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl text-center">Update Task</h3>
                    <form className='w-full text-center' onSubmit={handleUpdateTask}>
                        <textarea name='task' class="w-full mt-4 textarea textarea-warning" placeholder="Bio"></textarea><br />
                        <input className='text-center btn-sm btn btn-outline btn-warning mt-4' type="submit" value="Update" />
                    </form>

                    <div className="modal-action">
                        <label htmlFor="update-task-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateTaskModal;