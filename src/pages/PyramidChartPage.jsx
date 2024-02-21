import React, { useContext } from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../../data/dummy';
import { DashboardContext } from '../context/DashboardContext';


const PyramidChartPage = () => {

  const {theme}=useContext(DashboardContext);


  return (
    <div className="m-4 md:m-10 xs:mt-8 lg:mt-16 p-6 bg-white dark:bg-slate-600 dark:text-white rounded-3xl">

      <header className='mb-8'>
        <h1 className='text-3xl font-extrabold'>Pyramid Chart</h1>
      </header>

      <AccumulationChartComponent id="pyramid-chart" legendSettings={{ background: 'white',color:'orange' }} tooltip={{ enable: true }}
                                  background={theme === 'dark' ? '#475569' : '#fff'}>
                                    
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      
    </div>
  )
}

export default PyramidChartPage
