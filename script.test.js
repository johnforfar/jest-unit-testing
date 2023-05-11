const {getPeople, isCity} = require('./script');
const fetch = require('node-fetch');

test('calls Swapi API to get peopl with a promise', async () => {
    expect.assertions(1);
    const data = await getPeople(fetch);
    expect(data.title).toContain("A New Hope");
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

test('test get people with dependency injection', async () => {
    const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
      json: () => Promise.resolve({
        title: 'A New Hope',
        results: [0,1,2,3,4,5]
      })
    }))
    expect.assertions(3);
    const data = await getPeople(mockFetch);
    expect(mockFetch).toBeCalled();
    expect(mockFetch).toBeCalledWith('https://swapi.dev/api/films/1/');
    expect(data.title).toContain("A New Hope");
})

let db = [];
const initDB = () => db = ['Sydney', 'Vienna', 'New York'];
const closeDB = () => db = [];
beforeEach(() => initDB());
afterEach(() => closeDB());
//beforeAll(() => initDB());
//afterAll(() => closeDB());

test('city database has Vienna', () => {
    expect(isCity('Vienna', db)).toBeTruthy();
})