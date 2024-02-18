import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';


const AreaGraphicPage = () => {
  return (
    <div className="m-4 md:m-10 xs:mt-8 lg:mt-24 p-6 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <header className='mb-8'>
        <h1 className='text-3xl font-extrabold'>Area Chart</h1>
      </header>

      <ChartComponent
          id="charts"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          // background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            
            {areaCustomSeries.map((element, i) => <SeriesDirective key={i} {...element} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      
    </div>
  )
}

export default AreaGraphicPage
