import React, { useState } from 'react';
import BpkCalendar from 'bpk-component-calendar';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import format from 'date-fns/format';

import './App.scss';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <header className="App-header">
        <BpkText tagName="h1" textStyle="xxl">Flight Schedule</BpkText>
      </header>
      <div className="App-calendar">
        <BpkCalendar
          id="calendar"
          onDateSelect={handleDateSelect}
          formatDate={date => format(date, 'dd/MM/yyyy')}
          formatMonth={month => format(month, 'MMMM yyyy')}
          selectionConfiguration={{
            type: 'single',
            date: selectedDate,
          }}
        />
      </div>
      <div className="App-button">
        <BpkButton onClick={() => alert('Continue button clicked')}>Continue</BpkButton>
      </div>
    </div>
  );
}

export default App;
