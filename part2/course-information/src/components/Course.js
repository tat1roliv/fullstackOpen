const Header = (props) => {
    return (
    <h1>{props.name}</h1>
)}

const Content = (props) => {
    return (
    <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
    </div>
)}

const Part = (props) => {
    return (
    <p>
        {props.part.name} {props.part.exercises}
    </p>
)}

const Total = (props) => {
    const total = props.parts.reduce((accum, actual) => accum + actual.exercises, 0);
    return (
    <p>
        Total : {total} exercises
    </p>
    
)}

const Course = (props) => {
    console.log(props)
    return (
      <div>
        <Header name={props.course.name} />
        <Content parts={props.course.parts}/>
        <Total parts={props.course.parts}/>
      </div>
    )
  }

  export default Course;
