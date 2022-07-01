import React, { useState } from 'react';
import Calender from './Calender';
import TaskNote from './TaskNote';
import ToDo from './ToDo';

const Home = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <TaskNote date={date}></TaskNote>
            <Calender date={date} setDate={setDate}></Calender>
            <ToDo></ToDo>
        </div>
    );
};

export default Home;