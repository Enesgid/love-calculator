document.getElementById("submit").addEventListener("click", function(){
    var randomNumber = (Math.floor(Math.random()*100)+1);
    var firstName = document.getElementById("firstname").value;
    var secondName = document.getElementById("secondname").value;

    document.querySelector("h1").innerHTML = firstName + " 💖💖 " + secondName;

    if (randomNumber >= 70) {
        document.getElementById("result").innerHTML = firstName + " you are really in love with  " + secondName + " love like fire 💋💋" + " with the rate of " + randomNumber + " %";
    }
    else if (randomNumber >= 50) {
        document.getElementById("result").innerHTML = firstName + " you love  " + secondName + " on the scale of " + randomNumber + "%";
    }
    else {
        document.getElementById("result").innerHTML = "you arent in love😒😒😒😒" + " your love percent is " + randomNumber + "%";
    }
})