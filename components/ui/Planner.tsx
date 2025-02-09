/**
 * v0 by Vercel.
 * @see https://v0.dev/t/D8PjgC94xmy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client';

import React, { useState } from 'react';
import NextLink from 'next/link';
import { format } from 'date-fns';
import { DateTime } from 'luxon';
import { AlertDialog } from '#components/ui/AlertDialog';
import { Button } from '#components/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '#components/ui/popover';
import { Calendar } from '#components/ui/Calendar';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '#components/ui/table';
import { EventForm } from '#components/ui/EventForm';
import { createEvent, updateEvent, deleteEvent } from '#app/actions/events';

type User = {
  sessionId: string;
  user: {
    object: string;
    id: string;
    email: string;
    emailVerified: boolean;
    firstName: string;
    profilePictureUrl: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
  };
  accessToken: string;
};

type Event = {
  id?: string;
  title: string;
  startAt: string;
  endAt: string;
  userId: string;
  user?: { email: string };
  recurrence?: string;
  daysOfWeek?: [];
  daysOfMonth?: [];
  color?: string;
};

const dt = DateTime.now();

export default function Planner({
  currentDate = new Date(Date.now()),
  user,
  events,
}: {
  currentDate: Date;
  user: User;
  events: Event[];
}) {
  const [userEvents, setEvents] = useState<Event[]>(events);

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
  const [newEvent, setNewEvent] = useState<Event>({
    id: '',
    title: '',
    startAt: DateTime.fromISO(dt.toISO(), {
      zone: 'UTC',
    }).toFormat('yyyy-MM-dd T'),
    endAt: DateTime.fromISO(dt.toISO(), {
      zone: 'UTC',
    })
      .plus({ hours: 1 })
      .toFormat('yyyy-MM-dd T'),
    recurrence: 'weekly',
    daysOfWeek: [],
    daysOfMonth: [],
    userId: user?.user.id,
    user: { email: user?.user.email },
    color: '#2196f3',
  });

  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleAddEvent = async () => {
    setEvents([...userEvents, newEvent]);
    console.log('newEvent', newEvent);
    setNewEvent({
      title: newEvent.title,
      startAt: newEvent.startAt,
      endAt: newEvent.endAt,
      recurrence: newEvent.recurrence,
      daysOfWeek: [],
      daysOfMonth: [],
      userId: user?.user.id,
      color: newEvent.color,
    });
    // await createEvent(newEvent, user.user);
    setIsAddEventModalOpen(false);
  };
  // TODO: Add delete event functionality
  const handleDeleteEvent = async (id: string) => {
    if (!id) return;
    setEvents(userEvents.filter((event) => event.id !== id));
    await deleteEvent(id);
    setOpen(false);
  };
  // const handleDeleteEvent = (id: string) => {
  //   setEvents(events.filter((event) => event.id !== id));
  // };
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <NextLink href="/">Home</NextLink>
        </h1>
        <div className="flex items-center gap-4">
          <NextLink href="/print">Print</NextLink>
          <Popover>
            <PopoverTrigger>
              <Button size="sm">
                <CalendarDaysIcon className="mr-2 h-4 w-4" />
                {format(selectedDate, 'MMM d, yyyy')}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateChange}
                required={true}
              />
            </PopoverContent>
          </Popover>
          <EventForm
            isAddEventModalOpen={isAddEventModalOpen}
            setIsAddEventModalOpen={setIsAddEventModalOpen}
            newEvent={newEvent}
            setNewEvent={setNewEvent}
            handleAddEvent={handleAddEvent}
          />
        </div>
      </header>
      <div className="flex-1">
        <Table className="text-xs">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Time</TableHead>
              <TableHead>Events</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((value) => (
              <TableRow key={value[1]}>
                <TableCell className="text-gray-500 dark:text-gray-400 font-medium text-xs">
                  {`${value[0]} ${parseInt(value[1], 10) < 12 ? 'AM' : 'PM'}`}
                </TableCell>
                <TableCell>
                  <div className="grid grid-cols-1">
                    {userEvents
                      .filter((event) => {
                        const eventStart = new Date(event.startAt);
                        const eventStartTime = `${eventStart.getHours()}:${
                          eventStart.getMinutes() === 30
                            ? eventStart.getMinutes()
                            : eventStart.getMinutes() + '0'
                        }`;
                        const eventEnd = new Date(event.endAt);
                        const formattedEventDate = `${eventStart.getDate()}-${eventStart.getMonth()}-${eventStart.getFullYear()}`;
                        const formattedSelectedDate = `${selectedDate.getDate()}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}`;

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
                      .map((event, id) => (
                        <AlertDialog
                          key={id}
                          event={event}
                          open={open}
                          setOpen={setOpen}
                          title={'Are you sure you want to delete this event?'}
                          description={`This action cannot be undone. This will
                                permanently delete your event.`}
                          handleDeleteEvent={handleDeleteEvent}
                        />
                      ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

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
