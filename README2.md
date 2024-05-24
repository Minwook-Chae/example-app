# v0.dev and CICD with Github Actions

## Setup

1. You need [Node.js](https://nodejs.org/en) installed

   - Node.js is a local javascript runtime
   - We need this because v0.dev uses [React](https://react.dev/), which is a javascript framework

2. You need a [Github](https://github.com/) account

3. You need to sign up on [v0.dev](https://v0.dev/) with your github account

## The v0.dev part

_If you want to see the actual [docs](https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app)_

1. Make something on [v0.dev](https://v0.dev/)

![v0.dev prompt](https://raw.githubusercontent.com/Minwook-Chae/example-app/master/markdown-images/v0dev-prompt.PNG)

<p align="center">Just type whatever and generate</p>

2. Click the code </> button to view the code

![code </> button](https://github.com/Minwook-Chae/example-app/blob/master/markdown-images/code-button.PNG?raw=true)

3. Remember this command for later to add in your v0.dev components

![the add code cli command](https://github.com/Minwook-Chae/example-app/blob/master/markdown-images/add-code-command.PNG?raw=true)

## The local stuff part

1. Assuming you have Node.js installed, run this command where you want your project to be located to create a Next.js webapplication

   `npx create-next-app@latest --typescript --tailwind --eslint`

   <img src="https://github.com/Minwook-Chae/example-app/blob/master/markdown-images/terminal.PNG?raw=true" alt="image of terminal" style="border:3px solid red">

2. Navigate to the project directory and run this command to initialize the project for v0.dev

   `npx v0@latest init`

   <img src="https://github.com/Minwook-Chae/example-app/blob/master/markdown-images/terminal2.PNG?raw=true" alt="image of terminal" style="border:3px solid red">

3. Now use that cli command from before from v0.dev to add in the code you generated in the top level directory of the project

   `npx v0 add [some-id]`

   <img src="https://github.com/Minwook-Chae/example-app/blob/master/markdown-images/terminal3.PNG?raw=true" alt="image of terminal" style="border:3px solid red">

4. Your project should now have a new component under the components directory

   <img src="https://github.com/Minwook-Chae/example-app/blob/master/markdown-images/components-directory.PNG?raw=true" alt="components directory structure" style="border:3px solid red">

5. Open the new files you added in vscode to check if v0.dev generated mistakes in the code

    <img src="https://github.com/Minwook-Chae/example-app/blob/master/markdown-images/errors.PNG?raw=true" alt="errors" style="border:3px solid red">

   For example, v0dev is using the `<img>` tag instead of the `<Image>` tag provided by next.js

    <img src="https://github.com/Minwook-Chae/example-app/blob/master/markdown-images/errors2.PNG?raw=true" alt="errors" style="border:3px solid red">

6. Change page.tsx under project-root/src/app so it looks like this...

   ```typescript
   import { Component } from "@/components/component/component";

   export default function Home() {
     return <Component />;
   }
   ```

    <img src="https://github.com/Minwook-Chae/example-app/blob/master/markdown-images/change-page.PNG?raw=true" alt="new page.tsx" style="border:3px solid red">

## The Github part

1. Upload the code to Github as a public repository

2. Go to Settings -> Pages -> Build and deployment -> Change source to Github Actions

<img src="https://github.com/Minwook-Chae/example-app/blob/master/markdown-images/change-source.PNG?raw=true" alt="change source" style="border:3px solid red">

3. Select configure on the Next.js option

   If that option is not there as a suggested default, click the browse all workflows link and look under the Pages category
   <img src="https://github.com/Minwook-Chae/example-app/blob/master/markdown-images/nextjs-config.PNG?raw=true" alt="configure nextjs" style="border:3px solid red">

4. Commit the changes

5. Go to the repo's Actions tab to monitor the process and check for errors
   <img src="https://github.com/Minwook-Chae/example-app/blob/master/markdown-images/actions.PNG?raw=true" alt="actions tab view" style="border:3px solid red">

6. You can click on the workflow to see more details
   <img src="https://github.com/Minwook-Chae/example-app/blob/master/markdown-images/workflow-details.PNG?raw=true" alt="workflow details" style="border:3px solid red">
