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

export const RubyKidsTable = ({ sectionName, isLargePlanner = false }: any) => (
  <div className="overflow-x-auto mt-3">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">{sectionName}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Miacademy</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">School books</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Bob books</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Handwriting</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Reading</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Family reading</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">ETC</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Piano</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Voice</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Gym</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">Chore</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <input type="checkbox" />
            <span className="pl-1">What I did good:</span>
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
            <span className="pl-1">What I want to work on:</span>
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
            <span className="pl-1">I am grateful for:</span>
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
        {isLargePlanner && (
          <>
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
          </>
        )}
      </TableBody>
    </Table>
  </div>
);
