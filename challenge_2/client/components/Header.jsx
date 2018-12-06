import React from 'react';

const Header = ({startDate, endDate, inputChangeHandler, formSubmitHandler}) => (
  <div>
    <h3>Crypto Charts</h3>
    <form>
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={startDate}
        onChange={e => inputChangeHandler(e)}
      />
      <input
        type="date"
        name="endDate"
        id="endDate"
        value={endDate}
        onChange={e => inputChangeHandler(e)}
      />
      <button
        type="submit"
        onClick={e => formSubmitHandler(e)}
      >
      Get Prices
      </button>
    </form>
  </div>

)

export default Header;
