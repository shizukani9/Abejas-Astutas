module.exports = class RandomValues{
    static alphanumeric(size) {
        return Math.random().toString().substring(2, size);
    }
}