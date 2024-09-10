const projects = [
  {
    id: 1,
    name: "My Todos",
    image: "mytodos.jpg", // URL to the project image
    description:
      "My Todos is a full-stack task management application designed to help users create, manage, and organize their daily tasks. Built with a focus on simplicity and efficiency, the app provides a responsive and user-friendly interface, making it easy to add, update, and delete tasks. My Todos leverages MongoDB to store tasks securely in the cloud, ensuring that users can access their data from any device. The app includes features like task prioritization, due dates, and filtering to streamline task management and improve productivity. Its modern design is fully responsive, offering a seamless experience across devices.",
    tech_stack: ["nuxt", "unocss", "tailwind", "mongo", "netlify"],
    problematic:
      "Building a task management app that can scale to handle numerous users while ensuring a smooth and intuitive user experience.",
    difficulties:
      "Ensuring efficient database operations, managing user authentication, and creating a user-friendly interface for handling multiple tasks.",
    solutions:
      "Used MongoDB as a NoSQL database to handle large volumes of tasks efficiently. Integrated Nuxt.js for server-side rendering and enhanced performance. The frontend was built using Tailwind CSS and Unocss, ensuring a clean and responsive design across all devices. Additionally, user authentication was implemented to securely manage user sessions, and task filtering features were added to simplify task organization.",
    url: "https://n3-mytodos.netlify.app",
  },
  {
    id: 2,
    name: "Filesystem Tree View",
    image: "filesystemtreeview.jpg",
    description:
      "Filesystem Tree View is an intuitive application that visualizes hierarchical file structures, providing users with a clear and interactive representation of directories and their contents. The app allows users to expand and collapse directories, view file metadata, and navigate through complex file systems with ease. It was designed to address the need for better visualization of large-scale file systems, enabling users to quickly locate and manage files. The application offers a sleek, minimal interface, with performance optimizations to handle large datasets efficiently.",
    tech_stack: ["next", "tailwind", "typescript", "vercel"],
    problematic:
      "Finding a solution to visualize large and deeply nested file structures efficiently while ensuring smooth navigation and usability.",
    difficulties:
      "Managing recursive data rendering and ensuring that performance remains fast, even for large file systems with thousands of directories and files.",
    solutions:
      "The application uses lazy loading to render subdirectories only when they are expanded, improving performance. Virtualized lists were also implemented to handle large datasets by rendering only the visible portion of the directory tree at any time. The clean interface is powered by Tailwind CSS, and the app is deployed on Vercel for optimal global performance. These solutions ensure that even the largest file structures are handled efficiently, without sacrificing user experience.",
    url: "https://filesystem-tree-view.vercel.app",
  },
  {
    id: 3,
    name: "Portfolio",
    image: "portfolio.jpg",
    description:
      "A highly personalized and visually appealing portfolio website built to showcase my skills, projects, and professional journey. The portfolio is designed with a clean, modern aesthetic that is fully responsive across all devices. Each project is highlighted with detailed descriptions, images, and the technologies used. The design also includes subtle animations and interactions to make the browsing experience engaging without sacrificing performance. The portfolio serves as a central hub to demonstrate my work, blog posts, and allows potential clients and employers to easily get in touch with me.",
    tech_stack: ["vue", "nuxt", "tailwind", "netlify"],
    problematic:
      "Creating a visually compelling and easy-to-navigate portfolio that could effectively showcase multiple types of content, such as projects, blog posts, and contact information, while maintaining performance and responsiveness.",
    difficulties:
      "Ensuring the design is responsive for all screen sizes, while keeping the load times fast, especially for image-heavy pages. Balancing aesthetics with performance was a key challenge, as was integrating animations without affecting usability.",
    solutions:
      "Used Tailwind CSS for responsive design and utility-first styling to ensure consistency across various screen sizes. Optimized images and media by leveraging lazy loading and modern formats (e.g., WebP). The animations were created using CSS for lightweight performance and Vue.js transitions to maintain a smooth user experience. Deployed the site on a CDN-backed hosting service to further improve load times globally.",
    url: "https://mueenhossain.netlify.app",
  },
];

export default projects;
