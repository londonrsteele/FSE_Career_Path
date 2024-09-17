const Calculate = {
    factorial(num) {
        for (let i = num - 1; i >= 1; i--) {
            num = num * i; 
        }
        return num;
    }
}

module.exports = Calculate;

