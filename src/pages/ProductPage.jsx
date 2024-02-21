import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { productData, contextMenuItems, productsGrid } from '../../data/dummy';


const ProductPage = () => {

  const editing = { allowDeleting: true, allowEditing: true };


  return (
    <div className="m-2 md:m-10 xs:mt-8 lg:mt-16 p-2 pt-6 md:p-10 bg-white dark:bg-slate-600 dark:text-white rounded-3xl">

      <header className='mb-8'>
        <h1 className='text-3xl font-extrabold'>Product</h1>
      </header>

      <GridComponent
        id="gridcomp"
        dataSource={productData}
        allowPaging={true} 
        allowSorting={true}
        allowExcelExport={true}
        allowPdfExport={true}
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {productsGrid.map((element, i) => <ColumnDirective key={i} {...element} />)}
        </ColumnsDirective>

        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />

      </GridComponent>
      
    </div>
  )
}

export default ProductPage
