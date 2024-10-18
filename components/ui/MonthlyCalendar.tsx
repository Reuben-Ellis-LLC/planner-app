import React from 'react';

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

function compare(a: Event, b: Event) {
  if (a.endAt < b.endAt) return -1;
  if (a.endAt > b.endAt) return 1;
  return 0;
}

export const MonthlyCalendar = ({
  currentDate,
  events,
}: {
  currentDate: Date;
  events: Event[];
}) => {
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  events.sort(compare);

  const renderCalendarDays = () => {
    const days = [];
    // @ts-ignore - filter is a default JavaScript array function
    const monthEvents = events.filter((event: Event) => {
      const eventDate = new Date(event.startAt);
      return (
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear()
      );
    });

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="p-1 border border-gray-200"></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const dayEvents = monthEvents.filter(
        (event: Event) => new Date(event.startAt).getDate() === day
      );

      days.push(
        <div
          key={day}
          className="p-1 border border-gray-200 min-h-[100px] overflow-y-auto"
        >
          <div className="font-bold">{day}</div>
          {dayEvents.map((event: Event, index: number) => (
            <div
              key={index}
              className=" bg-blue-100 text-white p-1 mt-1 rounded"
              style={{
                fontSize: '.55rem',
                lineHeight: '12px',
                backgroundColor: event.color,
              }}
            >
              {event.title}
            </div>
          ))}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">
        {currentDate.toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        })}
      </h2>
      <div className="grid grid-cols-7 gap-1 font-bold mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
    </div>
  );
};
