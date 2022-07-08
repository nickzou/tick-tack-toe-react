const Cell = ({activePlayer=null, x=null, o=null}) => {
    return(
        <div className="cell-inner">
            {activePlayer}
            {x && 'x'}
            {o && 'o'}
        </div>
    );
};

export default Cell;