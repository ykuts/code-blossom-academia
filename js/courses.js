
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
        courseElement.setAttribute('data-aos', 'flip-left');
        courseElement.setAttribute('data-aos-delay', '100');
        courseElement.setAttribute('data-aos-duration', '1000');

        const objectivesList = course.objectives.map(objective => `<li>${objective}</li>`).join('');

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
                                        ${objectivesList}
                                    </ul>
                                    
                                    <p class="lec"><a href="#">Duration: ${course.duration}</a></p>
                                </div>
                            </div>
                            
                            <div class="text-center">
                                <a href="#" class=" d-block btn-custom  py-3">Start Now!</a>
                            </div>
                            
                        </div>
                    
        `;

        courseContainer.appendChild(courseElement);
    });
}


loadCourses();
