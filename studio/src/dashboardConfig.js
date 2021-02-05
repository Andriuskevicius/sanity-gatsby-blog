export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601d9f5b095b324fae9e39a7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xmi7eu8b',
                  apiId: 'af5a61a0-797e-491d-8684-4e57f8845743'
                },
                {
                  buildHookId: '601d9f5cbf0a36419aeb0ab0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-h4bn42x8',
                  apiId: '7720faa0-f211-43db-bc82-9b599f4894aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Andriuskevicius/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-h4bn42x8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
