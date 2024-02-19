import React from 'react'
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../../data/dummy';

const PersonelPage = () => {

  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: true, allowEditing: true };


  return (
    <div className="m-2 md:m-10 xs:mt-8 lg:mt-16 p-2 pt-6 md:p-10 bg-white dark:bg-slate-600 dark:text-white rounded-3xl">

      <header className='mb-8'>

        <h1 className='text-3xl font-extrabold'>Employees</h1>

      </header>

      <GridComponent
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, i) => <ColumnDirective key={i} {...item} />)}
        </ColumnsDirective>

        <Inject services={[Search, Page]} />

      </GridComponent>
      
    </div>
  )
}

export default PersonelPage
