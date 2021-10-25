import React from 'react'
import './Cal.css';

const Cal = () => {
    return (




        <div className="container">

            {/* <h1>This is cal</h1> */}

            <div className="main">
                <h1>This is cal</h1>
                <label htmlFor="">Enter a value to add/Sub </label>
                <input type="text" id="num" placeholder="Enter Your Number" />
                <br />

                <button type="button" class="btn btn-outline-primary ">Add</button>
                <br />
                <button type="button" class="btn btn-outline-success">Sub</button>
                <div className="res">res</div>
            </div>
        </div>


    )
}

export default Cal;
