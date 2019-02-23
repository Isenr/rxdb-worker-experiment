import * as PouchdbAdapterIdb from 'pouchdb-adapter-idb';
import { create, plugin } from 'rxdb';

/**
 * creates the database
 */
export const createDb = <T>(name = 'mydb') => {
    plugin(PouchdbAdapterIdb);

    return create<T>({
        adapter: 'idb',
        multiInstance: true,
        name,
        queryChangeDetection: true,
    });
};
