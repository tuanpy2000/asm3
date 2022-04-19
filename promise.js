const startTime = 19
let timeOut = 0;

function goEat(time, nextActivity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let mealEndTime = startTime + 1;
            timeOut += 1;
            console.log('Con tho an co luc: ', startTime + 'h');
            nextActivity(mealEndTime, goForAWalk);
            resolve();
        }, 1000);
    })

}

function goToTheMovie(time, nextActivity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            timeOut += 2;
            let movieEndTime = time + 2
            console.log('con tho an xong luc:', time + 'h')
            console.log('con tho xem phim xong luc:', movieEndTime + 'h')
            nextActivity(movieEndTime)
            resolve();
        }, 2000);
    })

}

function goForAWalk(time) {
    setTimeout(() => {
        timeOut += 1;
        let walkingEndTime = time + 1
        console.log('con tho di dao xong luc:', walkingEndTime + 'h')
        console.log(`tong thoi gian di choi la: ${walkingEndTime-startTime} tieng`)
        console.log(`thoi gian code chay ${timeOut}s`)
    }, 1000);
}
goEat(startTime, goToTheMovie)
    .then(() => {
        return goToTheMovie(time, goForAWalk)
    })
    .then(() => {
        goForAWalk()
    })
    .catch(error => {
        console.error("", error);
    })