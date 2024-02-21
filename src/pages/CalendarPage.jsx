import React from 'react'
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { scheduleData } from '../../data/dummy';
import { useState } from 'react';

const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;


const CalendarPage = () => {

  const [scheduleObj, setScheduleObj] = useState();


  return (
    <div  className="m-2 md:m-10 xs:mt-8 lg:mt-16 p-2 pt-6 md:p-10 bg-white dark:bg-slate-600 dark:text-white rounded-3xl">

      <header>
        <h1 className='mb-8 text-3xl font-extrabold'>Calendar</h1>
      </header>

      <ScheduleComponent height="650px" ref={(schedule) => setScheduleObj(schedule)} selectedDate={new Date(2021, 0, 10)} eventSettings={{ dataSource: scheduleData }}>
        
        <ViewsDirective>
          { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((element) => <ViewDirective key={element} option={element} />)}
        </ViewsDirective>

        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>

      <PropertyPane>
        <table style={{ width: '100%', background: 'white' }}>

          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>
                <DatePickerComponent value={new Date(2021, 0, 10)} showClearButton={false} placeholder="Current Date" floatLabelType="Always"/>
              </td>
            </tr>
          </tbody>
        </table>
        
      </PropertyPane>
      
    </div>
  )
}

export default CalendarPage
