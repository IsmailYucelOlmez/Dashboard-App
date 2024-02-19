import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';

const PieGraphicPage = () => {
  return (
    <div className="m-4 md:m-10 xs:mt-8 lg:mt-16 p-6 bg-white dark:bg-slate-600 dark:text-white rounded-3xl">
      <header className='mb-8'>
        <h1 className='text-3xl font-extrabold'>Pie Chart</h1>
      </header>

      <AccumulationChartComponent id="chart-pie" legendSettings={{ visible: "legendVisiblity", background: 'white' }} height="full" /*background={currentMode === 'Dark' ? '#33373E' : '#fff'}*/ tooltip={{ enable: true }}>
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective name="Sale" dataSource={pieChartData} xName="x" yName="y" innerRadius="40%" startAngle={0} endAngle={360} radius="70%" explode explodeOffset="10%" explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
      
    </div>
  )
}

export default PieGraphicPage
