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
module.exports = {fetchContentPosts, fetchContentDetailsByName, fetchBlogDetailByID}