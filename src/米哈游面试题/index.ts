// export function compute(num) {
//   if (num === 1 || num / 2 === 1) {
//     return 1;
//   }
//   const mode = num % 2;
//   return 1 + (mode === 0 ? compute(num / 2) : compute(num - 1));
// }

export function compute(num) {
    if (num === 1 || num / 2 === 1) {
        return 1;
    }
    const mode = num % 2;
    return 1 + (mode === 0 ? compute(num / 2) : compute(num - 1));
}

