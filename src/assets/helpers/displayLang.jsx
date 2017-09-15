export let displayLang = function(lang){
  if(!lang){return undefined};
  let string = lang.family+" / "+lang.name;
  return string;
}
