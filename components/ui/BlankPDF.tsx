/**
 * v0 by Vercel.
 * @see https://v0.dev/t/D8PjgC94xmy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client';

import React, { useState } from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '#components/ui/table';
import { CustomQuestsTable } from './CustomQuestsTable';

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

export default function BlankPDF({
  date = new Date(),
  events,
}: {
  date: Date;
  events: Event;
}) {
  const [userEvents, setEvents] = useState(events);
  //@ts-ignore - userEvents is an array of events so sort is always available
  //because it is a javascript array function
  // userEvents.sort(compare);

  let data = [
    ['7:00', '7:00'],
    ['7:30', '7:30'],
    ['8:00', '8:00'],
    ['8:30', '8:30'],
    ['9:00', '9:00'],
    ['9:30', '9:30'],
    ['10:00', '10:00'],
    ['10:30', '10:30'],
    ['11:00', '11:00'],
    ['11:30', '11:30'],
    ['12:00', '12:00'],
    ['12:30', '12:30'],
    ['1:00', '13:00'],
    ['1:30', '13:30'],
    ['2:00', '14:00'],
    ['2:30', '14:30'],
    ['3:00', '15:00'],
    ['3:30', '15:30'],
    ['4:00', '16:00'],
    ['4:30', '16:30'],
    ['5:00', '17:00'],
    ['5:30', '17:30'],
    ['6:00', '18:00'],
    ['6:30', '18:30'],
    ['7:00', '19:00'],
    ['7:30', '19:30'],
    ['8:00', '20:00'],
  ];
  return (
    <div className="planner-page">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-cols-1">
          <Table className="text-xs">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[75px] text-xl">
                  <span style={{ letterSpacing: '2rem' }}>M</span>
                  <span style={{ letterSpacing: '2rem' }}>T</span>
                  <span style={{ letterSpacing: '2rem' }}>W</span>
                  <span>TH</span>
                  <span className="pl-8" style={{ letterSpacing: '2rem' }}>
                    F
                  </span>
                  <span style={{ letterSpacing: '2rem' }}>S</span>
                  <span style={{ letterSpacing: '2rem' }}>S</span>
                </TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((value) => (
                <TableRow key={value[1]}>
                  <TableCell className="text-gray-500 dark:text-gray-400 font-medium text-xs w-[75px]">
                    {`${value[0]} ${parseInt(value[1], 10) < 12 ? 'AM' : 'PM'}`}
                  </TableCell>
                  <TableCell>
                    <div>
                      {userEvents
                        //@ts-ignore - filter is a javascript array function
                        .filter((event: Event) => {
                          const eventStart = event.startAt;
                          const eventStartTime = `${event.startAt.getHours()}:${
                            event.startAt.getMinutes() === 30
                              ? event.startAt.getMinutes()
                              : event.startAt.getMinutes() + '0'
                          }`;
                          const formattedEventDate = `${eventStart.getDate()}-${eventStart.getMonth()}-${eventStart.getFullYear()}`;
                          const formattedSelectedDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

                          // Convert the time to the correct format
                          const eventHour = parseInt(value[1]?.split(':')[0]);
                          const eventMinute = parseInt(value[1]?.split(':')[1]);
                          const plannerCellTime = `${eventHour}:${
                            eventMinute === 30 ? eventMinute : eventMinute + '0'
                          }`;
                          return (
                            eventStartTime === plannerCellTime &&
                            // eventTime < eventEnd &&
                            formattedEventDate === formattedSelectedDate
                          );
                        })
                        .map((event: Event) => {
                          return (
                            <div
                              key={event.id}
                              className="bg-blue-500 text-white rounded-lg p-1 text-xs"
                              style={{ backgroundColor: event.color }}
                            >
                              {event.title}
                            </div>
                          );
                        })}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {/* <TableRow>
                <TableCell>
                  
                </TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
          <div className="flex justify-around">
            <span className="mt-4">{'Water:'}</span>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <CustomQuestsTable sectionName={'Quests'} />
        </div>
      </div>
      <div className="grid grid-cols-3 mt-6">
        <div className="grid grid-cols-1">Breakfast: ____________________</div>
        <div className="grid grid-cols-1">Lunch: ____________________</div>
        <div className="grid grid-cols-1">Dinner: ____________________</div>
      </div>
    </div>
  );
}
