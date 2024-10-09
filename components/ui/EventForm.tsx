import React from 'react';
import { DateTime } from 'luxon';
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
import { Label } from '#components/ui/label';
import { Input } from '#components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '#components/ui/select';
import { CirclePicker } from 'react-color';

export const EventForm = ({
  isAddEventModalOpen,
  setIsAddEventModalOpen,
  newEvent,
  setNewEvent,
  handleAddEvent,
}: any) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={isAddEventModalOpen} onOpenChange={setIsAddEventModalOpen}>
      <DialogTrigger>
        <div onClick={() => setIsAddEventModalOpen(true)}>Add Event</div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Event</DialogTitle>
          <DialogDescription>
            Fill out the details for your new event.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="start" className="text-right">
              Start
            </Label>
            <Input
              id="start"
              type="datetime-local"
              value={newEvent.startAt}
              onChange={(e) =>
                setNewEvent({
                  ...newEvent,
                  startAt: DateTime.fromISO(e.target.value, {
                    zone: 'UTC',
                  }).toFormat('yyyy-MM-dd T'),
                  endAt: DateTime.fromISO(e.target.value, { zone: 'UTC' })
                    .plus({ hours: 2 })
                    .toFormat('yyyy-MM-dd T'),
                })
              }
              className="col-span-3"
            />
            {/* <input
                    type="hidden"
                    id="timezone"
                    name="timezone"
                    value="-06:00"
                  /> */}
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="end" className="text-right">
              End
            </Label>
            <Input
              id="end"
              type="datetime-local"
              value={newEvent.endAt}
              onChange={(e) =>
                setNewEvent({
                  ...newEvent,
                  endAt: DateTime.fromISO(e.target.value, {
                    zone: 'UTC',
                  }).toFormat('yyyy-MM-dd T'),
                })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="recurrence" className="text-right">
              Recurrence
            </Label>
            <Select
              value={newEvent.recurrence}
              onValueChange={(value) =>
                setNewEvent({ ...newEvent, recurrence: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select recurrence" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="color" className="text-right">
              Color
            </Label>
            <CirclePicker
              colors={[
                '#f44336',
                '#9c27b0',
                '#2196f3',
                '#4caf50',
                '#ffeb3b',
                '#ffc107',
                '#ff9800',
                '#795548',
              ]}
              onChangeComplete={(value: any) =>
                setNewEvent({ ...newEvent, color: value.hex })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setIsAddEventModalOpen(false)}
          >
            Cancel
          </Button>
          <Button onClick={handleAddEvent}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
