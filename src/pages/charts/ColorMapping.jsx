import React from 'react';
import { Header,ColorMapChart } from '../../components';

export const ColorMapping = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category="Chart" title="USA CLIMATE - WEATHER BY MONTH" />
  <div className='w-full'>
     <ColorMapChart />
  </div>
  </div>
  )
}
