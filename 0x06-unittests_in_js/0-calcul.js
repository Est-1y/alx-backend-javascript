// return sums of args
function calculateNumber(a, b) {
    const an = Math.round(a);
    const bn = Math.round(b);
    const c = an + bn;
    return c;
}

// Module
module.exports = calculateNumber;
