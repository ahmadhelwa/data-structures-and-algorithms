'use strict';

const insertionSort = require('../index');

describe('Test insertionSort function', () => {
    it('insertionSort ', () => {
        let array = [10, -20, 0, 1, 2, 3, 100, 4];
        expect(insertionSort(array)).toEqual([-20, 0, 1, 2, 3, 4, 10, 100]);
    });
});