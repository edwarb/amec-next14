import { Menu, Transition } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Fragment, useState, useEffect } from 'react';

const days = [
  { date: '2024-06-01' }, { date: '2024-06-02' }, { date: '2024-06-03' },
  // ... Add the rest of the days for the month
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Calendar({ selectedDate, onDateChange }: { selectedDate: string; onDateChange: (date: string) => void; }) {
  const [currentMonth, setCurrentMonth] = useState<string>('2024-06'); // Set initial month

  const handleDateClick = (date: string) => {
    onDateChange(date);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        {selectedDate}
      </Menu.Button>
      <Transition as={Fragment}>
        <Menu.Items className="absolute z-10 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex items-center justify-between px-4 py-2">
            <button type="button" className="flex items-center justify-center rounded-full text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500">
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <span className="font-semibold">June 2024</span>
            <button type="button" className="flex items-center justify-center rounded-full text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500">
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-px">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
              <div key={idx} className="text-center text-xs leading-6 text-gray-500">{day}</div>
            ))}
            {days.map((day, dayIdx) => (
              <button
                key={day.date}
                type="button"
                className={classNames(
                  'py-1.5 text-center hover:bg-gray-100 focus:z-10',
                  day.date === selectedDate ? 'bg-indigo-600 text-white' : 'text-gray-900',
                )}
                onClick={() => handleDateClick(day.date)}
              >
                {day.date.split('-').pop()}
              </button>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
