import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Calender = ({ date, setDate }) => {
    return (
        <div className='py-12 bg-slate-200 flex justify-center'>
            <div>
                <div className='w-96 p-8 rounded-lg bg-white shadow-2xl'>
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