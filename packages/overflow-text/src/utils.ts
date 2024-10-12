
function splited(text:string,keyword:string) {
    return text.split(new RegExp(`(${escapeRegExp(keyword)})`, 'gi'));
}

function escapeRegExp(str:string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& 代表整个匹配项
}
