import React from 'react';
import { Header, FinancialChart } from '../../components';

export const Financial = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category="Chart" title="Apple Stock" />
  <div className='w-full'>
     <FinancialChart />
  </div>
  </div>
  )
}
