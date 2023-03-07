// Timer Constructor Function
function Timer(callback, timeInterval, options) {
    this.timeInterval = timeInterval;

    // Method to start timer
    this.start = () => {
        // Sets expected time - this is  when we start the timer, plus whatever the time interval is
        this.expected = Date.now() + this.timeInterval;
        // Starts the timeout and saves the ID in a property, so we can cancel it later
        this.theTimeout = null;

        if (options.immediate) {
            callback();
        }
    }
}