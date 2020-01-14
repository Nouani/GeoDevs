module.exports = (arrayAsString) => {
    return arrayAsString.split(',').map(tech => tech.trim());
}