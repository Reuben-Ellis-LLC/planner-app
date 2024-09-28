'use client';
import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Calendar } from './calendar';
import { addDays, format } from 'date-fns';
import PDF from './PDF';
import { Popover, PopoverTrigger, PopoverContent } from './popover';
import { Button } from './button';

type Event = {
  id?: string;
  title: string;
  startAt: Date;
  endAt: Date;
  userId: string;
  user?: { email: string };
  recurrence?: string;
  daysOfWeek?: [];
  daysOfMonth?: [];
  color?: string;
};

function generateDateArray(dateRange: { from: Date; to: Date }) {
  const { from, to } = dateRange;
  const dates = [];
  const currentDate = new Date(from);

  while (currentDate <= to) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}

function filterEvents(events: Event[], dates: Date[]) {
  return events.filter((event: Event) => {
    const eventStart = event.startAt;
    return dates.some((date) => {
      return (
        `${eventStart.getDate()}-${eventStart.getMonth()}-${eventStart.getFullYear()}` ===
        `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
      );
    });
  });
}

const Planner = ({
  currentDate = new Date(),
  events,
}: {
  currentDate: Date;
  events: Event[];
}) => {
  const initialRange = {
    from: new Date(),
    to: addDays(new Date(), 4),
  };

  const [selected, setSelected] = useState<
    { from: Date; to: Date } | undefined
  >();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [dates, setDates] = useState(
    generateDateArray(selected || initialRange)
  );
  const [updatedEvents, setEvents] = useState(filterEvents(events, dates));

  const handleSetRange = (selected: { from: Date; to: Date } | undefined) => {
    setSelected(selected);
    setDates(generateDateArray(selected || initialRange));
    setEvents(
      filterEvents(events, generateDateArray(selected || initialRange))
    );
    setSelectedDate(selected?.from || currentDate);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current || null,
  });

  return (
    <div>
      <Button size="sm" onClick={handlePrint}>
        Print
      </Button>
      <Popover>
        <PopoverTrigger>
          {/* <Button size="sm"> */}
          <CalendarDaysIcon className="mr-2 h-4 w-4" />
          {format(selectedDate, 'MMM d, yyyy')}
          {/* </Button> */}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            //@ts-ignore - onSelect is a prop of Calendar
            onSelect={(selected: { from: Date; to: Date } | undefined) =>
              handleSetRange(selected)
            }
            selected={selected}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
      <div>
        {dates.map((date, index) => (
          <PDF
            key={index}
            //@ts-ignore - filteredEvents is a prop of PDF
            events={updatedEvents}
            date={date}
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
