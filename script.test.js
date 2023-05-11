const getPeople = require('./script')

test('calls Swapi API to get peopl with a promise', () => {
    expect.assertions(1);
    return getPeople()
        .then(data => {
            expect(data.title).toContain("A New Hope");
            //expect(data.count).not.toEqual(69);
        })
})

test('testing captured calls', () => {
    const mock = jest.fn();
    let result = mock('foo');
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('foo');
})

test('mock return value', () => {
    const mock = jest.fn(();
    mock.mockReturnValue("bar")
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
})