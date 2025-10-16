type Blog = {
    title : string;
    date : string;
    description : string;
    image : string;
    imageAlt : string;
    slug : string;
}

const blogs : Blog[] = [
    {
        title : "My Portfolio-Building Journey",
        date : "October 11, 2025",
        description : "I will be talking about my journey, utilizing CSS, HTML, and Javascript to design my first  personal website.",
        image : "/Users/joshuapanicker/bootcamp-project-2025/websiteprojectpreview.PNG",
        imageAlt : "Preview image of website",
        slug : "my-portfolio-building-journey",
    },
    {
        title : "What Brought Me to the Field of Computer Science ",
        date : "October 13, 2025",
        description : "I will discuss my computer science journey from the beginning, explaining what brought me here and why I continue to pursue this interest",
        image : "/Users/joshuapanicker/bootcamp-project-2025/personalgithubpreview.PNG",
        imageAlt : "Preview image of personal github repositories",
        slug : "what-brought-me-to-the-field-of-computer-science",
    },
];

// Function to dynamically append blogs to the webpage using DOM manipulation
function appendBlogsToPage(): void {
    // Access the container for blogs
    const blogContainer = document.getElementById('blog-container');
    
    if (!blogContainer) {
        console.error('Blog container not found!');
        return;
    }

    // Iterate over the list of blogs and create elements for each
    blogs.forEach((blog) => {
        // Create a new div element to represent the blog post container
        const blogPost = document.createElement("div");
        blogPost.className = "blog-post";
        
        // Create child elements
        const title = document.createElement("h2");
        title.textContent = blog.title;
        title.className = "blog-title";
        
        const date = document.createElement("p");
        date.textContent = blog.date;
        date.className = "blog-date";
        
        const image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        image.className = "blog-image";
        
        const description = document.createElement("p");
        description.textContent = blog.description;
        description.className = "blog-description";
        
        const readMoreLink = document.createElement("a");
        readMoreLink.href = `#${blog.slug}`;
        readMoreLink.textContent = "Read More";
        readMoreLink.className = "blog-read-more";
        
        // Append child elements to the blog post div
        blogPost.appendChild(title);
        blogPost.appendChild(date);
        blogPost.appendChild(image);
        blogPost.appendChild(description);
        blogPost.appendChild(readMoreLink);
        
        // Append the blog post to the main blog container
        blogContainer.appendChild(blogPost);
    });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', appendBlogsToPage);