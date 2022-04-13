import { rest } from 'msw';
import { students } from '../data/students';
import { groups } from '../data/groups';

export const handlers = [
  rest.get('/students', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ students: students }));
  }),
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups: groups }));
  }),
  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group) {
      const matchingStudents = students.filter((student) => student.group === req.params.group);
      return res(ctx.status(200), ctx.json({ students: matchingStudents }));
    }

    return res(ctx.status(200), ctx.json({ students: students }));
  }),
];
