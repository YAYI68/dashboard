import React from 'react';
import { GridComponent, ColumnsDirective,Resize, Sort, 
  ColumnDirective, ContextMenu,Search, Page, 
Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData , employeesGrid } from '../data/dummy'
import { Header } from '../components';



export const Employee = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Employees" category="Page" />
      <GridComponent
       id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"

      >
        <ColumnsDirective>
          {employeesGrid.map((item, index)=>(
           <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}
