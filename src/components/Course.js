import React from 'react'
const Header = (props) => {
    return(
      <h1>{props.courseName}</h1>
    )
  }
  
  const Content = (props) =>
  {
    return(
      <div>
        {props.parts.map(part =>  <Part name={part.name} exercises={part.exercises}></Part>)}
      </div>
    )
  }
  
  const Part = (props) => {
    return(
      <p>{props.name} : {props.exercises}</p>
    )
  }
  
  const Total = (props) => {


    return(
      <p>Number of exercises: {props.parts.reduce((prevValue, currentValue) => prevValue + currentValue.exercises, 0)}</p>
    )
  }

  const Course = (props) =>{
    
    return(
      <div>
        <h1>Web development curriculum</h1>
        {props.courses.map(course => <p id={course.id}>
          <Header courseName={course.name}/>
              <Content parts={course.parts}></Content>
              <Total parts={course.parts}></Total>
              </p>)}

      </div>
    )
  }

export default Course