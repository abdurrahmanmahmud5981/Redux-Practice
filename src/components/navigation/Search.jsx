import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/filter/filterSlice";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const [searchDebounced, setSearchDebounced] = useState("");
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  
  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchDebounced(input.trim());
      navigate("/");
      dispatch(setSearchTerm(searchDebounced));;
    }, 500);
    return () => clearTimeout(timer);
  }, [input,searchDebounced,dispatch,navigate]);
 

  return (
  
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
  
  );
}
