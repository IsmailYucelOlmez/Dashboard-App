import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../../data/dummy';

const KanbanPage = () => {
  return (
    <div className="m-2 md:m-10 xs:mt-8 lg:mt-16 p-2 pt-6 md:p-10 bg-white dark:bg-slate-600 dark:text-white rounded-3xl">
      
      <header className='mb-8'>
        <h1 className='text-3xl font-extrabold'>Kanban</h1>
      </header>

      <KanbanComponent id="kanban" keyField="Status" dataSource={kanbanData} cardSettings={{ contentField: 'Summary', headerField: 'Id' }}>
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
      </KanbanComponent>
      
    </div>
  )
}

export default KanbanPage
