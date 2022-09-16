import React from 'react';
import { ChartComponent,SeriesCollectionDirective,
  SeriesDirective, Inject, DateTime,SplineAreaSeries ,Legend, Tooltip ,
} from '@syncfusion/ej2-react-charts';

import { areaCustomSeries,areaPrimaryYAxis,areaPrimaryXAxis } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';


export const AreaChart = () => {
     
    const { currentMode} = useStateContext();

    
  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis = {areaPrimaryXAxis}
      primaryYAxis = {areaPrimaryYAxis}
      chartArea = {{border:{ width:0}}}
      tooltip = {{enable: true}} 
      background = {currentMode ==="Dark"?'#33373E':"#fff"}   
    >
      <Inject services={[DateTime,Legend,SplineAreaSeries]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item,index) =>(
        <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}
