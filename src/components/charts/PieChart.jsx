import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, 
  AccumulationSeriesDirective, PieSeries, Inject,AccumulationLegend, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';


export const PieChart = () => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
    id='pie-chart'
    >
    <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]} />
    <AccumulationSeriesCollectionDirective>
      {pieChartData.map((item, index)=>(
        <AccumulationSeriesDirective key={index} {...item} />
      ))}
    </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}
