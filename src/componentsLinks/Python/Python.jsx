import React from 'react';

import PythonDatatypes from './Python-Datatypes';
import PythonOops from './Python-Oops';


function Python(){
    return(
        <div className="content-language-details">
                <div className="content-language-left">
                    <ul>
                        <dl><h2> Python </h2></dl>
                        <br />
                        <li>Data Types</li><br />
                        <li>Oops</li><br />
                        <li>Keywords</li><br />
                        <li>Literals</li><br />
                        <li>Operators</li><br />
                        <li>Loops</li><br />
                        <li>Conditional Statements</li><br />
                        <li>Stacks</li><br />
                        <li>Queue</li><br />
                        <li>LinkedList</li><br />
                        <li>History</li>
                    </ul>
                </div>
                <div className="content-language-middle"></div>
                <div className="content-language-right">
                    <PythonDatatypes/><br /><br />
                    <PythonOops/>
                </div>
            </div>
    )
};

export default Python;