import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import PageLayout from './Planner';

const PlannerPage = ({ date, userEvents, selectedDate }) => {
  // Render your planner page based on the date and events
  // Use the existing Table component and data logic
  return (
    <div>
      <h2>Planner for {date.toDateString()}</h2>
      {/* Render the table here based on the date */}
    </div>
  );
};

const Planner = ({ currentDate = new Date(), user, events }) => {
  const [dateRange, setDateRange] = useState({
    start: new Date(),
    end: new Date(),
  });
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    // Logic to iterate through date range and add pages to PDF
    const { start, end } = dateRange;
    let currentDate = new Date(start);

    while (currentDate <= end) {
      doc.addPage();
      doc.text(`Planner for ${currentDate.toDateString()}`, 10, 10);
      // Add your planner content for each day here
      doc.html(componentRef.current, {
        async callback(doc) {
          await doc.save('document');
        },
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    doc.save('planner.pdf');
  };

  return (
    <div>
      <DateRangePicker setDateRange={setDateRange} />
      <button onClick={handlePrint}>Print</button>
      <button onClick={handleGeneratePDF}>Generate PDF</button>
      <div ref={componentRef}>
        <PageLayout user={user} events={events} currentDate={currentDate} />
      </div>
    </div>
  );
};

export default Planner;
