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
} from './table';
import { BlankTable } from './BlankTable';

export default function PDF({ currentDate = new Date(), user, events, range }) {
  const [userEvents, setEvents] = useState(events);
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
    //   <div className="flex flex-col w-full h-dvh overflow-hidden"></div>
    <div className="grid grid-cols-2 gap-4">
      <div className="grid grid-cols-1">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Time</TableHead>
              <TableHead>Events</TableHead>
              <TableHead>{currentDate.toLocaleDateString()}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((value) => (
              <TableRow key={value[1]}>
                <TableCell className="text-gray-500 dark:text-gray-400 font-medium">
                  {`${value[0]} ${parseInt(value[1], 10) < 12 ? 'AM' : 'PM'}`}
                </TableCell>
                <TableCell>
                  <div className="grid grid-cols-2 gap-2">
                    {userEvents
                      .filter((event) => {
                        const eventStart = new Date(event.startAt);
                        const eventEnd = new Date(event.endAt);
                        const formattedEventDate = `${eventStart.getDate()}-${eventStart.getMonth()}-${eventStart.getFullYear()}`;
                        const formattedSelectedDate = `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`;

                        // Convert the time to the correct format
                        const eventHour = parseInt(value[1].split(':')[0]);
                        const eventMinute = parseInt(value[1].split(':')[1]);
                        const eventTime = new Date(eventStart);
                        eventTime.setHours(eventHour);
                        eventTime.setMinutes(eventMinute);
                        return (
                          eventTime >= eventStart &&
                          eventTime < eventEnd &&
                          formattedEventDate === formattedSelectedDate
                        );
                      })
                      .map((event) => (
                        <div
                          key={event.id}
                          className="bg-blue-500 text-white rounded-lg text-sm"
                          style={{ backgroundColor: event.color }}
                        >
                          {event.title}
                        </div>
                      ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="grid grid-cols-1">
        <BlankTable sectionName={'Kids'} />
        <BlankTable sectionName={'Notes'} />
      </div>
    </div>
  );
}
