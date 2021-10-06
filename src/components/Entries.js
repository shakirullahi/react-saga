import React from 'react';
import EntryLine from "./EntryLine"

const Entries = ({entries, editEntry}) => {
    return (
        entries.map(entry=>(
            <EntryLine {...entry}  key={entry.id} editEntry={editEntry} />
          ))
    )
}

export default Entries
