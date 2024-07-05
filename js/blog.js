
async function loadBlogPosts() {
    try {
        const response = await fetch('/data/blog.json');
        const blogPosts = await response.json();
        displayBlogPosts(blogPosts);
    } catch (error) {
        console.error('Loading error:', error);
    }
}

//Display blog
function displayBlogPosts(posts) {
    const blogContainer = document.getElementById('blog-posts');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post', 'col-md-6', 'col-lg-4', 'd-flex');

        postElement.innerHTML = `
        
            <div class="blog-entry justify-content-end aos-init aos-animate" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="100">
            <a href="blog-single.html" class="block-20 img" style="background-image: url('${post.img}');">
            </a>
            <div class="text mb-5">
            <p class="meta mt-2 mb-2"><span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
            ${post.author}&nbsp;&nbsp;&nbsp;
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
            </svg>
            Jan. 18, 2021</span></p>
            <h3 class="heading mb-2"><a href="#">${post.title}</a></h3>
            <p>${post.description}</p>
            </div>
            </div>
        `;

        blogContainer.appendChild(postElement);
    });
}


loadBlogPosts();
