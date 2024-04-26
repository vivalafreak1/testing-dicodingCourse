export default function detectTriangle(a, b, c) {
  // TODO: Implement this function
  [a, b, c] = [a, b, c].sort((x, y) => x - y);


  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error('Input must be a number');
  }

  if (a <= 0) {
    throw new Error('Input must be a positive number');
  }

  if (a + b <= c) {
    throw new Error('Input must be a triangle inequality violation');
  }

  if(a === b && b === c) {
    return 'Segitiga Sama Sisi';
  }

  if(a === b || b === c) {
    return 'Segitiga Sama Kaki';
  }

  return 'Segitiga Sembarang';
}
