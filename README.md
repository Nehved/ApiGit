# React.js application

## Next.js

The current application is based on [Next.js 2](https://github.com/zeit/next.js). 
It allows for server side rendeing (SSR) as well as comes with pre-defined development environment.

[This](https://zeit.co/blog/next2) and [this](https://zeit.co/blog/next3) articles give a very good overview and contains many examples of implementations.

## Structure overview

- `components/` - Folder for storage of all application components.
  - `GlobalFooter` - Example of a simple component which defines footer appearing on every page.
  - `GlobalHeader` - Example of complex component for global siteside header. Ships with example for sticky header behavior and expansion on toggle button click for mobile devices. 
  - `HtmlHead` - Contains content placed inside of `<head/>` element for each page.
  - `Layouts` - Contains example of layout for all pages.
  - `MainMenu` - Contains main menu which appears within page header.
  - `PageWithContext` - Special component which provides `pathname` context to all other components. All pages from `pages/` folder **MUST** inherit from this component.
  - `ProgressBar` - A small component which adds a loading bar at the top of the page when a user clicks on another page link. Based on [NProgress library](http://ricostacruz.com/nprogress/).
- `lib/` - Folder for application-wide scripts.
  - `request.js` - Contains configured agent for ajax requests to the backend. See below for example of usage.
  - `url.js`- Contains URLs of the backend for production and development. See below for example of usage.
- `pages/` - Contains all available application pages.
  - `about.js` - A simple example of a page. 
  - `index.js` - A simple example of front page.
- `static/` - Folder which stores any files accessible via web url. All files stored in this folder will be accessible at `http://app.docker.localhost/static/folder/filename.ext`
  - `images/` - Folder which stores images for the application.
  - `robots.txt` - [Robots.txt](http://www.robotstxt.org/robotstxt.html) file for search engines.
- `.babelrc` - A file with configuration for code transpilation. Usually you'll want to leave it as it is.
- `.eslintrc.json` - A file with pre-defined code style guidelines.
- `next.config.js` - A file with custom configurarion on top of Next.js pre-defined configs for `webpack`.
- `server.js` - A file which describes node.js behavior as a server.


