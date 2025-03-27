require('dotenv').config()

async function  fetchContentPosts() {
    return fetch(process.env.URL_POSTS,{
        method : 'POST',
        headers : {
            'Content-type':'application/json'
        },
        body : JSON.stringify({
            query : `
            query MyQuery {
              contentComponents(orderBy: publishedAt_DESC) {
                description
                heading
                id
                slug
                categories {
                  name
                }
                iconContent {
                  id
                  url
                }
                datecreatedAt
              }
            }            `
        })
    })
}
async function fetchContentDetailsByName(id) {
  return fetch(process.env.URL_POSTS,{
    method : 'POST',
    headers : {
      'Content-type':'application/json'
    },
    body : JSON.stringify({
      query : `
      query MyQuery {
        contentComponent(where: {id: "${String(id)}"}) {
          createdAt
          heading
          id
          slug
          iconContent {
            id
            url
          }
          categories {
            name
          }
          description
          content {
            json
          }
        }
      }
      
      `
    })
  })
}
async function fetchPostsByCategorie(slug) {
  return fetch(process.env.URL_POSTS,{
    method : 'POST',
    headers : {
      'Content-type':'application/json'
    },
    body : JSON.stringify({
      query : `
      query MyQuery {
        contentComponent(where: {slug: "${String(slug)}"}) {
          id
          slug
          publishedAt
          content {
            json
          }
          description
          iconContent {
            url
          }
          categories {
            name
            id
          }
          heading
        }
      }
      `
    })
  })
}
async function fetchCategories() {
  return fetch(process.env.URL_POSTS, {
    method : 'POST',
    headers : {
      'Content-type' : 'application/json'
    },
    body : JSON.stringify({
      query : `
      query MyQuery {
        categories {
          id
          name
          slug
        }
      }
      `
    })
  })
}
async function fetchBlogDetailByID(id) {
  return fetch(process.env.URL_POSTS, {
    method : 'POST',
    headers : {
      'Content-type' : 'application/json'
    },
    body : JSON.stringify({
      query : `
      query MyQuery {
        contentComponent(where: {id: "${String(id)}"}) {
          createdAt
          heading
          id
          slug
          iconContent {
            id
            url
          }
          description
        }
      }
      `
    })
  })
}
module.exports = {fetchCategories,fetchContentPosts, fetchContentDetailsByName, fetchBlogDetailByID, fetchPostsByCategorie}