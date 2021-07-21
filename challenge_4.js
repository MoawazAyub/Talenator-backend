/**
 * OPTIMIZATIONS
 * 
 * optimize this function as well as possible!
 * 
 * Difficulty: hard
 * 
 */

function mystery( x, y, z) {
  if(y >= x) {
    return z
  } else if (y < x && y < z) {
    return y
  } else if (y < z && y > z) {
    return x
  }
}

console.log (mystery(2, 12, 20));