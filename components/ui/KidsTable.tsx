import '@radix-ui/themes/styles.css';
import React from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from './table';

export const KidsTable = ({ sectionName }: any) => (
  <div className="overflow-x-auto mt-3">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">{'Alex'}</TableHead>
          <TableHead className="w-[100px]">{'Ruby'}</TableHead>
          <TableHead className="w-[100px]">{'Enzo'}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Miacademy</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Miacademy</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">School</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">School books</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">School books</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">School</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Duolingo</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Bob books</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Craft</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Handwriting</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Handwriting</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Activity</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Personal reading</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Personal reading</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Gym</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Family reading</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Family reading</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Chore</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Fiddle</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">ETC</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Piano</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Piano</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Voice</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Voice</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Gym</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Gym</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Chore</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Chore</span>
          </TableCell>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);
