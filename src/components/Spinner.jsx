import React from 'react'
import ClipLoader from 'react-spinners/CLipLoader';

const override={
    display: 'block',
    margin: '100px auto'
}

const Spinner = ({loading}) => {
  return (
    <ClipLoader
    color='#4338cs'
    loading={loading}
    cssOverride={override}/>
  )
}

export default Spinner