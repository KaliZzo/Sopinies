import './WhackAMole.css';
import Countdown from './Countdown';
import Config from './Config';

export default function WhackAMole() {



  /* if (gameOver) {
    return (
      <>
        <h2 className="text-primary">Score: </h2>
        <Config
          handleImageChange={handleImageChange}
          columns={columns}
          setColumns={setColumns}
          rows={rows}
          setRows={setRows}
        />
        <button 
                className="btn btn-primary btn-xl">Start</button>
      </>
    )
  }
 */
  return (
    <div className="whack-a-mole">
      
      <h2 className="text-primary">Score: </h2>
      <Countdown  />
    
    <div
      className='d-grid mole-container'
      style={{
        gridTemplateColumns: `repeat(3, 1fr)`,
          gridTemplateRows: `repeat(3, 1fr)`,
      }}
    >
      
          <div>'🐹'</div>
        
  
    </div>
    </div>
  )
}


