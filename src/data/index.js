const images = import.meta.glob('../static/img/*.png', { eager: true })

const projects = [
  {
    title: 'Component Collection',
    img: images['../static/img/project1.png'].default,
    tags: ['React.js', 'SASS', 'CSSModules', 'Storybook'],
    pageInfo:
      "This project is an example of some interactive UI components and modules I've created during my journey as a Frontend developer working on [Griddo CMS](https://www.griddo.es/en/) Component System",
    url: 'project-1',
    externalUrl: 'https://mariabadanina.github.io/component-collection',
    githubUrl: 'https://github.com/MariaBadanina/component-collection',
    description: `
[Griddo CMS](https://www.griddo.es/en/) Component System was created to give marketing teams flexible building blocks that work well together. Each component is carefully designed for reuse, making it easy to design websites in different ways. Our main aim was to create a variety of modules that make implementation easier while matching our clients' brand guidelines.

This task demanded a deep understanding of how these components would interact and adapt to various scenarios while preserving the brand's visual identity.`,
  },
]

export default projects
