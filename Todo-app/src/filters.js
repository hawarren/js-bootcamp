// Set up filters default object
const textFilters = {
    searchText: '',
    hideCompleted: false
}

// getFilters
// Arguments: none
// Return value: filters object
const getFilters = () => textFilters

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none
const setFilters = (newFilters) => {
    if (newFilters.searchtext)
    textFilters.searchtext = newFilters.searchtext

    if (newFilters.hideCompleted)
    textFilters.hideCompleted = newFilters.hideCompleted
}

// Make sure to set up the exports

export { textFilters, getFilters, setFilters}