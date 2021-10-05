import React from 'react';
import EntryLine from "./EntryLine"

const Entries = ({entries}) => {
    return (
        entries.map(entry=>(
            <EntryLine isExpense={entry.isExpense} title={entry.title} value={entry.value} />
          ))
    )
}

export default Entries
