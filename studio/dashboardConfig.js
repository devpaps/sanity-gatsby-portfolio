export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d46928fab852516cb9be084',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-nj7ocrhs',
                  apiId: '0fc790dc-0c26-4bdc-816c-85d6d4c3856f'
                },
                {
                  buildHookId: '5d46928fb04305664f46583a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-t3fwsqnb',
                  apiId: '28e90ce2-0ea6-41fc-b9e2-7e99596b8c3b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/devpaps/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-t3fwsqnb.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
