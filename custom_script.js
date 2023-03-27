(async () => {
    let path = window.location.pathname;
    console.log(path);


    if (path.match(/gradebook/)) {
        waitForElement('#gradebook-student-search', () => {
            const gradebook = document.querySelector('#gradebook_app');
            const button = document.createElement('button');
            button.innerText = 'Update Module Progress';
            button.style = "margin-bottom: 5px;";
            button.addEventListener('click', updateModuleProgress);

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

    async function updateModuleProgress() {
        const courseID = window.location.pathname.match(/courses\/([0-9]+)/)[1];

        let userList = await getUsers(courseID);

    }

    async function getUsers(courseID) {
        const response = await fetch(`https://${window.location.host}/api/v1/courses/${courseID}/users?per_page=100&include[]=enrollments`);

        let nextPage = isNext(response.headers.get('link'));

        // https://ckruger.instructure.com/api/v1/courses/2155/modules?student_id=13320
    }

    function isNext(headers) {

    }

})();
