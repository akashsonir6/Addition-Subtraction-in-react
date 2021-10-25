import React, { useState } from 'react';
import './Assignment.css';



const Assignment = () => {



    const [Num, setNum] = useState(0);
    // const [Res, setRes] = useState(0);
    const [Total, setTotal] = useState(0);

    const add = () => {

        // setRes(Total)
        setTotal(Num + Total);
        console.log(Total);
        console.log(Num);


    }

    const sub = () => {
        setTotal(Total - Num);
    }

    const clear = () => {
        setTotal(0);
    }


    return (

        <main>
            <h1>Enter a value to add/Sub</h1>
            <div id="form">


                <label htmlFor="">Enter number </label>
                <input type="number" id="Input_num" placeholder="Enter Your Number" onChange={e => setNum(+e.target.value)} />
                <br />

                <button type="button" class="btn btn-outline-primary " onClick={add}>Click Me To Add</button>
                <br />

                <button type="button" class="btn btn-outline-success" onClick={sub}>Click Me To Sub</button>
                <br />
                <h3>Total:{Total}</h3>
                <button type="clear" class="btn btn-outline-danger " onClick={clear}>Clear</button>
               
            </div>

        </main>


    )
}

export default Assignment;
