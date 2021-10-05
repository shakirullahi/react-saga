import React from 'react';
import EntryLine from "./EntryLine"

const Entries = ({entries, deleteEntry, editEntry}) => {
    return (
        entries.map(entry=>(
            <EntryLine {...entry} deleteEntry={deleteEntry} key={entry.id} editEntry={editEntry} />
          ))
    )
}

export default Entries
