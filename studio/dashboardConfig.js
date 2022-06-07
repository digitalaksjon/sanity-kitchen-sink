export default {
  widgets: [
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
                  buildHookId: '629f267dc3dc5a5f5434ebcf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-94tx1dnx',
                  apiId: '37541e56-a992-49f5-8049-c8bd633431e3'
                },
                {
                  buildHookId: '629f267e524b225b67ed7ffe',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6chsfqb2',
                  apiId: '620950b0-f937-4c35-b1d8-fbd11284d32c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/digitalaksjon/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6chsfqb2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
