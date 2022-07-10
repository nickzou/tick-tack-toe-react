import { useState, useEffect } from 'react'
import Cell from './components/Cell';
import './App.css'

function App() {
  const [winner, setWinner] = useState(null);

  const [activePlayer, setActivePlayer] = useState('x');

  const [activeCell, setActiveCell] = useState(null);

  const [takenCells, setTakenCells] = useState([]);

  const [xCells, setXCells] = useState([]);

  const [oCells, setOCells] = useState([]);

  useEffect(() => {
    analyzeForAWin(xCells);
    analyzeForAWin(oCells);
    return () => {}
  }, [xCells, oCells, activePlayer]);

  function analyzeForAWin(playerArray) {
    const rows = [[1,2,3], [4,5,6], [7,8,9]];
    const columns = [[1,4,7], [2,5,8], [3,6,9]];
    const diagonals = [[1,5,9], [3,5,6]];
    if (
      rows.some(row => row.every(x => playerArray.includes(x))) ||
      columns.some(column => column.every(x => playerArray.includes(x))) ||
      diagonals.some(diag => diag.every(x => playerArray.includes(x)))
    ) {
      setWinner(activePlayer)
    } else {
      console.log(playerArray)
    }
  }

  const cells = [1,2,3,4,5,6,7,8,9];

  const handleMouseHover = (cell) => {
    if(!takenCells.includes(cell)) {
      setActiveCell(cell);
    }
  };

  const handleClick = (cell) => {
    if(!takenCells.includes(cell)) {
      setTakenCells(prevCell => [...prevCell, cell]);
      if (activePlayer === 'x') {
        setXCells(prevCell => [...prevCell, cell]);
        setActivePlayer('o');
      } else if (activePlayer === 'o') {
        setOCells(prevCell => [...prevCell, cell]);
        setActivePlayer('x');
      }
    }
  }

  return (
    <div className="App">
      {winner && `${winner} won`}
      <div className="grid">
        {cells.map(cell => {
          return (
            <div className="cell" key={cell} onMouseOver={() => handleMouseHover(cell)} onClick={() => handleClick(cell)}>
              {activeCell === cell && <Cell activePlayer={activePlayer}/>}
              {xCells.includes(cell) && <Cell x={true} />}
              {oCells.includes(cell) && <Cell o={true} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
