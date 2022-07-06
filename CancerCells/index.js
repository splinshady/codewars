function cutCancerCells(organism){
  let strOutput = organism;
  strOutput = strOutput.replace(/[a-z]?C[a-z]?/g, '');
  strOutput = strOutput.replace(/c/g, '');
  return strOutput;
}
