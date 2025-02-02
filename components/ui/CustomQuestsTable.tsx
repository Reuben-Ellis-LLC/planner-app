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

export const CustomQuestsTable = ({ sectionName }: any) => (
  <div className="overflow-x-auto">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center text-sm">
            {sectionName}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span className="pl-1 text-sm">What I am grateful for:</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="h-8"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="h-8"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="h-8"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="h-8"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="h-8"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="h-8"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="h-8"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="h-8"></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);
