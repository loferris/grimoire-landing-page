const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/loferris/grimoire-landing-page/loferris.github.io.git'
  },
  () => {
    console.log('landing page deployed')
  }
)
