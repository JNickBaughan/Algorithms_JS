const sort = require("./sort")

test('test bubbleSort ascending by default', () => {
    expect(sort.bubbleSort([2,7,4,1,5,3])).toStrictEqual([1,2,3,4,5,7]);
});

test('test bubbleSort ascending', () => {
    expect(sort.bubbleSort([2,7,4,1,5,3], sort.sortDirection.ascd)).toStrictEqual([1,2,3,4,5,7]);
});

test('test bubbleSort descending', () => {
    expect(sort.bubbleSort([2,7,4,1,5,3], sort.sortDirection.dscd)).toStrictEqual([7,5,4,3,2,1]);
});

