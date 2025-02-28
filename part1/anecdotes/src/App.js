import { useState } from 'react';

const Button = (props) => {
  return (
  <div>
    <button onClick={props.handleClick}>{props.text}</button>
  </div>
  )
}

const MostVotes = (props) => {
  const { anecdotes, votes } = props;
  const maxVotes = Math.max(...votes);
  const indexOfMaxVotes = votes.indexOf(maxVotes);

  if (maxVotes === 0) {
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <p>No votes yet</p>
      </div>
    )
  } else{

  return (
    <div>
      <h1>Anecdote with most votes</h1>
        <p>{anecdotes[indexOfMaxVotes]}</p>
        <p>has {maxVotes} votes</p>
    </div>
  )
  }
}

const App = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const randomSelected = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  } 

  const voteSelected = () => {
    setVotes(votes.map((vote, index) => index === selected ? vote + 1 : vote));
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      
      <Button handleClick={voteSelected} text='Vote'/>
      <Button handleClick={randomSelected} text='Next'/>

      <MostVotes anecdotes={anecdotes} votes={votes} />

    </div>


  )
}

export default App