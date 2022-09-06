import React, { useState, useEffect } from 'react';
import { ReportContainer } from "../style/StyleReports"

type Report = {
  content: string;
  date: string;
  homeoffice: string;
}

const ListReports = () => {
const [reports, setReports] = useState<Report[]>([])
const [error, setError] = useState({})

  function getPosts() {
    fetch('https://www.cybershit.io/api/service.php?info=reports')
    .then(response => response.json())
    .then(res => setReports(res))
    .catch(err => setError(err))
      console.log(error);
    
  }

  useEffect(() => {
    getPosts()    
  })

  return (
    <div>
        {reports.map(comment => ( 
            <ReportContainer>
                {comment.date}
              <pre>{comment.content}</pre>
            </ReportContainer>   
         ))}  
    </div>
  );
}

export default ListReports;