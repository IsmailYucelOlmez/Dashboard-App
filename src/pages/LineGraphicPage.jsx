import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';


const LineGraphicPage = () => {
  return (
    <div className="m-4 md:m-10 xs:mt-8 lg:mt-24 p-6 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <header className='mb-8'>
        <h1 className='text-3xl font-extrabold'>Line Chart</h1>
      </header>

      <ChartComponent id="line-chart" height="420px" primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} /*background={currentMode === 'Dark' ? '#33373E' : '#fff'}*/ legendSettings={{ background: 'white' }}>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>

    </div>
  )
}

export default LineGraphicPage
