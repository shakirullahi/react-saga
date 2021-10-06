const reducer = (state=initialEntries, action)=> {
    switch (action.type) {
      case 'ADD_ENTRY':
          return ([ ...state, action.payload]);
      case 'REMOVE_ENTRY':
        return (state.filter(entry=>entry.id !== action.payload.id))
    
      default:
        return state;
    }
};

export default reducer;


var initialEntries = [
    {
    id:1,
    title:"Salary redux",
    value:100000.00,
    isExpense:false
  },
  {
    id:2,
    title:"KSEB redux",
    value:100.00,
    isExpense:true
  },
  {
    id:3,
    title:"Grocery",
    value:3000.00,
    isExpense:true
  },
  {
    id:4,
    title:"Bike Service",
    value:200.00,
    isExpense:true
  }
  ];