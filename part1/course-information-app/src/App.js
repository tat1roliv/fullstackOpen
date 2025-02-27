const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const parts = [
    {
      name: 'Fundamentos da biblioteca React',
      exercises: 10
    },
    {
      name: 'Usando props para passar dados',
      exercises: 7
    },
    {
      name: 'Estado de um componente',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {parts[0].name} - {parts[0].exercises}
      </p>
      <p>
      {parts[1].name} - {parts[1].exercises}
      </p>
      <p>
      {parts[2].name} - {parts[2].exercises}
      </p>
      <p>
        Número total de exercícios: {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </div>
  )
}

export default App

// const Header = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>{props.courseName}</h1>
//     </div>
//   )
// }

// const Part = ( props ) => {
//   return (
//     <div>
//       <p>{props.part.name + " - " + props.part.exercises}</p>
//     </div>
//   );
// };

// const Content = ( props ) => {
//   return (
//     <div>
//       <Part part={props.parts[0]} />
//       <Part part={props.parts[1]} />
//       <Part part={props.parts[2]} />
//     </div>
//   );
// };

// const Total = ( props ) => {
//   return (
//     <div>
//         <p>Number of exercises : <b>{props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises }</b></p>
//     </div>
//   );
// };


// const App = () => {

//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentos da biblioteca React",
//         exercises: 10,
//       },
//       {
//         name: "Usando props para passar dados",
//         exercises: 7,
//       },
//       {
//         name: "Estado de um componente",
//         exercises: 14,
//       },
//     ],
//   }

//   return (
//     <div>
//       <Header courseName={course.name}/>
//       <Content parts={course.parts}/>
//       <Total parts={course.parts}/>
//     </div>
//   )
// }