function toCamelCase(str){
  return str.replace(/-[a-zA-Z]|_[a-zA-Z]/g, (match) => {
    return '' + match[1].toUpperCase();
  })
}
