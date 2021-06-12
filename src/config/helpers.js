export const mask = (val, theMask) => {
    let masked = '';
    if (val === '') return masked;
    let k = 0;
    for (let i = 0; i <= theMask.length - 1; i++) {
      if (theMask[i] === '#') {
        if (val[k]) {
          masked += val[k++];
        }
      } else if (theMask[i]) {
        masked += theMask[i];
      }
    }
    return masked;
  };