export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanuxt-studio',
                  apiId: 'f9920a7d-708f-4480-8dcb-97638539e796'
                },
                {
                  buildHookId: '619e42562019c7508f0b21b1',
                  title: 'Events Website',
                  name: 'sanuxt',
                  apiId: '8a8a7c1f-8edc-4655-8769-b8a4d09b88f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/qbahamutp/Sanuxt',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanuxt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
