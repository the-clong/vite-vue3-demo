import { testSelf } from './test';

@testSelf(false)
export default class MyTestableClass {
    aaa: number;

    constructor() {
        this.aaa = 1;
    }
    congratulationMe() {
        console.log('origin-----');
    }
    // ...
}