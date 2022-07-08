import { useState } from 'react'
import Cell from './components/Cell';
import './App.css'

function App() {

  const [activePlayer, setActivePlayer] = useState('x');

  const [activeCell, setActiveCell] = useState(null);

  const [takenCells, setTakenCells] = useState([]);

  const [xCells, setXCells] = useState([]);

  const [oCells, setOCells] = useState([]);


  const cells = [1,2,3,4,5,6,7,8,9];

  const handleMouseHover = (cell) => {
    if(!takenCells.includes(cell)) {
      setActiveCell(cell);
    }
  };

  const handleClick = (cell) => {
    if(!takenCells.includes(cell)) {
      setTakenCells(prevCell => [...prevCell, cell]);
      if(activePlayer === 'x') {
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
