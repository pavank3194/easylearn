import React , {useEffect , useState} from 'react';

import PythonDatatypes from './Python-Datatypes';
import PythonOops from './Python-Oops';

import './Python.css'


function Python(){

    var prevScrollpos = window.pageYOffset;
    var navbar = document.querySelector("content-language-navbar");
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.classList.remove("hidden");
    } else {
        navbar.classList.add("hidden");
    }
    prevScrollpos = currentScrollPos;
    }



    return(
        <>
        <div className="content-language-details">
                <div className="content-language-navbar">
                    <ul>
                        <dl><h2> Python </h2></dl>
                        <br />
                        <a href='#PythonDatatypes'><li>Data Types</li></a><br />
                        <a href='#'><li>Oops</li></a><br />
                        <a href='#keywords'><li>Keywords</li></a><br />
                        <a href='#Literals'><li>Literals</li></a><br />
                        <a href='#Operators'><li>Operators</li></a><br />
                        <a href='#Loops'><li>Loops</li></a><br />
                        <a href='#ConditionalStatements'><li>Conditional Statements</li></a><br />
                        <a href='#Stacks'><li>Stacks</li></a><br />
                        <a href='#Queue'><li>Queue</li></a><br />
                        <a href='#Linkwdlist'><li>LinkedList</li></a><br />
                        <a href='#Hisory'><li>History</li></a>
                    </ul><br /><br />
                </div><hr /><br />
            </div>
                <div className="Python-language-Discription">
                    <PythonDatatypes/><br /><br /><hr /><br />
                    <PythonOops/>
                </div>
            </>
    )
};

export default Python;