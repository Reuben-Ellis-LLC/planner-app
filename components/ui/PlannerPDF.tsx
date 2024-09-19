'use client';
import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import { Calendar } from './calendar';
import { addDays, format } from 'date-fns';
import PDF from './PDF';
import { Popover, PopoverTrigger, PopoverContent } from './popover';
import { Button } from './button';
import { DateRange } from 'react-day-picker';

function generateDateArray(dateRange: any) {
  const { from, to } = dateRange;
  const dates = [];
  const currentDate = new Date(from);

  while (currentDate <= to) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

const Planner = ({ currentDate = new Date(), user, events }: any) => {
  const [dateRange, setDateRange] = useState({
    start: new Date(),
    end: new Date(),
  });

  const initialRange = {
    from: new Date(),
    to: addDays(new Date(), 4),
  };

  const [range, setRange] = useState(initialRange);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const componentRef = useRef<HTMLDivElement | null>(null);

  const dates = generateDateArray(range);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current || null,
  });

  const filteredEvents = events.filter((event: any) => {
    const eventStart = new Date(event.startAt);
    const eventEnd = new Date(event.endAt);
    return dates.some(
      (date) =>
        `${eventStart.getDate()}-${eventStart.getMonth()}-${eventStart.getFullYear()}` ===
        `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    );
  });

  //   const handleGeneratePDF = () => {
  //     const doc = new jsPDF();
  //     const { start, end } = dateRange;
  //     let currentDate = new Date(start);

  //     while (currentDate <= end) {
  //       doc.addPage();
  //       doc.text(`Planner for ${currentDate.toDateString()}`, 10, 10);
  //       // Add your planner content for each day here
  //       doc.html(componentRef.current, {
  //         async callback(doc) {
  //           console.log(componentRef.current);
  //           await doc.save('planner.pdf');
  //         },
  //       });
  //       currentDate.setDate(currentDate.getDate() + 1);
  //     }

  //     // doc.save('planner.pdf');
  //   };

  return (
    <div>
      {/* <DateRangePicker setDateRange={setDateRange} /> */}
      <Button size="sm" onClick={handlePrint}>
        Print
      </Button>
      <Popover>
        <PopoverTrigger>
          <Button size="sm">
            <CalendarDaysIcon className="mr-2 h-4 w-4" />
            {format(selectedDate, 'MMM d, yyyy')}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            onSelect={(selected: { from: Date; to: Date } | undefined) =>
              setRange(selected || initialRange)
            }
            selected={range}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
      {/* <button onClick={handleGeneratePDF}>Generate PDF</button> */}
      <div ref={componentRef}>
        {/* <DateStepper dateRange={dateRange} user={user} events={events} /> */}
        {dates.map((date) => (
          <PDF
            user={user}
            events={filteredEvents}
            currentDate={date}
            range={range}
          />
        ))}
      </div>
    </div>
  );
};

export default Planner;

function CalendarDaysIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}
