const calculateTimeLeft = () => {

    let year = new Date().getFullYear();

    const differnece = +new Date('10/01/${year}') - +new Date();

    let timeLeft = {};

    if (differnece > 0) {
        timeLeft = {
            days: Math.floor(differnece / (1000 * 60 * 60 * 24)),
            hours: Math.floor((differnece / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((differnece / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
    }

    return timeLeft;

};

