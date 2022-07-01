
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
        <div className='p-6'>
            <h1 className='text-4xl font-bold text-center py-12 text-zinc-700 font-mono'>Completed Tasks</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                {
                    completeTasks.map(task => <Tasks key={task._id} task={task} ></Tasks>)
                }
            </div>
        </div>
    );
};

export default CompleteTask;