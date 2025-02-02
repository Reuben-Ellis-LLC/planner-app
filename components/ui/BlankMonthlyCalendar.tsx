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

export const BlankMonthlyCalendar = () => {
  const daysInMonth = 34;
  const firstDayOfMonth = 1;

  const currentDate = new Date();

  const renderCalendarDays = () => {
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="p-1 border border-gray-200"></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={day}
          className="p-1 border border-gray-200 min-h-[100px] overflow-y-auto"
        >
          <div className="font-bold"></div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Monthly Planner</h2>
      <div className="grid grid-cols-7 gap-1 font-bold mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
      <h2 className="pt-4 pb-2 text-center">Notes</h2>
      <div
        className="border-b-2 border-solid h-8"
        style={{ borderColor: '214.3 31.8% 91.4%' }}
      />
      <div
        className="border-b-2 border-solid h-8"
        style={{ borderColor: '214.3 31.8% 91.4%' }}
      />{' '}
      <div
        className="border-b-2 border-solid h-8"
        style={{ borderColor: '214.3 31.8% 91.4%' }}
      />{' '}
      <div
        className="border-b-2 border-solid h-8"
        style={{ borderColor: '214.3 31.8% 91.4%' }}
      />{' '}
      <div
        className="border-b-2 border-solid h-8"
        style={{ borderColor: '214.3 31.8% 91.4%' }}
      />{' '}
      <div
        className="border-b-2 border-solid h-8"
        style={{ borderColor: '214.3 31.8% 91.4%' }}
      />{' '}
      <div
        className="border-b-2 border-solid h-8"
        style={{ borderColor: '214.3 31.8% 91.4%' }}
      />
      <div
        className="border-b-2 border-solid h-8"
        style={{ borderColor: '214.3 31.8% 91.4%' }}
      />
      <div
        className="border-b-2 border-solid h-8"
        style={{ borderColor: '214.3 31.8% 91.4%' }}
      />
      <div
        className="border-b-2 border-solid h-8"
        style={{ borderColor: '214.3 31.8% 91.4%' }}
      />
      <div
        className="border-b-2 border-solid h-8"
        style={{ borderColor: '214.3 31.8% 91.4%' }}
      />
      <div
        className="border-b-2 border-solid h-8"
        style={{ borderColor: '214.3 31.8% 91.4%' }}
      />
      <div
        className="border-b-2 border-solid h-8"
        style={{ borderColor: '214.3 31.8% 91.4%' }}
      />
    </div>
  );
};
