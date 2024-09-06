function speedLimit(speed,limit) {
    let average = speed / limit ;
    let point = Math.floor(average - 70)/5 ;

    if (average < 70) {
        console.log ("Good Sage Driving!");
    }else if (average > 70) { 
        console.log(`Speed limit crossed by penalty point : + ${point}`);
        if (point > 10) {
            console.log("Liecence suspended");
        }
    }
}

