import React from 'react';
import EntryLine from "./EntryLine"

const Entries = ({entries, deleteEntry, setIsOpen}) => {
    return (
        entries.map(entry=>(
            <EntryLine {...entry} deleteEntry={deleteEntry} key={entry.id} setIsOpen={setIsOpen} />
          ))
    )
}

export default Entries
