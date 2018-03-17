var selfContainedModule = (function () {
    var counter = 0;

    return {
        incrementCounter: function (value) {
            counter += value;
            return counter;
        },

        displayCounter: function () {
            console.log('Counter value is ' + counter);
        },

        resetCounter: function () {
            counter = 0;
        }
    };
})();

// Increment counter by 3
selfContainedModule.incrementCounter(3);

// Display the counter value
// Output : Counter value is 3
selfContainedModule.displayCounter();

// Reset the counter value
selfContainedModule.resetCounter();