import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, 
  AccumulationSeriesDirective, PieSeries, Inject,AccumulationLegend, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';


export const PieChart = () => {
  const { currentMode } = useStateContext();
  const datalabel = { visible: true, name: 'text', position: 'Outside' }
  return (
    <AccumulationChartComponent
    id='pie-chart'
    background = {currentMode ==="Dark"?'#33373E':"#fff"}
    >
    <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]} />
    <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' explode={true} radius='100%' dataLabel={datalabel} />
    </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}
