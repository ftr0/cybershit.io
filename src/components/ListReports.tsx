import React, { useState, useEffect } from 'react';
import { ReportContainer,ReportHeader,ReportBody } from "../style/StyleReports"

type Report = {
  day: string;
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
    const interval=setInterval(()=>{
      getPosts()
     },5000)
     return()=>clearInterval(interval)
  }, [])



  return (
    <div>
        {reports.map(comment => (
            <ReportContainer>
                <ReportHeader>{comment.day}, {comment.date}</ReportHeader>
               <ReportBody>
               <br/>
                {comment.content}
                <br/>
                <br/>
                homeoffice: <b>{comment.homeoffice}</b>
                </ReportBody>
            </ReportContainer>
         ))}
    </div>
  );
}

export default ListReports;
