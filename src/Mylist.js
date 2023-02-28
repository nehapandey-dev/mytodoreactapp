import React, { useState } from 'react'
import { FcPlus } from "react-icons/fc";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FcOk } from "react-icons/fc";


function Mylist() {
    const [getdata, setData] = useState()
    const [newdata, setNewdData] = useState([])
    //ADD THE INPUT DATA FUNTION
    const addInputData = () => {
        if (!getdata) {
            alert("Please enter some text")
        } else {
            const newInputData = {
                id: new Date().getTime().toString(),
                name: getdata,
            }
            setNewdData([...newdata, newInputData]);
            setData("");
        }
        alert("your task submitted")
    }
    //remove addData
    const removeData = (index) => {
        const updatedData = newdata.filter((element) => {
            return element.id !== index;
        })
        setNewdData(updatedData)

    }
    const removeAllData = () => {
        setNewdData([])
    }
    return (
        <div className="conatiner">
            <div className="body">
                <figure>
                    <figcaption>
                        <h3>Add some task here ✍🏻</h3>
                    </figcaption>
                </figure>
                <div className="text-box">
                    <input type={'text'}
                        placeholder='Enter text here..'
                        value={getdata}
                        onChange={(e) => setData(e.target.value)}
                        className='text-data'
                    /><FcPlus className='Plus-btn' onClick={addInputData} />
                </div>
            </div>
            <div className="input-items" >
                {newdata.map((element) => {
                    return (
                        <div className='all-items' key={element.id}>
                            <span><FcOk /></span>
                            <p className='output-text'>{element.name}</p>

                            <span className='remove'><RiDeleteBin4Fill onClick={() => removeData(element.id)} /></span>
                        </div>
                    )
                })}

            </div>
            <button className='todo-btn' onClick={removeAllData}>Clear List's 📆</button>
        </div>
    )
}

export default Mylist