import React from 'react'
import Stacked from '../components/charts/Stacked'

const StackedChartPage = () => {
  return (
    <div className="m-4 md:m-10 xs:mt-8 lg:mt-24 p-6 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <header className='mb-8'>
        <h1 className='text-3xl font-extrabold'>Stacked Chart</h1>
      </header>

      <Stacked />
      
    </div>
  )
}

export default StackedChartPage
