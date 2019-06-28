## Lab: Quicklink
This demo is based on Create-React-App and React-Router.

## Dropping the Quicklink default code(inside window onload event) into public/index.html
In SPA, window-onload-event is just called one time when the website is loaded or only when it's refreshed.
And when routing, it's not called which means that it does not prefetches in-viewport links in that route component.
So we should implement quicklink for it to be called once a new route has completed.
Just dropping in the one-line code inside window-onload-event is not fully effective for all routes but for just one page which is loaded for the first time.

## Calling quicklink in componentDidMount of root component(App.js in create react app based project) i.e. after the component tree rendered
The effect is componentDidMount is called once when the website is loaded or only when it's refreshed similar to window-onload-event case.

## Calling quicklink() once a navigation to a new route has completed
You can call quicklink in componentDidUpdate as well as in ComponentDidMount since just one route is rendered at one time and componentDidMount is just called once while componentDidUpdate is called when a new route is rendered.

The workflow from quicklink README is "Detects links within the viewport".

In MPA(multi page application - traditional website) quicklink is called inside window-onload-event so every time url is changed, it's called but not in SPA.

## Demo
[Available here.]https://anton-karlovskiy-quicklink-react-router.glitch.me
[Source]https://glitch.com/~anton-karlovskiy-quicklink-react-router