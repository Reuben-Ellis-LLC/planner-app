'use client';
import React, { useState, useRef } from 'react';
import NextLink from 'next/link';
import { useReactToPrint } from 'react-to-print';
import { LucidePrinter } from 'lucide-react';
import { addDays, format } from 'date-fns';
import { Calendar } from '#components/ui/Calendar';
import ReusablePDF from '#components/ui/ReusablePDF';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '#components/ui/popover';
import { Button } from '#components/ui/button';
import { MonthlyCalendar } from '#components/ui/MonthlyCalendar';
import { CustomQuestsTable } from './CustomQuestsTable';
import { AlexKidsTable } from './AlexKidsTable';
import { RubyKidsTable } from './RubyKidsTable';
import Image from 'next/image';

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
          `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}` &&
        `${event.recurrence}` === 'weekly'
      );
    });
  });
}

const getMonthsBetweenDates = (startDate: Date, endDate: Date) => {
  const months = [];
  let currentDate = new Date(startDate);

  // Normalize the dates to the first of each month
  currentDate.setDate(1);
  const normalizedEndDate = new Date(endDate);
  normalizedEndDate.setDate(1);

  while (currentDate <= normalizedEndDate) {
    months.push(new Date(currentDate));
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return months;
};

const SimplifiedPlanner = ({
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

  const [selected, setSelected] = useState<{ from: Date; to: Date }>({
    from: new Date(),
    to: addDays(new Date(), 6),
  });
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [dates, setDates] = useState(
    generateDateArray(selected || initialRange)
  );
  const [updatedEvents, setEvents] = useState(filterEvents(events, dates));

  const handleSetRange = (selected: { from: Date; to: Date }) => {
    setSelected(selected);
    setDates(generateDateArray(selected || initialRange));
    setEvents(
      filterEvents(events, generateDateArray(selected || initialRange))
    );
    setSelectedDate(selected?.from || currentDate);
  };

  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({ contentRef });
  const months = getMonthsBetweenDates(selected.from, selected.to);

  const kidsEvents = updatedEvents.filter((event: Event) => {
    return event.title.includes('Ruby') || event.title.includes('Alex');
  });

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <NextLink href="/">Home</NextLink>
        </h1>
        <div className="flex items-center gap-4">
          <NextLink href="/events">Events</NextLink>
          <Button
            size="sm"
            className="cursor-pointer"
            onClick={() => handlePrint()}
          >
            <LucidePrinter className="h-4 w-4" />
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
                //@ts-ignore - onSelect is a prop of Calendar
                onSelect={(selected: { from: Date; to: Date }) =>
                  handleSetRange(selected)
                }
                selected={selected}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </header>
      <div ref={contentRef}>
        <div className="simplified-planner-page">
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-1">
              <h1
                className="text-9xl text-center m-auto"
                style={{ transform: 'translateY(200px)' }}
              >
                Alex's Planner
              </h1>
            </div>
            <div className="grid grid-cols-1">
              <h1
                className="text-9xl text-center m-auto"
                style={{ transform: 'translateY(200px)' }}
              >
                Ruby's Planner
              </h1>
            </div>
          </div>
        </div>
        {dates.map((date, index) => (
          <div className="simplified-planner-page">
            <div className="grid grid-cols-2">
              <div className="grid grid-cols-1">
                <AlexKidsTable sectionName={''} />
                {/* <CustomQuestsTable sectionName={'Quests'} /> */}
              </div>
              <div className="grid grid-cols-1">
                <RubyKidsTable sectionName={''} />
                {/* <CustomQuestsTable sectionName={'Quests'} /> */}
              </div>
            </div>
          </div>
        ))}
        {/* <div className="simplified-planner-page grid grid-cols-2">
          <Image
            className="grid grid-cols-1"
            src="/october-2024.png"
            alt="october 2024 calendar"
            width={600}
            height={850}
          />
          <Image
            className="grid grid-cols-1"
            src="/november-2024.png"
            alt="november 2024 calendar"
            width={600}
            height={850}
          />
          <Image
            className="grid grid-cols-1"
            src="/december-2024.png"
            alt="december 2024 calendar"
            width={600}
            height={850}
          /> */}
        {/* {months.map((date, index) => (
          <div className="simplified-planner-page">
            <div className="grid grid-cols-2">
              <div className="grid grid-cols-1">
                <MonthlyCalendar
                  key={index}
                  currentDate={date}
                  events={kidsEvents}
                />
              </div>
              <div className="grid grid-cols-1">
                <MonthlyCalendar
                  key={index}
                  currentDate={date}
                  events={kidsEvents}
                />
              </div>
            </div>
          </div>
        ))} */}
        <div className="simplified-planner-page grid grid-cols-2">
          <Image
            className="grid grid-cols-1"
            src="/october-2024.png"
            alt="october 2024 calendar"
            width={1050}
            height={850}
          />
          <Image
            className="grid grid-cols-1"
            src="/october-2024.png"
            alt="october 2024 calendar"
            width={1050}
            height={850}
          />
        </div>
        <div className="simplified-planner-page grid grid-cols-2">
          <Image
            className="grid grid-cols-1"
            src="/november-2024.png"
            alt="november 2024 calendar"
            width={1050}
            height={850}
          />

          <Image
            className="grid grid-cols-1"
            src="/november-2024.png"
            alt="november 2024 calendar"
            width={1050}
            height={850}
          />
        </div>
        <div className="simplified-planner-page grid grid-cols-2">
          <Image
            className="grid grid-cols-1"
            src="/december-2024.png"
            alt="december 2024 calendar"
            width={1050}
            height={850}
          />
          <Image
            className="grid grid-cols-1"
            src="/december-2024.png"
            alt="december 2024 calendar"
            width={1050}
            height={850}
          />
        </div>
      </div>
      <style jsx global>{`
        @media print and (orientation: landscape) {
          @page {
            margin: 0;
            margin-left: 0.3cm;
          }
          body {
            margin: 0;
            margin-left: 0.3cm;
          }
          .simplified-planner-page {
            page-break-after: always;
            height: 100vh;
            box-sizing: border-box;
            padding-top: 1cm;
            padding-bottom: 1cm;
            padding-left: 1px;
            padding-right: 1px;
            border: none !important;
          }
          .simplified-planner-page:last-child {
            page-break-after: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default SimplifiedPlanner;

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
