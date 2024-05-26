import { useContext, useState } from 'react'
import './Input.css'
import Result from './Result';
import MyContext from '../Context';
import { getAge } from '../helpers/ageCalculator';

export default function Input(){
    const fullYear = new Date()
    const year = fullYear.getFullYear()

    const [day, setDay] = useState(0); 
    const [dayerror, setDayError] = useState(false);
    const [month, setMonth] = useState(0);
    const [montherror, setMonthError] = useState(false); 
    const [myyear, setMyYear] = useState(0); 
    const [yearerror, setyearError] = useState(false);
    const [submit, setSubmit] = useState(false); 

    const { value, setValue } = useContext(MyContext);

    const handleInputChange = (e)=> {
        if(e.target.name == 'day'){
            setDay(e.target.value)
        } else if(e.target.name == 'month'){
            setMonth(e.target.value)
        } else setMyYear(e.target.value);
    }

    const handleCheck = (e)=> {
        day == 0 ? setDayError(true) : month == 0 ? setMonthError(true) : 
        myyear == 0 ? setyearError(true) : handleSubmit(); 

    }

    const handleSubmit = ()=> {
        setSubmit(true);
        const date = getAge(`${month}/${day}/${myyear}`)
        console.log(date)
        setValue(date); 

    }

    return(
        <div className="p-5 flex space-x-20 hr">
            <div className="w-16 mr-1">
                <label className="block text-gray text-sm font-bold mb-2" for="username">                    Day
                </label>
                <input className="shadow 
                appearance-none border 
                rounded py-2 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline w-32" 
                id="username" type="number" min={1} max={31} placeholder="Day"
                name = 'day' onChange={handleInputChange}
                ></input>
            </div>

            <div className="w-16 mr-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Month
                </label>
                <input className="shadow 
                appearance-none border 
                rounded py-2 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline w-32" 
                id="username" type="number" min={1} max={12} placeholder="Month"
                name = 'month' onChange={handleInputChange}
                ></input>
            </div>

            <div className="w-16  mr-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Year
                </label>
                <input className="shadow 
                appearance-none border 
                rounded py-2 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline w-32" 
                id="username" type="number" min={0} max={year} placeholder="Year"
                name ='year' onChange={handleInputChange}
                ></input>
            </div>
           
          <button className='button' onClick={handleCheck}> 
         
            <img src='../../flecha-hacia-abajo.png' alt='flecha'/> 
            
           </button>

           
        </div>
    )
}