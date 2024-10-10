import React from 'react';
import { Button } from './button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '#components/ui/dialog';

export const AlertDialog = ({
  event,
  open,
  setOpen,
  title,
  description,
  handleDeleteEvent,
}: any) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div
          key={event.id}
          className="bg-blue-500 text-white rounded-lg p-1 text-xs"
          style={{ backgroundColor: event.color }}
          onClick={() => setOpen(true)}
        >
          {event.title}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            className="cursor-pointer"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="cursor-pointer"
            onClick={() => event.id && handleDeleteEvent(event.id)}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
