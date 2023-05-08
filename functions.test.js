const functions = require('./functions')

test('is defined', () => {
    expect(functions.getAge("Rudi", 35)).toBeDefined();
})

test('2 + 2 is equal to 4', () => {
    expect(functions.addNum(2, 2)).toEqual(4);
})

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
})

test('is null', () => {
    expect(functions.isNull()).toBeNull();
})

test('is undefined', () => {
    expect(functions.isUndefined()).toBeUndefined();
})