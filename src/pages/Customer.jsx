import React from 'react';
import { GridComponent, ColumnsDirective, Sort, 
  ColumnDirective,Search, Page,Filter,Selection,
Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { customersData,customersGrid } from '../data/dummy';
import { Header } from '../components';

export const Customer = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header title="Customers" category="Page" />
    <GridComponent
     id="gridcomp"
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Search','Delete']}
      width="auto"
      editSettings={{ allowDeleting: true,allowEditing:true}}

    >
      <ColumnsDirective>
        {customersGrid.map((item, index)=>(
         <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[Page, Edit, Search,
        Sort,Filter,Selection, Toolbar]} />
    </GridComponent>
  </div>
  )
}
