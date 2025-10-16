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

function appendBlogsToPage(): void {
    const blogContainer = document.getElementById('blog-container');
    
    if (!blogContainer) {
        console.error('Blog container not found!');
        return;
    }

    blogs.forEach((blog) => {
        
        const blogPost = document.createElement("div");
        blogPost.className = "blog-post";
        

        const title = document.createElement("h1");
        title.textContent = blog.title;
        title.className = "blog-title";
        
        const image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        image.className = "blog-image";
        
        const description = document.createElement("p");
        description.textContent = blog.description;
        description.className = "blog-description";
        
        // Create a link wrapper to make the entire blog post clickable
        const blogLink = document.createElement("a");
        blogLink.href = `blogs/${blog.slug}.html`;
        blogLink.className = "blog-link";
        blogLink.style.textDecoration = "none";
        blogLink.style.color = "inherit";
        
        blogPost.appendChild(title);
        blogPost.appendChild(image);
        blogPost.appendChild(description);
        
        // Append the blog post to the link, then append the link to the container
        blogLink.appendChild(blogPost);
        blogContainer.appendChild(blogLink);
    });
}

document.addEventListener('DOMContentLoaded', appendBlogsToPage);