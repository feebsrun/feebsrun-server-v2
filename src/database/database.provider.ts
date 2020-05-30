import * as mongoose from 'mongoose';

import { ConfigurationManager } from '../config/configuration.manager';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> => {
            const configurationManager = new ConfigurationManager();
            const dbServer = configurationManager.getValue('databaseServer');
            const dbName = configurationManager.getValue('databaseName');

            return await mongoose.connect(`mongodb://${dbServer}/${dbName}`, { useNewUrlParser: true, useFindAndModify: false })
        },
    },
];