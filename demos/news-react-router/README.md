
# Demo: Quicklink usage in SPA(Single Page Application)
A demo showing how to use Quicklink in a single-page website.
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router).

`quicklink()` should be called once a navigation to a new route has completed in order to detect links within that route component(viewport).
Here you can use [React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router) to catch the point that route has changed. Please have a look at how `App.js` is set.

If you prefer to use [React Hooks](https://reactjs.org/docs/hooks-intro.html), you can use just one [Effect Hook](https://reactjs.org/docs/hooks-effect.html) instead of two lifecycles(`componentDidMount` and `componentDidUpdate`).

## Glitch Source
* [Link to Glitch App](https://anton-karlovskiy-quicklink-react-router.glitch.me)
* [Link to Project on Glitch](https://glitch.com/~anton-karlovskiy-quicklink-react-router)

## Installation
```
git clone https://api.glitch.com/git/anton-karlovskiy-quicklink-react-router
npm install
npm start
npm run build
```