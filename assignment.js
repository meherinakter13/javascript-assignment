//  https://github.com/meherinakter13/javascript-assignment

// Convert kilometer to meter
function kilometerToMeter(kilometer){
    if(kilometer < 0){
        console.log('You have given an invalid input');
        return -1;
    }
    else{
        var meter = kilometer * 1000;
        return meter;
    }
}

/*var result = kilometerToMeter(-5);
console.log(result);*/



// Budget calculation
function budgetCalculator(watch,phone,laptop){
    if(watch < 0 || phone < 0 || laptop <0){
        console.log('You have given an invalid input');
        return -1;
    }
    else{
        var costOfWatch = watch * 50;
        var costOfphone = phone * 100;
        var costOfLaptop = laptop * 500;
        var totalCost = costOfWatch + costOfphone + costOfLaptop;
        return totalCost;
    }
}
/*var result = budgetCalculator(2,5,2);
console.log(result);*/



// Finding the Hotelcost
function hotelCost(day){
    var cost = 0;
    if(day < 0){
        console.log('You have given an invalid input');
        return -1;
    }
    else if(day <= 10){
        cost = day * 100;
        return cost;
    }
    else if(day <= 20){
        var firstpart = 10 * 100;
        var remainingDay = day - 10;
        var secondpart = remainingDay * 80;
        cost = firstpart + secondpart;
        return cost;
    }
    else{
        var firstpart = 10 * 100;
        var secondpart = 10 * 80;
        var remainingDay = day - 20;
        var thirdpart = remainingDay * 50;
        cost = firstpart + secondpart + thirdpart;
        return cost;
    }   
}
/*var result = hotelCost(26);
console.log(result);*/



//finding the largest name from an array

function megaFriend(friendsName){
    var largeName = friendsName[0];
    var checkInput = 0;
    for (var i = 0; i < friendsName.length; i++){
        var nameType = typeof(friendsName[i]);
        var dataType = typeof ("string");
        var whiteSpace = ' ';
        var emptyString = '';

            if (friendsName.length < 1 || nameType != dataType || friendsName[i] == whiteSpace || friendsName[i] == emptyString){
                checkInput = 'Error';
            }
    }

    if(checkInput != 0){
        console.log("You have given an invalid input'");
        return -1;
    } 

    for(var i = 0; i < friendsName.length; i++){
        var element = friendsName[i];
        if(element.length > largeName.length){
            largeName = element;
        }
    }
    return largeName;
}
/*var result = megaFriend(['ratriiiii', 'meherin', 'sumaiya','sumaiyaaaa']);
console.log(result);*/

