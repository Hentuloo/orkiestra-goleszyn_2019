const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const galerySectionTemplate = path.resolve(`src/templates/galerySection.js`)
 const galeryPages = await graphql(`{
    gcms{
      galerySectionses {
        id
        sectionTitle
        url
        sectionFirstPhoto{
        url
       }
      sectionPhotos{
       url
        id
        }
      }
    }
  }      
  `)
  galeryPages.data.gcms.galerySectionses.forEach(section=>{
    createPage({
        path: section.url,
        component:galerySectionTemplate,
        context:{
            data:section
        }
    })
  })
}