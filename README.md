# React & Next Gist Loader

- A library made using tsdx that help you to add gist in react and next on client side with username and avatar.

## Setup

```
npm install react-nextjs-github-gist
```

## Usage

```
import GitGist from 'react-nextjs-github-gist'

//Somewhere in component or page 
<GitGist id={string} file={string} />
```

```
How to get id ?

You can get the id from the github url, kindly check the URL https://gist.github.com/{your_name}/{id}
```

## Default Configuration

If no props are passed to <GitGist />, below is the default configuration applied.
**id is must**
```
<GitGist 
    width = '100%',
    height = '600px',
    getProfile = 'true', //this give avatar and name of the owner of gist
/>
```

---
## How i can contribute

1. Fork the repo
2. Make changes
3. Create pull request
4. We will review it and will merge it.

>> We are using Tsdx, to build you can use ```npm run build```