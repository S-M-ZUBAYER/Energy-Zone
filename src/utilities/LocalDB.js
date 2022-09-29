const setElement = (key, time) => {
    localStorage.setItem(key, JSON.stringify(time))
}
const getElement = (key) => {
    const time = localStorage.getItem(key);
    return JSON.parse(time)

}

export { setElement, getElement }