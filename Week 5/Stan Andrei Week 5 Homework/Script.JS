console.log("It works !");

var a=["paper", "scissors", "rock"];

function play () {
    console.log ("User: ");
    var user = Math.floor(Math.random() * a.length);
    console.log (user, a[user]);

    console.log ("Computer: ");
    var computer = Math.floor(Math.random() * a.length);
    console.log (computer, a[computer]);

    if (user === 0 && computer === 1)
    {
        console.log ("Computer wins");
    }

    else if (user === 0 && computer === 2)
    {
        console.log ("User wins");
    }

    else if (user === 1 && computer === 0)
    {
        console.log ("User wins");
    }

    else if (user === 1 && computer === 2)
    {
        console.log ("Computer wins");
    }

    else if (user === 2 && computer === 0)
    {
        console.log ("Computer wins");
    }

    else if (user === 2 && computer === 1)
    {
        console.log ("User wins");
    }

    else if(user === computer)
    {
        console.log ("It is a draw");
    }
}

play();