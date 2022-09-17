import React from 'react'
import { ChartComponent,SeriesCollectionDirective,
    SeriesDirective, Inject, HiloSeries, Category, Tooltip, Zoom, Crosshair,DateTime,
  } from '@syncfusion/ej2-react-charts';
import {FinancialPrimaryYAxis,FinancialPrimaryXAxis, financialChartData } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';


const date1 = new Date('2017, 1, 1');
function filterValue(value) {
    if (value.x >= date1) {
      // eslint-disable-next-line no-sequences
      return value.x, value.high, value.low;
    }
  }
const returnValue = financialChartData.filter(filterValue); 


export const FinancialChart = () => {
    const { currentMode} = useStateContext(); 
    
    
    return (
      <ChartComponent
        id="charts"
        height="420px"
        primaryXAxis = {FinancialPrimaryXAxis}
        primaryYAxis = {FinancialPrimaryYAxis} 
        background = {currentMode ==="Dark"?'#33373E':"#fff"}   
      >
        <Inject services={[HiloSeries, Tooltip, DateTime, Category, Crosshair, Zoom]} />
        <SeriesCollectionDirective>
          <SeriesDirective 
               dataSource={returnValue}
               xName="x"
               yName="low"
               name="Apple Inc"
               type="Hilo"
               low="low"
               high="high" />
        </SeriesCollectionDirective>
      </ChartComponent>
    )
}
