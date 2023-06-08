import {useState} from "react";
function calcWinner(squares) {
  // console.log(squares,'===')
  const lines = [
    [0, 1, 2,3,4],
    [5,6, 7, 8,9],
    [10,11,12,13,14],
    [15,16,17,18,19],
    [20,21,22,23,24],
    [0, 5, 10,15,20],
    [1, 6, 11,16,21],
    [2, 7,12,17,22],
    [3, 8,13,18,23],
    [4, 9,14,19,24]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c,d,e] = lines[i];
    // console.log(a,b,c,d,e)
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]&& squares[a] === squares[d]&& squares[a] === squares[e]) {
      return squares[a];
    }
  }
  return null;
}
function Square({value,onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{value}</button>
}
function Board({xIsNext,squares,onPlay}){
  function handleClick(i){
    // console.log(JSON.stringify(squares),squares.length,'======do int')
    if(squares[i]||calcWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();//新生成一个Array
    if(xIsNext){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
    onPlay(nextSquares)
  }
  const winner = calcWinner(squares);
  let status;
  if(winner){
    status = 'winner:'+winner
  }else{
    status = 'Next player：'+(xIsNext?'X':'O');
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {
          squares.map((item,index)=>{
            return <Square key={index} value={item} onSquareClick={()=>handleClick(index)} />
          })
        }
      </div>
    </>
  );
}
export default function Game(){
  const [history,setHistory] = useState([Array(25).fill(null)]);
  const [currentMove,setCurrentMove] = useState(0)
  const xIsNext=currentMove%2 === 0;
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1),nextSquares];
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length-1)
  }
  function jumpTo(nextMove){
    setCurrentMove(nextMove);
    const nextHistory = [...history.slice(0, nextMove + 1)];
    setHistory(nextHistory)
  }
  const moves= history.map((squares,index)=>{
    let description = '';
    if(index>0){
      description = 'go to move #'+index;
    }else{
      description = 'go to game start'
    }
    return (
      <li key={index}>
        <button onClick={()=>{jumpTo(index)}}>{description}</button>
      </li>
    )
  })
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}
