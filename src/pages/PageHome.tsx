import Chart from '../components/Chart';
import { ChartDiv,Logo, Box,TableLatest,TableTDLatest,Container} from "../style/StylePage";
import React, { useState, useEffect } from 'react';
import PageComments from "../components/ListComments"
import FormComments from "../components/FormComment"
import {Filename} from "../types/Filename"

const PostComment = () => {
  const [filenames, setFilenames] = useState<Filename[]>([])

  useEffect(() => {
    fetch('https://www.cybershit.io/api/lastUpdates.php')
    .then(response => response.json())
    .then(res => setFilenames(res));
  }, [])

  return (
    <div>
      <Container>
        <h2>what you can find here?¿?¿?</h2>
        <ChartDiv><Chart/></ChartDiv>
        <h2>last updates</h2>
        {filenames.map(file => ( 
        <TableLatest>
          <TableTDLatest> {file.uploaded}</TableTDLatest>
          <TableTDLatest>{file.filename}</TableTDLatest>
          <TableTDLatest><i>{file.category}</i></TableTDLatest>
        </TableLatest> 
        ))}
      </Container>
      <Container>
        <h2>blaBla blabla</h2>
        <div >
          <FormComments />
        </div>
        <PageComments/>
      </Container>
    </div>
  )
}

export default PostComment;
