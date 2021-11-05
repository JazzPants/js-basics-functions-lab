// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    return Math.abs(x-42); //42nd street is HQ, so any street "x" from is an
    //absolute number of blocks of x-42 away from it
}

function distanceFromHqInFeet(x) {
    let disInBlocks = distanceFromHqInBlocks(x); //pass the parcel! Passing the value of x down
    return disInBlocks * 264;
}

function distanceTravelledInFeet(start, finish) {
    return Math.abs(start-finish)*264;
}

function calculatesFarePrice(start, destination) {
    let dis = distanceTravelledInFeet(start, destination);
    if (dis < 400) {
        return 0;
    }
    else if (dis >= 400 && dis <=2000) {
        return (dis-400) * 0.02;
    }
    else if (dis>2000 && dis<2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}