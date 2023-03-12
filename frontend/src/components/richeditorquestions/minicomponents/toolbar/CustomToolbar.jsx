import "./customToolbar.scss"
import Time from "../../../microcomponents/time/Time";

export const CustomToolbar = ({ user_name, solved, date }) => (
  <div id="toolbar">
    {/* <select
        className="ql-header"
        defaultValue={''}
        onChange={(e) => e.persist()}
      >
        <option value="1"></option>
        <option value="2"></option>
        <option selected></option>
      </select>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <select className="ql-color">
        <option value="red"></option>
        <option value="green"></option>
        <option value="blue"></option>
        <option value="orange"></option>
        <option value="violet"></option>
        <option value="#d0d1d2"></option>
        <option selected></option>
      </select> */
    }
    <div className="info">
      <span>{user_name}</span>
      <div className="details">
        <span>{solved}</span>
        <span><Time time={date} /></span>
      </div>
    </div>
  </div>
);