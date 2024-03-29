import React, { useContext } from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { DashboardContext } from '../context/DashboardContext';


const FinancialChartPage = () => {

  const {theme}=useContext(DashboardContext);
  const date1 = new Date('2017, 1, 1');

  const filterValue=(value)=> {
    if (value.x >= date1) {
      return value.x, value.high, value.low;
    }
  }
  const returnValue = financialChartData.filter(filterValue);


  return (
    <div className="m-4 md:m-10 xs:mt-8 lg:mt-16 p-6 bg-white dark:bg-slate-600 dark:text-white rounded-3xl">

      <header className='mb-8'>
        <h1 className='text-3xl font-extrabold'>Financial Chart</h1>
      </header>

      <ChartComponent id="charts" primaryXAxis={FinancialPrimaryXAxis} primaryYAxis={FinancialPrimaryYAxis} chartArea={{ border: { width: 0 } }}
                      tooltip={{ enable: true, shared: true }} crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
                      background={theme === 'dark' ? 'black' : '#fff'} >

          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={returnValue} xName="x" yName="low" name="Apple Inc" type="Hilo" low="low" high="high"/>
          </SeriesCollectionDirective>
        </ChartComponent>
      
    </div>
  )
}

export default FinancialChartPage
