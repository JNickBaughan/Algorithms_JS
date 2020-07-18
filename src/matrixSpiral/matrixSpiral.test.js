const matrixSpiral= require("./matrixSpiral")

test('test matrixSpiral - 3x3 matrix', () => {
    const expected = [[1,2,3], 
                      [8,9,4],
                      [7,6,5]]
    const actual = matrixSpiral.matrixSpiral(3)
    expect(expected).toEqual(actual);
});

test('test matrixSpiral - 4x4 matrix', () => {
    const expected = [
                      [1,2,3,4], 
                      [12,13,14,5],
                      [11,16,15,6],
                      [10,9,8,7]
                    ]
    const actual = matrixSpiral.matrixSpiral(4)
    expect(expected).toEqual(actual);
});