import { executeWorkerAction } from './app/main';

executeWorkerAction().then(x => console.log('main', x))
