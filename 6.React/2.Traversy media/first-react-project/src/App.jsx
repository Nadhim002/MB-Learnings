import {
  Route,
  createBrowserRouter,
  createRoutesFromElements, 
  RouterProvider
} from "react-router-dom"

import React from 'react'

import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import JobPage  from "./pages/JobPage"
import {fecthJob} from "./pages/JobPage"
import AddJobPage from "./pages/AddJobPage"
import EditJobPage from "./pages/EditJobPage.jsx"
import NotFoundpage from "./pages/NotFoundPage"
import { addJob , deleteJob , updateJob } from "./backendCalls/backendCalls.js"


const router = createBrowserRouter(

  createRoutesFromElements(

  <Route path="/" element = {  < MainLayout/>} >
          <Route index element = {<HomePage/>} /> 
          <Route path="/jobs" element = {<JobsPage/>} />
          <Route path="/jobs/:id" element = {<JobPage deleteJobHelper = {deleteJob}  />} loader = { fecthJob }  />
          <Route path="/edit-job/:id" element = {<EditJobPage updateJobHelper = {updateJob} />} loader = { fecthJob }  />
          <Route path="/add-job" element = {<AddJobPage addJobSubmit = {addJob} />} />
          <Route path="*" element = {<NotFoundpage/>} />
  </Route>

)
)


// A jsx file function should return only a single html element 
// But that single element can multiple childs 
// That single parent element can be fragment also ( empty element ) ex :  <> </>

export default function App() {

  return (
    < RouterProvider router={router} />
  )
}
