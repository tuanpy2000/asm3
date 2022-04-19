//gioBatDau = 19 
//di-an: ( cộng 1 tiếng - timeout: 1s) => di_xem_phim:
// ( cộng 2 tiếng - timeout: 2s) => di_dao: ( cộng 1 tiếng - 
//timeout: 1s)
// => OUTPUT:
// Con thỏ ăn cỏ lúc: 19h
// Con thỏ ăn xong lúc: 20h
// con thỏ đi xem phim xong lúc 22h
// con thỏ đi dạo xong lúc: 23h
// Tổng cộng thơi gian đi chơi là 4 tiếng
// Thời gian code chạy 4s

// example
// di-an(gioBatDauDi) => di_xem_phim =>di_dao

const startTime = 19
let timeOut = 0;

function goEat(time, nextActivity) {
    setTimeout(() => {
        let mealEndTime = startTime + 1;
        timeOut += 1;
        console.log('Con tho an co luc: ', startTime + 'h');
        nextActivity(mealEndTime, goForAWalk);
    }, 1000);
}

function goToTheMovie(time, nextActivity) {
    setTimeout(() => {
        timeOut += 2;
        let movieEndTime = time + 2
        console.log('con tho an xong luc:', time + 'h')
        console.log('con tho xem phim xong luc:', movieEndTime + 'h')
        nextActivity(movieEndTime)
    }, 2000);
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
goEat(startTime, goToTheMovie, () => {
    goToTheMovie(time, goForAWalk, () => {
        goForAWalk()
    })
})

// function conTho() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('con tho an co, uong bia')
//             resolve();
//         }, 3000);

// }
// conTho()
//     .then(dixemphim => {
//         console.log('di xemphim')
//     })