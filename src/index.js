module.exports =function check(str, bracketsConfig) {
  var closeBr = "";
  for (var i =0; i< str.length; i ++){
    for (var y = 0; y<bracketsConfig.length; y++){
      if (bracketsConfig[y].includes(str[i])){
        if (closeBr == ""){
          if(str[i] == bracketsConfig[y][0]){
            closeBr += bracketsConfig[y][1];
          } else {
            return false
          }
        }else {
          if (str[i]==closeBr.slice(-1)){
            closeBr = closeBr.slice(0, -1); 
          } else {
            if (str[i]== bracketsConfig[y][0]){
              closeBr += bracketsConfig[y][1];
            }else{
              return false
            }
          }
        }
      }
    }
  }
  if (closeBr == ""){
    return true
  }else {
    return false;
  }

}

