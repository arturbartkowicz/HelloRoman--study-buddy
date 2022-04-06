import { setupWorker } from 'msw';
import { handlers } from '.handers/index';

export const worker = setupWorker(...handlers);
