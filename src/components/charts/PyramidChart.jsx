import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, 
    AccumulationSeriesDirective, Inject,AccumulationLegend,PyramidSeries, 
     AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';

export const PyramidChart = () => {
    const { currentMode } = useStateContext();
    const datalabel = { visible: true, name: 'text', position: 'Outside' }
    return (
      <AccumulationChartComponent
      id='charts'
      background = {currentMode ==="Dark"?'#33373E':"#fff"}
      >
      <Inject services={[AccumulationLegend,PyramidSeries,AccumulationTooltip, AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={PyramidData} xName='x' yName='y' explode={true}  dataLabel={datalabel} type='Pyramid'  />
      </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    )
}
