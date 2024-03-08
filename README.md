# React & nextJs Gist Loader

- A package help you to add github gist in react and next with username and avatar.

## Demo 

https://www.myselfraj.com/eg/gist


## Setup

```
npm i "@myselfraj/react-nextjs-github-gist"
```

## Usage

```
import GitGist from "@myselfraj/react-nextjs-github-gist";

//Somewhere in component or page 
<GitGist id={string} file={string} />
```
You can get the id from the Github url, kindly check the URL sample https://gist.github.com/{your_name}/{id}


## Default Configuration

If no props are passed to ```<GitGist id="MUST" />```, below is the default configuration applied.
```
<GitGist 
    file = "",
    width = '100%',
    height = '600px',
    getProfile = 'false',  //disables the feature that retrieves the avatar and name of the gist owner. Still you need to pass "UserName" manually, This Will depereacted in future releases to support UserName in advance Mode
    userName = '' //pass the username of the gist owner
/>
```

Currently, due to CORS (Cross-Origin Resource Sharing) restrictions, I am unable to fetch the username from GitHub using the Gist API. However, I plan to find a solution for this in future releases. In the meantime, we will have to resort to manual work. That's why you need to pass the **userName** parameter manually.




---
## How i can contribute

1. Fork the repo
2. Make changes
3. Create pull request
4. We will review it and will merge it.

> We are using Tsdx.

### Love it Drop a star on github

https://github.com/chapeee/react-nextjs-github-gist

## Authors

- [@chapeee](https://github.com/chapeee/)
- Avinash - For Class Component

## Connect with me
[LinkedIn](https://www.linkedin.com/in/myselfraj/)


Thanks to tleunen's code.