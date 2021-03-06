/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const numbers = require('../src/numbers');

/*
  A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#numbers', () => {
  it('should return an array and return if it has only numbers or not', () => {
    assert.strictEqual(numbers([3, 4, 5]), true);
    assert.strictEqual(numbers([1, 2, 3, '4', 5]), false);
    assert.strictEqual(numbers([0, 0, 0, 0, 0, 0, 0]), true);
    assert.strictEqual(numbers([1, 2, '3']), false);
    assert.strictEqual(numbers([1, 2, 3]), true);
    assert.strictEqual(numbers([0, 0, 0, 0, 0, 0, 1]), true);
    assert.strictEqual(numbers([]), true);
    assert.strictEqual(numbers([' ']), false);
    assert.strictEqual(numbers(['um', 'dois', 'tres']), false);
    assert.strictEqual(numbers([47, 63, 122]), true);
    assert.strictEqual(numbers([-11, 2, 5]), true);
    assert.strictEqual(numbers([-11, -5, 2]), true);
    // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
    // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
    // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
    // Escreva um teste em que a função recebe [' '] e retorna false
  });
});
