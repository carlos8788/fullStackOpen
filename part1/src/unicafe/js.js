const handleButtonClick = () => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max)
    }
    const valor = getRandomInt(7)
    return valor;
}
console.log(handleButtonClick())