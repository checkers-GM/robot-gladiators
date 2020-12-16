var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;

//You can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth)

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("welcome to robot gladiators");

    //Subtract the value of PlayerAttack from teh value of enemyhealth and 
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of enemyAttack fro mteh value of playerHealth and
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked. 
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable


    // Log a resulting message to the console so we know that it worked.

};
// execute function
fight();