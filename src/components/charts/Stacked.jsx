import React, { useContext } from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../../data/dummy';
import { DashboardContext } from '../../context/DashboardContext';


const Stacked = ({width,height}) => {

  return (
    <ChartComponent id="charts" primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} width={width} height={height}
    chartArea={{ border: { width: 0 } }}
    tooltip={{ enable: true }}
  >
    <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
    <SeriesCollectionDirective>
      {stackedCustomSeries.map((element, i) => <SeriesDirective key={i} {...element} />)}
    </SeriesCollectionDirective>
  </ChartComponent>
  )
}

export default Stacked
