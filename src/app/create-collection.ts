import { RxCollection, RxJsonSchema } from 'rxdb';

import { getDb } from './get-db';

const collections: {
    [x: string]: RxCollection;
} = {};

/**
 * creates the database
 */
export const createCollection = async <TType, TOrmMethods, TStaticMethods>(
    name: string,
    schema: RxJsonSchema,
    dbName?: string
) => {
    const db = await getDb(dbName);
    return db.collection<TType, TOrmMethods, TStaticMethods>({
        name,
        schema,
    });
};
