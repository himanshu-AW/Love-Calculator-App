function calculateLove(){
    const user1 = document.querySelector("#user1").value;
    const user2 = document.querySelector("#user2").value;

    // Check if both names are provided
    if (!user1 || !user2) {
      alert("Please Enter Names.");
      return;
    } 
    
    // calculate lovew score
    const loveScore = Math.floor(Math.random() * 100) + 1 ;

    let message;
        if (loveScore >= 80) {
            message = "Wow, that's true love! ❤️";
        } else if (loveScore >= 50) {
            message = "Not bad! There's potential. 😉";
        } else {
            message = "Hmm, maybe it's time to find a new crush. 😅";
        }

        document.querySelector(".result").innerHTML = `Your love score with ${user2} is ${loveScore}%. <br> ${message}`;
        document.querySelector(".result").classList.remove('hide');
      }
      
      function resetForm() {
        document.getElementById("form").reset();
        document.querySelector(".result").classList.add('hide');
        document.querySelector(".result").innerHTML = "";
    }