import { createLogger, format, transports } from 'winston'
import { resolve } from 'path'

export const logger = createLogger({
  level: 'error',
  format: format.json(),
  transports: [
    new transports.File({
      filename: resolve(process.cwd(), 'error.log'),
    }),
  ],
});

// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new transports.Console({
//     format: format.simple(),
//   }));
// }