import React  from 'react'
import JobListing from './JobListing'
import Spinner from "./Spinner"
import { useState, useEffect } from 'react'


function JobListings({ isHome = true }) {


  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(  () => {


    async function fetchJobs(apiUrl) {

      try {

        const dataOld = await fetch(apiUrl) 
        const dataNew = await dataOld.json()
        setJobs(dataNew)

      } catch (err) {

      } finally {

        setLoading(false)

      }
    }

    const apiUrl = isHome ? 
    "/api/jobs?_limit=3" :
     "/api/jobs"

    console.log( apiUrl  )
    fetchJobs(apiUrl)

  } , [] )

  const headerToShow = isHome ? "Recent Jobs" : "Browse Jobs"

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {headerToShow}
        </h2>

        { loading ? <Spinner/> : 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map( (job , index ) =>  <JobListing key={index}  job={job} />  )}
          </div>
                 }

      </div>
    </section>
  )
}

export default JobListings