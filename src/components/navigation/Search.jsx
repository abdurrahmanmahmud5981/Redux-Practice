import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/filter/filterSlice";
import { useNavigate } from "react-router-dom";

export default function Search(){
    const navigate = useNavigate()
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {

        e.preventDefault();
        navigate('/')
        dispatch(setSearchTerm(input))
    }
    
    return (
        <form onSubmit={handleSubmit} >
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
        </form>
    )
}