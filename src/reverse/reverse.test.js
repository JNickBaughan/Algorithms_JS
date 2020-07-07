const reverse = require("./reverse")

test('test builtInReverse', () => {
    expect(reverse.builtInReverse("racecar")).toBe('racecar');
});

test('test reduceReverse', () => {
    expect(reverse.reduceReverse("racecar")).toBe('racecar');
});

test('test loopReverse', () => {
    expect(reverse.loopReverse("racecar")).toBe('racecar');
});