import React from 'react'

import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"

export default function HomePage() {
  return (
    <>
      < Hero title='Become a React Dev' subtitle='Find the React job that fits your skills and needs' />
      < HomeCards />
      < JobListings />
      < ViewAllJobs /> 
    </>
  )
}
