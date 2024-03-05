export default async function getUsernameFromGistUrl(userName: string) {
  return `https://api.github.com/users/`+userName;
}

//   gistUrl = String(gistUrl);
//   const parts = gistUrl.split('/');
//   const username = parts[parts.indexOf('https://gist.github.com') + 4];
//   return username;
