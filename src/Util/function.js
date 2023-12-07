
export function random(min ,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const randomChar = () => String.fromCharCode(random(33, 126));

export const randomString = (stringLength) => {
    let randomString = '';
    while (stringLength--) randomString += randomChar();
    return randomString;
};

export function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}