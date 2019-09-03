# seb-web
A simple web server using uWebSockets.js.
The aim was to create a very simple program to read from a directory and serve its contents to the web. It is intended to be easy to build upon should more features be required in the future.

## Quick start
- Clone or download this repository to your server
- `cd [location of the repository]`
- `yarn install` or `npm i`
- `mkdir src`
- place the contents of your website in the `src` directory
- `nodejs index`

## Configuration
- To add `Content-Type` headers for specific file extensions edit the `content-type.json` file, following the existing example for svg files
- Your website must have a file named `index.html` if you want the `/` path to display something
