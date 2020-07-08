const relativeSort = require('./relative-sort')

test('relative sort should return', () => {
   expect(
       relativeSort([1, 2, 3, 4, 7, 16]))
       .toStrictEqual([1, 3, 7, 2, 4, 16])
});

test('relative array should be equal to original array', () => {
    const array = [1, 2, 3, 4, 7, 16]
    expect(
        relativeSort(array)).not.toEqual(array)
 });