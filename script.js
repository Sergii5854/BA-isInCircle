window.onload = function () {

    function isInCircle(r, x, y) {
        var xCircle = 0
        var yCircle = 0

        return Math.sqrt( (x - xCircle) * (x - xCircle) + (y - yCircle) * (y - yCircle) ) < r
    }

    console.log('isInCircle(1, 2, 4) => ', isInCircle(1, 2, 4))
    console.log('isInCircle(5, 2, 4) => ', isInCircle(5, 2, 4))
    console.log('isInCircle(1.25, 0.88, 0.88) => ', isInCircle(1.25, 0.88, 0.88))
    console.log('isInCircle(1.25, 0.89, 0.88) => ', isInCircle(1.25, 0.89, 0.88))

};