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
const setFilters = ({searchText, hideCompleted}) => {
    if (typeof searchText === 'string')
    textFilters.searchtext = searchTtext

    if (typeOfhideCompleted === 'boolean')
    textFilters.hideCompleted = hideCompleted
}

// Make sure to set up the exports

export { textFilters, getFilters, setFilters}