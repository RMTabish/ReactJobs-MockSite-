import React from 'react'
import Hero from '../components/hero'
import Joblisting from '../components/Jobslisting'
import Homecards from '../components/Homecards'
import ViewAllJobs from '../components/ViewAllJobs'
const HomePage = () => {
  return (
    <><Hero></Hero>
    <Homecards></Homecards>
    <Joblisting isHome={true}></Joblisting>
    <ViewAllJobs/>
    </>

  )
}

export default HomePage