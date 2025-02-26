
function App() {
  console.log('-----from main component!');
  const hoje = new Date();
  const a = 10;
  const b = 20;
  console.log("-------"+ hoje, a+b);

  return (
    <div className="App">
        <p>Hello world!</p>
    
        <p>Today {hoje.toString()}</p>
        <p>{a} + {b} = {a + b}</p>
    </div>
  );
}

export default App;
