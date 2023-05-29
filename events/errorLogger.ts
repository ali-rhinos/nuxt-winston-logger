import { createLogger, format, transports } from 'winston'
import { resolve } from 'path'
const { combine, timestamp, label, prettyPrint } = format;

export const logger = createLogger({
  level: 'error',
  format: combine(
    timestamp(),
    prettyPrint()
  ),
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