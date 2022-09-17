import React from 'react';
import { ChartComponent,SeriesCollectionDirective,
    SeriesDirective, Inject,Legend, Tooltip ,ColumnSeries, DataLabel,Category 
  } from '@syncfusion/ej2-react-charts';
  
  import { barCustomSeries,barPrimaryYAxis,barPrimaryXAxis } from '../../data/dummy';
  import { useStateContext } from '../../context/ContextProvider';

export const BarChart = () => {
    const { currentMode } = useStateContext();
  return (
   <ChartComponent
   id="bar-chart"
   height="420px"
   primaryXAxis = {barPrimaryXAxis}
   primaryYAxis = {barPrimaryYAxis}
   chartArea = {{border:{ width:0}}}
   tooltip = {{enable: true}} 
   background = {currentMode === "Dark"?'#33373E':"#fff"} 
   legendSettings={{ background: 'white' }}
   >
    <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
    <SeriesCollectionDirective>
        {barCustomSeries.map((item, index)=>(
            <SeriesDirective key={index} {...item} />
        ))}
    </SeriesCollectionDirective>
   </ChartComponent>
  )
}
