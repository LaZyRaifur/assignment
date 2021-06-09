// https://github.com/LaZyRaifur/assignment

// task : 01 KilometerToMeter

function KilometerToMeter(km){
    var meter;
    // if the value is less than zero
    if(km < 0){
        console.log("wrong input");
    }
    else{
        meter = km * 1000;
    }
    return meter;
}

// task: 02 budgetCalculator

function budgetCalculator(watch_quantity,phone_quantity,laptop_quantity){
    // if the value is less than zero
    if(watch < 0 || phone < 0 || laptop < 0){
        console.log("wrong input");
    }
    var total = (watch_quantity * 50) + (phone_quantity * 100) + (laptop_quantity * 500);
    return total;
}

//task: 03 hotelCost

function hotelCost(stay_night){
    var amountOfBill = 0;
    var overNight;
    if(stay_night <= 10){
        amountOfBill = stay_night * 100;
    }
    else if(stay_night > 10 && stay_night <= 20){
        overNight = stay_night - 10;
        amountOfBill = (overNight * 80) + ((stay_night - overNight) * 100);
    }
    else{
        overNight = stay_night - 20;
        amountOfBill = (overNight * 50) + (10 * 100) + (10 * 80); 

    }
    return amountOfBill;
}

//task: 04 megaFriend
function megaFriend(array){
    var name_length = array[0]
    // console.log(name_length.length);
    for(var i = 1; i < array.length; i++){
        var element = array[i];
        
        if(name_length.length < element.length){
            name_length = element;

        }



    }
    return name_length;
}
