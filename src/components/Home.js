import React, { useState } from 'react';
import Calender from './Calender';
import TaskNote from './TaskNote';
import ToDo from './ToDo';

const Home = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className='bg-slate-200'>
            <div className='lg:flex justify-evenly items-center'>
                <Calender date={date} setDate={setDate}></Calender>
                <TaskNote date={date}></TaskNote>
            </div>
            <ToDo></ToDo>
        </div>
    );
};

export default Home;