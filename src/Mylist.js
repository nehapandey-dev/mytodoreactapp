import React, { useState } from 'react'
import { FcPlus } from "react-icons/fc";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

function Mylist() {
    const [getdata, setData] = useState('')
    const [newdata, setNewdData] = useState(JSON.parse(localStorage.getItem("newdata")) || [])
    const [editSubmit, setEditSubmit] = useState(true)
    const [isEditSubmit, setIsEditSubmit] = useState()
    const [count, setCount] = useState(0)

    //ADD THE INPUT DATA FUNTION

    const addInputData = () => {

        if (!getdata) {
            alert("Please enter some text")
        } else if (getdata && !editSubmit) {
            setNewdData(
                newdata.map((element) => {
                    if (element.id === isEditSubmit) {
                        return { ...element, name: getdata }
                    }
                    return element;
                })
            )
            setEditSubmit(true)
            setData('')
            setIsEditSubmit(null)

        }
        else {
            const newInputData = {
                id: new Date().getTime().toString(),
                name: getdata,
            }
            setNewdData([...newdata, newInputData]);
            setData("");
            setCount(count + 1)
        }

    }
    //edit tododata
    const editItem = (id) => {
        let upadatedEditItem = newdata.find((element) => {
            return element.id === id
        })
        setEditSubmit(false);
        setData(upadatedEditItem.name);
        setIsEditSubmit(id);
    }
    //remove addData
    const removeData = (index) => {
        const updatedData = newdata.filter((element) => {
            return element.id !== index;
        })
        setNewdData(updatedData)
        setCount(count - 1)
    }
    const removeAllData = () => {
        setNewdData([])
        setCount(0)
    }

    return (
        <div className='flex justify-center items-center text-center w-full my-20 sm:my-30 '>
            <div className=" ">
                <figure >
                    <figcaption>
                        <h3 className='text-2xl'>Add some task here ✍🏻</h3>
                    </figcaption>
                </figure>
                <div className="body  py-10">

                    <div className="text-box flex gap-1 justify-center items-center">
                        <input type={'text'}
                            placeholder='Enter your text here..'
                            value={getdata}
                            onChange={(e) => setData(e.target.value)}
                            className='text-data p-4 h-20 sm:h-14 sm:w-52 border-2 border-blue-700 rounded-md  w-screen'
                        />

                        {
                            editSubmit ? <FcPlus className='Plus-btn text-4xl relative right-1' onClick={addInputData} /> :
                                <FcPlus className='Plus-btn text-4xl' onClick={addInputData} />
                        }
                    </div>
                </div>
                <div className="input-items  " >
                    <h1 className='md:my-4 sm:my-2 md:w-96 sm:w-80 border bg-slate-100  p-1'>My Lists {count}</h1>
                    {newdata.map((element, index) => {
                        return (
                            <div className='flex justify-between hover:shadow-md p-3 md:w-96 sm:w-80 rounded-md mt-2'>
                                <p>{index + 1}.</p>
                                <div className='all-items ' key={element.id}>

                                    <p className=''>{element.name}</p>
                                </div>
                                <div className='flex gap-4'>
                                    <span className='edit text-red-700 text-xl'><FaEdit onClick={() => editItem(element.id)} /></span>
                                    <span className='remove text-green-700 text-xl'><RiDeleteBin4Fill onClick={() => removeData(element.id)} /></span>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className='md:w-96 sm:w-80'>
                    <button className='todo-btn p-2 bg-green-600 hover:bg-orange-600 rounded-md text-white md:w-full sm:w-80 border mt-10' onClick={removeAllData}>Clear List's 📆</button>
                </div>
            </div>

        </div>
    )
}

export default Mylist