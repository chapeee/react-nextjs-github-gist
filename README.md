# React & Next Gist Loader

- A library made using tsdx that help you to add gist in react and next on client side with username and avatar.

## Setup

```
npm install react-nextjs-github-gist
```

## Usage

```
import GitGist from "react-nextjs-github-gist";

//Somewhere in component or page 
<GitGist id={string} file={string} />
```
You can get the id from the Github url, kindly check the URL sample https://gist.github.com/{your_name}/{id}


## Default Configuration

If no props are passed to ```<GitGist id="MUST" />```, below is the default configuration applied.
**id is must**
```
<GitGist 
    file = "",
    width = '100%',
    height = '600px',
    getProfile = 'true', //this give avatar and name of the owner of gist
    userName = '' //pass the username of the gist owner
/>
```

currently because of CORS i am unable to fetch the userame from git, yet i will figure out some way in future releases, so for now lets do manual work.

---
## How i can contribute

1. Fork the repo
2. Make changes
3. Create pull request
4. We will review it and will merge it.

>> We are using Tsdx, to build you can use ```npm run build```



## Authors

- [@chapeee](https://github.com/chapeee/)