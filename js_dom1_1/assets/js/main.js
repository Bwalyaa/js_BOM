console.log("Start: warten für 3 sekunden");

function countdown() {
    let seconds = 11;
  
    
    setTimeout(function() {
      console.log("3 sekunden vergangen, du hast deine zeit verschwendet.");
      
      let interval = setInterval(function() {
        seconds--;
  
        if (seconds > 0) {
          console.log(seconds);
        } else {
          console.log("Feierabend!");
          clearInterval(interval);
        }
      }, 1000); 
    }, 3000); 
  }
  
  countdown();
  