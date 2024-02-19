import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../../data/dummy';


const CustomerPage = () => {

  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };


  return (
    <div className="m-2 md:m-10 xs:mt-8 lg:mt-16 p-2 pt-6 md:p-10 bg-white dark:bg-slate-600 rounded-3xl">
    <header className='mb-8'>
      <h1 className='text-3xl font-extrabold'>Customers</h1>
    </header>
    <GridComponent
      dataSource={customersData}
      enableHover={false}
      allowPaging
      pageSettings={{ pageCount: 5 }}
      selectionSettings={selectionsettings}
      toolbar={toolbarOptions}
      editSettings={editing}
      allowSorting
      
    >
      <ColumnsDirective>
        
        {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
      <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
    </GridComponent>
  </div>
  )
}

export default CustomerPage
