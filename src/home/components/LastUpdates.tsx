import { TableLatest,TableTDLatest} from "../style/StylePage";
import React, { useState, useEffect } from 'react';

import {Filename} from "../types/Filename"

const LastUpdates = () => {
  const [filenames, setFilenames] = useState<Filename[]>([])

  useEffect(() => {
    fetch('https://www.cybershit.io/api/lastUpdates.php')
    .then(response => response.json())
    .then(res => setFilenames(res));
  }, [])

  return (
    <div>
        {filenames.map(file => ( 
        <TableLatest>
          <TableTDLatest> {file.uploaded}</TableTDLatest>
          <TableTDLatest>{file.filename}</TableTDLatest>
          <TableTDLatest><i>{file.category}</i></TableTDLatest>
        </TableLatest> 
        ))}
    </div>
  )
}

export default LastUpdates;
