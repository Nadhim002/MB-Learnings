import React from 'react'
import Navbar from './components/Navbar'
import Hero  from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from "./components/JobListings"
import ViewAllJobs from "./components/ViewAllJobs"

// A jsx file function should return only a single html element 
// But that single element can multiple childs 
// That single parent element can be fragment also ( empty element ) ex :  <> </>

export default function App() {

  return (

  <>

    < Navbar />
    < Hero  title='Become a React Dev'  subtitle='Find the React job that fits your skills and needs' />
    < HomeCards />
    < JobListings />
    < ViewAllJobs/>

    </>

  )
}