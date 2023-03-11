import { SearchContext } from "../../../context/searchContext";
import { useContext, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'
import "./searchMobile.scss"

const SearchMobile = ({
  toggleSearchMobile,
  MobileSearchPosition,
  buttonSearchPosition
}) => {


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
    toggleSearchMobile()
  }
  return (
    <div className="search-mobile" style={MobileSearchPosition} >
        <input style={MobileSearchPosition} value={sv} onChange={handleChange} />
        <button style={MobileSearchPosition} onClick={() => handleClick()} value="Search" ><span style={buttonSearchPosition}>Search</span></button>
    </div>
  )
}

export default SearchMobile