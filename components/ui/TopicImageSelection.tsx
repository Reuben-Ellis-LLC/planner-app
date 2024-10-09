'use client';

import React, { useState } from 'react';
import { Button } from '#components/ui/button';
import Image from 'next/image';

const topics = [
  {
    id: 1,
    name: 'Events',
    image: '/events-screen.png',
    description: 'View all your events for the day and enter new ones.',
  },
  {
    id: 2,
    name: 'Task Entry',
    image: '/task-entry.png',
    description:
      'Simple and easy entry with weekly as the default. Weekly defaults to entering the event for 12 weeks.',
  },
  {
    id: 3,
    name: 'Date Range',
    image: '/date-range.png',
    description: 'Select as many days as you want to print.',
  },
  {
    id: 4,
    name: 'Print Preview',
    image: '/print-preview.png',
    description: 'View the print preview and print your planner.',
  },
];

export default function TopicImageSection() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  const handleTopicClick = (topic: any) => {
    setSelectedTopic(topic);
  };
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Enter it once and print it as many times as you need
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 space-y-4">
            {topics.map((topic) => (
              <Button
                key={topic.id}
                variant={selectedTopic.id === topic.id ? 'default' : 'outline'}
                className="w-full justify-start text-left"
                onClick={() => handleTopicClick(topic)}
              >
                {topic.name}
              </Button>
            ))}
          </div>
          <div className="w-full md:w-2/3">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={selectedTopic.image}
                alt={selectedTopic.name}
                sizes="(max-width: 170px), (max-width: 230px)"
                width="250"
                height="130"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-fit lg:order-last transition-opacity duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{selectedTopic.name}</h3>
            <p className="mt-2 text-gray-600">{selectedTopic.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
