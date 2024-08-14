module.exports = class RandomValues{
    static randomNumerics(size) {
        return Math.random().toString().substring(2, size);
    }

    static getRandomValues(keyName) {
        let result = '';
        if (keyName.toString().includes("<") && keyName.toString().includes(">")) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let counter = 0;
            while (counter < keyName.toString().replace(/<|>/g, '').split(',')[1]) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            counter += 1;
            }
        } else {
            result = keyName;
            console.log(result)
        }
        return result;
    }
}