const Config = ({ handleImageChange, columns, setColumns, rows, setRows }) => {
    return (
      <div className="text-primary">
        <div>
          <label htmlFor='image'>
            Use your custom image{' '}
            <small>(works better with a square image)</small>:
          </label>
          <br />
          <input className="text-primary"
            id='image'
            type='file'
            
          />
        </div>
        <div>
          <label htmlFor='columns'>Number of columns:</label>
          <input
            id='columns'
            type='number'
            min={3}
            max={6}
            value={columns}
            
          />
        </div>
        <div>
          <label htmlFor='rows'>Number of rows:</label>
          <input
            id='rows'
            type='number'
            min={3}
            max={6}
            value={rows}
            
          />
        </div>
      </div>
    )
  }

export default Config;