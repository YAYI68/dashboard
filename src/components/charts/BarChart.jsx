import React from 'react';
import { ChartComponent,SeriesCollectionDirective,
    SeriesDirective, Inject, DateTime,BarSeries ,Legend, Tooltip ,
  } from '@syncfusion/ej2-react-charts';
  
  import { barCustomSeries,barPrimaryYAxis,barPrimaryXAxis } from '../../data/dummy';
  import { useStateContext } from '../../context/ContextProvider';

export const BarChart = () => {
    const { currentMode } = useStateContext();
  return (
   <ChartComponent
   id="line-chart"
   height="420px"
   primaryXAxis = {barPrimaryXAxis}
   primaryYAxis = {barPrimaryYAxis}
   chartArea = {{border:{ width:0}}}
   tooltip = {{enable: true}} 
   background = {currentMode ==="Dark"?'#33373E':"#fff"} 
   >
    <Inject services={[DateTime,BarSeries ,Legend]} />
    <SeriesCollectionDirective>
        {barCustomSeries.map((item, index)=>(
            <SeriesDirective key={index} {...item} />
        ))}
    </SeriesCollectionDirective>
   </ChartComponent>
  )
}
