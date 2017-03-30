import { ImmutableObject } from './immutable-object';

describe('ImmutableObject', () => {
    it('create a ImmutableObject', ()=> {
        let obj = new ImmutableObject({});
        expect(obj).toBeTruthy();
    });

    it('assign same data does not change reference', ()=> {
        let obj = new ImmutableObject({
            hello: 'world',
            count: 1
        });
        let newObj = obj.assign({
            hello: 'world',
            count: 1
        });
        expect(obj === newObj).toBe(true);
    });

    it('assign different data change reference', ()=> {
        let obj = new ImmutableObject({
            hello: 'world',
            count: 1
        });
        let newObj = obj.assign({
            hello: 'world',
            count: 2
        });
        expect(obj === newObj).toBe(false);
    });
});