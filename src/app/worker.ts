import { worker } from 'workerpool';

import { upsertDbEntry } from './upsert-db-entry';
import { createRandomDataFile } from './random-data';

worker({
    createRandomDataFile,
    upsertDbEntry,
});
