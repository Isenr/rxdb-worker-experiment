import { RxCollection, RxJsonSchema } from 'rxdb';

import { createCollection } from './create-collection';

const collections: {
    [x: string]: Promise<RxCollection>;
} = {};

/**
 * creates the database
 */
export const getCollection = <TType, TOrmMethods, TStaticMethods>(
    name: string,
    schema?: RxJsonSchema,
    dbName?: string
) => {
    if (collections[name]) {
        return collections[name] as Promise<RxCollection<TType, TOrmMethods, TStaticMethods>>;
    }
    if (!schema) {
        throw new Error('Collection does not exist and schema was not provided');
    }
    return (collections[name] = createCollection<TType, TOrmMethods, TStaticMethods>(
        name,
        schema,
        dbName
    ));
};
