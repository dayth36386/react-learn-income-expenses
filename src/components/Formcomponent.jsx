import { useEffect, useState } from 'react';
import './componentscss/formcontro.css'
import { v4 as uuidv4 } from 'uuid';

const Formcomponent = (props) => {
    const [title, settitle] = useState('');
    const [amount, setamount] = useState(0);
    const [bool, setbool] = useState(false);
    const inputTitle = (event) => {
        // console.log(event.target.value);
        settitle(event.target.value);
    }
    const inputAmount = (event) => {
        // console.log(event.target.value);
        setamount(event.target.value);
    }
    const savedata = (event) => {
        event.preventDefault();
        const data = {
            id:uuidv4(),
            value: title,
            amount: Number(amount),
        }
        // console.log(data)
        //เรียกใช้ props adddate แล้วส่งค่าdata(obj)
        props.adddata(data);
        settitle("");
        setamount(0);
    }
    useEffect(()=>{
        const checkbool = amount !==0 && title.trim().length > 0
        setbool(checkbool);
    },[title,amount])
    return (
        <div>
            <form onSubmit={savedata}>
                <div className="form-control">
                    <label>Name List</label>
                    <input
                        type="text"
                        placeholder="Please input data"
                        onChange={inputTitle}
                        value={title}
                    />
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input                   
                        type="number"
                        placeholder="Please input Amount"
                        onChange={inputAmount}
                        value={amount}
                    />
                </div>
                <div className='submit'>
                    <button type="submit" disabled={!bool}>Add Information</button>
                </div>
            </form>
        </div>
    );
}
export default Formcomponent;