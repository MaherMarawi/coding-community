import "./customToolbarAdd.scss"
import Time from "../../../microcomponents/time/Time";
import Loader from "../../../microcomponents/loader/Loader";

export const CustomToolbarAdd = ({ handleClick, loading }) => (
  <div id="toolbar-add">
    <select
      className="ql-header"
      defaultValue={''}
      onChange={(e) => e.persist()}
    >
      <option value="1"></option>
      <option value="2"></option>
      <option defaultValue=""></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline"></button>
    <button className="ql-strike"></button>
    <button className="ql-blockquote"></button>
    <button className="ql-link"></button>
    <select className="ql-color">
      <option value="none"></option>
      <option value="red"></option>
      <option value="green"></option>
      <option value="blue"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
    </select>
    <select className="ql-align"></select>
    <button className="ql-list" value="ordered"></button>
    <button className="ql-list" value="bullet"></button>
    <button className="ql-image"></button>
    <button
      onClick={() => handleClick()}
      className="add-btn">
      {loading ? <Loader /> : "POST"}
    </button>
  </div>
);