var blogs = [
    {
        title: "My Portfolio-Building Journey",
        date: "October 11, 2025",
        description: "I will be talking about my journey, utilizing CSS, HTML, and Javascript to design my first  personal website.",
        image: "/Users/joshuapanicker/bootcamp-project-2025/websiteprojectpreview.PNG",
        imageAlt: "Preview image of website",
        slug: "my-portfolio-building-journey",
    },
    {
        title: "What Brought Me to the Field of Computer Science ",
        date: "October 13, 2025",
        description: "I will discuss my computer science journey from the beginning, explaining what brought me here and why I continue to pursue this interest",
        image: "/Users/joshuapanicker/bootcamp-project-2025/personalgithubpreview.PNG",
        imageAlt: "Preview image of personal github repositories",
        slug: "what-brought-me-to-the-field-of-computer-science",
    },
];
function appendBlogsToPage() {
    // Step 1: Access the Container for Blogs
    var blogContainer = document.getElementById('blog-container');
    if (!blogContainer) {
        console.error('Blog container not found!');
        return;
    }
    // Step 2: Create a Function to Iterate Over the List of Blogs
    blogs.forEach(function (blog) {
        // Step 3: While iterating over the list of blogs, Dynamically Create and Append Blog Elements
        // Create a new div element to represent the blog post container
        var blogPost = document.createElement("div");
        blogPost.className = "blog-post";
        // Create child elements such as:
        // - h1 for the title
        var title = document.createElement("h1");
        title.textContent = blog.title;
        title.className = "blog-title";
        // - img for the blog image
        var image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        image.className = "blog-image";
        // - p for the description
        var description = document.createElement("p");
        description.textContent = blog.description;
        description.className = "blog-description";
        // Append these elements to the div
        blogPost.appendChild(title);
        blogPost.appendChild(image);
        blogPost.appendChild(description);
        // Then append the div to the main blog container
        blogContainer.appendChild(blogPost);
    });
}
document.addEventListener('DOMContentLoaded', appendBlogsToPage);
