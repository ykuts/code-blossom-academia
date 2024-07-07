
async function loadCourses() {
    try {
        const response = await fetch('/data/moduls.json');
        const courses = await response.json();
        displayCourses(courses);
    } catch (error) {
        console.error('Loading error:', error);
    }
}

//Display blog
function displayCourses(moduls) {
    const courseContainer = document.getElementById('courses');

    moduls.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('col-md-6', 'col-lg-4', 'aos-init', 'aos-animate');

        courseElement.innerHTML = `
        
            
                        <div class="courses">
                            <div class="d-flex">
                                <div class="icon"><span>   
                                    <img src="${course.src}" alt="internet">
                                </span></div>
                                <div class="text">
                                    <h2>${course.title}</h2>
                                    <p>Objectives:</p>
                                    <ul>
                                        <li>Understanding the basics of the internet</li>
                                        <li>Navigating web browsers</li>
                                        <li>Understanding HTTP, HTTPS</li>
                                    </ul>
                                    
                                    <p class="lec"><a href="#">${course.duration}</a></p>
                                </div>
                            </div>
                            
                            <div class="text-center">
                                <a href="#" class="btn d-block btn-primary btn-outline-primary py-3" style="color:aliceblue">Start Now!</a>
                            </div>
                        </div>
                    
        `;

        courseContainer.appendChild(courseElement);
    });
}


loadCourses();
