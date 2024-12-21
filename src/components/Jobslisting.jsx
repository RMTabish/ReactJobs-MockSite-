import React from 'react'
import Onejob from './onejob'
import { useState, useEffect } from 'react'
const Jobslisting = ({isHome=false}) => {
  const [jobs,setJob]= useState([]);
  const [loading, setLoading] =useState(true);
  useEffect(()=>{

    const fetchJobs=async ()=>{
      try {
        
        const res=await fetch('http://localhost:8000/jobs');
        const data =await res.json();
        setJob(data);

      } catch (error) {
        console.log('error has occured while fetching the data')
      }
      finally{
        setLoading(false)
      }

    }
    fetchJobs();

  },[]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading?( <h2>loading....</h2> 
            ):
            (
              <>
            {
                jobs.map((job)=>(
                  <Onejob key={job.id} job={job}/>
              
            ))}
          </>
            )}
        </div>
      </div>
    </section>
  )
}

export default Jobslisting