import React from "react";
import Person from "../types.tsx";

const TypeScriptTask = () => {
  const person: Person = {
    name: "Lakeshwar",
    age: 30,
  };

  const myString: string = "Hello";
  const myNumber: number = 42;
  const myBoolean: boolean = true;
  const myFunction = (param1: string, param2: number): boolean => {
    console.log(`String parameter: ${param1} , Number parameter: ${param2}`);
    return param1.length + param2 > 50;
  };

  const result: boolean = myFunction(myString, myNumber);
  return (
    <div>
      <div className="container1">
        <h1 className="header1">Person Details</h1>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
      </div>
      <div className="container2">
        <h1 className="header2">{myString}</h1>
        <p>The number is : {myNumber}</p>
        <p>{myBoolean ? "True!" : "False!"}</p>
        <p>Function result : {result ? "True!" : "False!"}</p>
      </div>
    </div>
  );
};

export default TypeScriptTask;
