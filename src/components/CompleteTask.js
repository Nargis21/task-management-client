
import Loading from './Loading';
import { useQuery } from 'react-query';
import Tasks from './Tasks';

const CompleteTask = () => {
    const { data: completeTasks, isLoading } = useQuery('completeTasks', () => fetch('https://sleepy-waters-32618.herokuapp.com/completeTask', {
        method: 'GET',
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-6 pb-20 bg-slate-200'>
            <div className='py-12 text-center'>
                <div class="indicator">
                    <span class="indicator-item badge badge-accent font-bold">{completeTasks.length}</span>
                    <h1 className='text-4xl font-bold  text-zinc-700'>Completed Tasks</h1>
                </div>
            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                {
                    completeTasks.map(task => <Tasks key={task._id} task={task} ></Tasks>)
                }
            </div>
        </div>
    );
};

export default CompleteTask;