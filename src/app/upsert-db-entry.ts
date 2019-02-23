import { RxJsonSchema } from 'rxdb';
import { from } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { getCollection } from './get-collection';

export const upsertDbEntry = <T>(entry: T, name: string, schema?: RxJsonSchema, dbName?: string) => {
    from(getCollection(name, schema, dbName))
        .pipe(
            tap(collection => collection.upsert(entry)),
            first()
        )
        .subscribe();
};
