import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const file1 = '../frontend-project-46/__fixtures__/file1.json';
const file2 = '../frontend-project-46/__fixtures__/file2.json';
const expectedResult = `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`;

test('check differences', () => {
  expect(genDiff(file1, file2)).toEqual(expectedResult);
});
