(async () => {
    let path = window.location.pathname;
    console.log(path);


    if (path.match(/gradebook/)) {
        waitForElement('#gradebook-student-search', () => {
            alert('gradebook ready');
            const gradebook = document.querySelector('#gradebook_app');
            const button = document.createElement('button');
            button.innerText = 'Update Module Progress';

            gradebook.append(button);
        })
    }

    function waitForElement(selector, callback) {
        const element = document.querySelector(selector);

        if (element)
            callback();
        else
            setTimeout(() => {
                waitForElement(selector, callback);
            }, 500);
    }
})();