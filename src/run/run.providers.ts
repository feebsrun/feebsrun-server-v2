import { Connection } from 'mongoose';
import { RunSchema } from './schemas/run.schemas';

export const runProviders = [
    {
        provide: 'RUN_MODEL',
        useFactory: (connection: Connection) => connection.model('Run', RunSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];