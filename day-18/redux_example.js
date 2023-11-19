function Store() {
    var store = {
        visibilityFilter: 'SHOW_ALL',
        todos: [
            {
                text: 'Consider using Redux',
                completed: true,
            },
            {
                text: 'Keep all state in a single tree',
                completed: false
            }
        ]
    };
    this.getStore = () => {
        return store;
    }
}