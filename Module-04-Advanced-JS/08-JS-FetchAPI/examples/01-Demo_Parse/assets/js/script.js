async function doTheFetch(){
  
  const response = await fetch('https://api.github.com/orgs/twitter/public_members')
  const data = await response.json()

    console.log(data);

fetch('https://api.github.com/orgs/twitter/repos')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Twitter Repositories: Names only \n----------');
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }
  });
}
