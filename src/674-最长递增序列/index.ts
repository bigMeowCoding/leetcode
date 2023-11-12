export function findLengthOfLCIS(s: string): number {
  let l = 0,
    r = l,
    len = 0;

  function isPalindrome(str) {
    if (!str) {
      return false;
    }
    return Array.from(str).reverse().join("") === str;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s.slice(i, j + 1))) {
        len = Math.max(len, j - i + 1);
      }
    }
  }
  return len;
}
