const getPeople = require('./script');
const fetch = require('node-fetch');

test('calls Swapi API to get peopl with a promise', () => {
 expect.assertions(1);
 return getPeople(fetch)
 .then(data => {
 expect(data.title).toContain("A New Hope");
 //expect(data.count).not.toEqual(69);
 })
})

test('testing captured calls', () => {
 const mock = jest.fn();
 let result = mock('foo');
 expect.assertions(3);
 expect(mock).toHaveBeenCalled();
 expect(mock).toHaveBeenCalledTimes(1);
 expect(mock).toHaveBeenCalledWith('foo');
})

test('mock return value', () => {
 const mock = jest.fn();
 mock.mockReturnValue("bar");
 expect.assertions(2);
 expect(mock("foo")).toBe("bar");
 expect(mock).toHaveBeenCalledWith("foo");
})

test('test get people with dependency injection', async () => { // added async keyword
    const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
      json: () => Promise.resolve({
        title: 'A New Hope',
        results: [0,1,2,3,4,5]
      })
    }))
    expect.assertions(2);
    await getPeople(mockFetch); // added await keyword
    expect(mockFetch).toBeCalled();
    expect(data.title).toContain("A New Hope"); // added assertion
})