const functions = require('./functions')

test('is defined', () => {
    expect(functions.getAge("Rudi", 35)).toBeDefined();
})

test('2 + 2 is equal to 4', () => {
    expect(functions.addNum(2, 2)).toEqual(4);
})

/* Matcher testing
toBeNull
toBeUndefined
toBeDefined
toBeTruthy
toBeFalsy
toBeGreaterThan
toBeGreaterThanOrEqual
toBeLessThan
toBeLessThanOrEqual
toMatch
toContain
toEqual
toHaveLength
toMatchObject
toHaveProperty
toMatchSnapshot
toThrow
toThrowError
toStrictEqual
*/

test('contains string', () => {
    expect(functions.myStringCapitalised("this is a test!")).toContain("TEST");
})

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
})

test('is null', () => {
    expect(functions.isNull()).toBeNull();
    //expect(functions.isNull()).toBeFalsy();
})

test('is undefined', () => {
    expect(functions.isUndefined()).toBeUndefined();
    //expect(functions.isUndefined()).toBeFalsy();
})

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
})