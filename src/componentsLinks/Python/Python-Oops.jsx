import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';


function PythonOops(){
    return(
        <div className="PythonOops">
            <h1>
                Oops ( Object Oriented Programming )
            </h1><br />
            <p>
                Like other general-purpose programming languages, Python is also an object-oriented language 
                since its beginning. It allows us to develop applications using an Object-Oriented approach. 
                In Python, we can easily create and use classes and objects.
            </p>
            <p>
                Python is an object-oriented programming language, which means it supports object-oriented programming (OOP) 
                concepts such as encapsulation, inheritance, and polymorphism.
            </p><br /><br />
            <p>
                Here are the main OOP concepts in Python:
            </p><br />
            
                <li>Classes</li>
                <li>Objects</li>
                <li>Inheritence</li>
                <li>Polymorphism</li>
                <li>Abstraction</li>
                <li>Encaptulation</li>
            <br /><br />
            <h2>Classes</h2><br />
            <p>
            In OOP, we define classes, which are templates for creating objects. A class is a blueprint that defines the attributes (data) and methods (code)
             that an object of that class will have. We can create multiple objects (instances) of a class, each 
             with it's own unique data.
            </p>
            <SyntaxHighlighter language="python" style={darcula} >
                {`class Person:
                    def __init__(self, name, age):
                        self.name = name
                        self.age = age

                    def get_name(self):
                        return self.name

                    def get_age(self):
                        return self.age`}
            </SyntaxHighlighter>
            <br /><br />
            <p>
                Here, we define a class called "Person" with two attributes (name and age) and two methods 
                (get_name and get_age). <br /> The __init__ method is a special method in Python that is called when an object of the class is created. <br />
                It initializes the object's attributes with the values passed as arguments.
            </p><br />
            <p>

                To create an object of this class, we simply call the class and pass in the required arguments:
            </p><br />
            <h3>Python Object code</h3>
            <SyntaxHighlighter language="python" style={darcula} >
                {`              person1 = Person("Alice", 25)
                person2 = Person("Bob", 30)`}
            </SyntaxHighlighter><br />
            <p>
                Now, we can access the attributes and methods of the objects using the dot notation:
            </p><br />
            <h3>Pyhton Object Code</h3><br />
            <SyntaxHighlighter language="python" style={darcula} >

            {`          print(person1.get_name()) # Output: "Alice"
            print(person2.get_age()) # Output: 30 `}
            </SyntaxHighlighter><br />

           <p> We can also modify the attributes of an object: </p> <br />

            Python
            <SyntaxHighlighter language="python" style={darcula} >

                {`              person1.age = 30
                print(person1.get_age()) # Output: 30`}
            </SyntaxHighlighter> <br />

            <p>

                One of the key benefits of OOP is code reusability. We can create a new class that inherits from an existing class, which means it automatically has all the attributes and methods of the parent class. We can then modify or add to those attributes and methods as needed.

                For example, let's create a new class called "Student" that inherits from the "Person" class:
            </p> <br />
            <h3>Python code</h3>
            <SyntaxHighlighter language="python" style={darcula} >
                {`class Student(Person):
                    def __init__(self, name, age, student_id):
                        super().__init__(name, age)
                        self.student_id = student_id

                    def get_student_id(self):
                        return self.student_id`}
            </SyntaxHighlighter><br />
            <p>
                Here, we define a new class called "Student" that inherits from the "Person" class. We add a new attribute called "student_id" and a new method called "get_student_id".

                We can now create objects of the "Student" class:
            </p><br />
            <h3>Python Code</h3><br />
            <SyntaxHighlighter language="python" style={darcula} >

            {`student1 = Student("Charlie", 20, "12345")`}
            </SyntaxHighlighter><br />
            <p>
                The student1 object has all the attributes and methods of the "Person" class, as well as the new attribute and method of the "Student" class:
            </p><br />
            <h3>Python Code</h3><br />
            <SyntaxHighlighter language="python" style={darcula} >

                {`print(student1.get_name()) # Output: "Charlie"
                  print(student1.get_student_id()) # Output: "12345"`}
            </SyntaxHighlighter><br />
            <p>
                In summary, OOP is a powerful programming paradigm that allows us to create complex programs by modeling real-world objects and their interactions. Python supports OOP very well, and it can be a great way to organize and modularize your code.
            </p>
        </div>
    )
};

export default PythonOops;