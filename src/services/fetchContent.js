async function  fetchContentPosts() {
    return fetch(process.env.URL_POSTS,{
        method : 'POST',
        headers : {
            'Content-type':'application/json'
        },
        body : JSON.stringify({
            query : `
            query MyQuery {
              contentComponents {
                description
                heading
                id
                slug
                iconContent {
                  id
                  url
                }
              }
            }
            `
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
          content {
            json
          }
          createdAt
          heading
          id
          slug
        }
      }
      
      `
    })
  })
}
module.exports = {fetchContentPosts, fetchContentDetailsByName}