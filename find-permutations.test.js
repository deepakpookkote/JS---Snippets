const { helper, findPermutations, swapArrayElements } = require('./find-permutations')


test('sub array should contain array elements from main array', () => {
    expect(findPermutations).toEqual(
        expect.arrayContaining([]).toEqual([])
    )
})
