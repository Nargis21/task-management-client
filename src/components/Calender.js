import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Calender = ({ date, setDate }) => {
    return (
        <div className='flex justify-center'>
            <div>
                <h1 className='text-4xl font-bold text-center my-12 text-zinc-700 font-mono'>Set Your DeadLine</h1>
                <div className='w-96 p-8 rounded-lg shadow-2xl'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default Calender;