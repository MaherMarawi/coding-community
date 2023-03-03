import { SearchContext } from "../../../context/searchContext";
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import "./searchMobile.scss"

const SearchMobile = () => {

  const navigate = useNavigate();
  const { value, handleSubmit, setIsOpen, isOpen } = useContext(SearchContext)
  const [sv, setSv] = useState()

  const handleChange = (e) => {
    setSv(e.target.value)
  }
  const handleClick = () => {
    handleSubmit(sv)
    navigate(`/custom/search`);
    setSv("")
    setIsOpen(-90)
  }
  return (
    <div className="search-mobile" style={{top: isOpen}} >
      <div className="container">
        <input value={sv} onChange={handleChange} />
        <button onClick={() => handleClick()}>Search</button>
      </div>
    </div>
  )
}

export default SearchMobile