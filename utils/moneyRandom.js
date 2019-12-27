exports.getRandomMoney = (step) => {
    let ran = Math.ceil(Math.random() * 100);
    console.log(ran);
    if (step == 0) {
        if (ran <= 10) {
            return 1.88;
        } else if (ran > 10 && ran <= 30) {
            return 3.88;
        } else if ( ran > 30 && ran <= 80) {
            return 5.88;
        } else {
            return 7.88;
        }
    } else if (step == 1) {
        if (ran <= 10) {
            return 2.88;
        } else if (ran > 10 && ran <= 30) {
            return 4.88;
        } else if ( ran > 25 && ran <= 80) {
            return 6.88;
        } else {
            return 8.88;
        }
    } else {
        return 0.88;
    }
};
