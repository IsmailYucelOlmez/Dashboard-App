import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';


const BarGraphicPage = () => {
  return (
    <div className="m-4 md:m-10 xs:mt-8 lg:mt-16 p-6 bg-white dark:bg-slate-600 dark:text-white-dark-bg rounded-3xl">
      <header className='mb-8'>
        <h1 className='text-3xl font-extrabold'>Bar Chart</h1>
      </header>

      <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          // background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((element, i) => <SeriesDirective key={i} {...element} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      
    </div>
  )
}

export default BarGraphicPage
