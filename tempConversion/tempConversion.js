const ftoc = function(tempInF) {
  const tempInC = (tempInF - 32) * 5 / 9;
  if (Number.isInteger(tempInC)) {
    return tempInC;
  }
  return Number(tempInC.toFixed(1));
}

const ctof = function(tempInC) {
  const tempInF = ((9 * tempInC) / 5) + 32;
  if (Number.isInteger(tempInF)) {
    return tempInF;
  }
  return Number(tempInF.toFixed(1));

}

module.exports = {
  ftoc,
  ctof
}

