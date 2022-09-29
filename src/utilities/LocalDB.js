
// create a function to set the item in local storage
const setElement = (key, time) => {
    localStorage.setItem(key, JSON.stringify(time))
}

// create a function to get the item from local storage
const getElement = (key) => {
    const time = localStorage.getItem(key);
    return JSON.parse(time)

}

export { setElement, getElement }