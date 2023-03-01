import React from 'react';

function PythonDatatypes(){
    return(
        <div className="PythonDatatypes">
                 <h1>Data Types</h1><br />
                    
                    <p>
                        Python is a dynamically typed language, which means that the data type of a variable is determined at runtime. There are several built-in data types in Python, including:
                    </p><br />
                    <h2>Numeric Data Types:</h2><br />
                    <ul>
                        <li> <b> Integer (int): </b>represents whole numbers, positive or negative, without decimals, with a theoretical limit of plus/minus 10^308.</li>
                        <li> Float (float): represents real numbers with decimal points, with a theoretical limit of plus/minus 10^308.</li>
                        <li> Complex (complex): represents a number in the form of a + bj, where a and b are real numbers, and j is the imaginary unit.</li>
                    </ul><br />
                    <h3>Sequence Data Types:</h3><br />
                    <ul>
                            
                           <li>  String (str): represents a sequence of characters, enclosed in single or double quotes.</li>
                           <li> List: represents a collection of items, where each item can be of any data type, enclosed in square brackets [].</li>
                           <li>  Tuple: similar to a list, but immutable (cannot be changed once created), enclosed in parentheses ().</li>
                           <li> Range: represents a sequence of numbers, with a start, stop, and step value, created using the range() function.</li>
                    </ul><br />
                    <h3>Mapping Data Types:</h3> <br />
                    <ul>
                            
                            <li>Dictionary: represents a collection of key-value pairs, where each key is unique and associated with a value, enclosed in curly braces {}.</li> 
                    </ul>
                    <ul>
                           <h3>Set Data Types:</h3> 
                           <li> Set: represents an unordered collection of unique items, enclosed in curly braces {}.</li>
                           <li> Frozen set: similar to a set, but immutable, enclosed in parentheses ().</li>
                    </ul>
                    <h3>Boolean Data Type:</h3>
                    <ul>
                            
                           <li> Boolean (bool): represents a logical value of either True or False.</li>

                    </ul><br />
                    <p>
                            In addition to these built-in data types, Python also provides several data type conversion functions, such as int(), float(), str(), and bool(), which allow you to convert one data type to another.

                            Python also allows you to create custom data types using classes, which are user-defined data types that can have their own properties and methods. This is one of the key features of Python's object-oriented programming paradigm.

                            Overall, the various data types in Python provide a lot of flexibility and power in storing and manipulating data, making it a popular language for a wide range of applications.
                    </p>
                
        </div>
    )
};

export default PythonDatatypes;