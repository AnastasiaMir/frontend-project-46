import genDiff from 'index.js';
import { test, expect } from '@jest/globals';



const file1 = '../__fixtures__/file1.json'
const file2 = '../__fixtures__/file2.json'
const expectedResult = "{ - follow: false host: hexlet.io - proxy: 123.234.53.22 - timeout: 50 + timeout: 20 + verbose: true }"
console.log(genDiff(file1, file2))
test('check differences', () => {
    expect(genDiff(file1, file2)).toEqual(expectedResult)
  });