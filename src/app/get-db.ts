import { RxDatabase } from 'rxdb';

import { createDb } from './create-db';

/**
 * creates the database
 */
export const getDb = <T>(name?: string) =>
    (async (db?: RxDatabase<any>) => {
        if (db) return db as RxDatabase<T>;
        if (!name) {
            throw new Error('Database does not exist and name was not provided');
        }
        const created = await createDb<T>(name);
        return (db = created);
    })();
