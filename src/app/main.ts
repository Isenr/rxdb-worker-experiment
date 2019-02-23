import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { pool, WorkerPool } from 'workerpool';

import { getCollection } from './get-collection';
import { schema } from './schema';

const workerpool = (pool('/worker.js') as unknown) as Pick<
    WorkerPool,
    Exclude<keyof WorkerPool, 'exec'>
> & {
    exec<T>(method: ((...args: any[]) => any) | string, params: any[] | null): T;
};

export function executeWorkerAction(): Promise<string> {
    const dbArgs: [string, typeof schema, string] = ['heroes', schema, 'reactivedatabase'];

    from(getCollection(...dbArgs))
        .pipe(switchMap(collection => collection.insert$))
        .subscribe(x => console.log('main', x));

    return workerpool.exec('upsertDbEntry', [
        {
            color: 'blue',
            hp: 100,
            maxHP: 500,
            name: 'name',
            skills: [],
        },
        ...dbArgs,
    ]);
}
