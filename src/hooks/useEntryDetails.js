import { useState } from "react";
import { useDispatch } from "react-redux";
import {addEntryRedux} from "../actions/entries.actions"
import {v4 as uuidv4} from "uuid";

function useEntryDetails() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [isExpense, setIsExpense] = useState(true);
    
    const addEntry = () => {
      dispatch(addEntryRedux({
        id:uuidv4(),
        title,
        value,
        isExpense
      }));
      setTitle('');
      setValue('');
      setIsExpense(true);
    }

    return {
        title, setTitle, value, setValue, isExpense, setIsExpense, addEntry
    };
  
}

export default useEntryDetails
