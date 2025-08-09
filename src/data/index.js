const images = import.meta.glob('../static/img/*.png', { eager: true })

const projects = [
  {
    title: 'Component Collection',
    img: images['../static/img/project1.png'].default,
    tags: ['React.js', 'SASS', 'CSSModules', 'Storybook'],
    pageInfo:
      "This project is an example of some interactive UI components and modules I've created during my journey as a Frontend developer working on [Griddo CMS](https://www.griddo.es/en/) Component System",
    url: 'project-1',
    externalUrl: 'https://mariiabadanina.github.io/component-collection',
    githubUrl: 'https://github.com/MariiaBadanina/component-collection',
    description: `
[Griddo CMS](https://www.griddo.es/en/) Component System was created to give marketing teams flexible building blocks that work well together. Each component is carefully designed for reuse, making it easy to design websites in different ways. Our main aim was to create a variety of modules that make implementation easier while matching our clients' brand guidelines.

This task demanded a deep understanding of how these components would interact and adapt to various scenarios while preserving the brand's visual identity.`,
  },
  {
    title: 'AI Project Creator',
    img: images['../static/img/project2.png'].default,
    tags: [
      'React.js',
      'TypeScript',
      'React Query',
      'Tailwind CSS',
      'Unsplash API',
      'TinyLlama',
    ],
    pageInfo:
      'An AI-assisted tool that generates engaging project descriptions and matching images in seconds. Built to showcase seamless AI integration, multi-API workflows, and a polished, responsive UI.',
    url: 'ai-project-creator',
    externalUrl: 'https://mariiabadanina.github.io/ai-project-creator',
    githubUrl: 'https://github.com/MariiaBadanina/ai-project-creator',
    description: `
The AI Project Creator streamlines the process of setting up new projects by combining AI-generated content with relevant visuals. 
Users enter a project name, and the system automatically:

- Generates a short, engaging description using the [TinyLlama](https://huggingface.co/TinyLlama/TinyLlama-1.1B-Chat-v1.0) model.
- Fetches a matching image from the [Unsplash](https://unsplash.com/) API.

This feature was built with **React + TypeScript** for a clean, maintainable frontend, **React Query** for efficient server state management, and **Tailwind CSS** for rapid, responsive UI styling.  
The backend, powered by **Node.js + Express**, securely handles API keys and integrates with both Hugging Face and Unsplash.

The result is a smooth, responsive experience where users can create visually rich, ready-to-use projects in seconds — demonstrating my ability to design multi-service architectures, manage asynchronous data flows, and deliver polished user interfaces.`,
  },
]

export default projects
