function mediaArray(ar) { 
    var n = ar.length; 
    var soma = 0; 
    for (var i = 0; i < n; i++) { 
    soma += ar[i]; 
    } 
    return soma / n; 
   } 

   var ar = [6, 7, 8, 7]; 
   var media = mediaArray(ar); 
   console.log("mediaArray: ", media);

