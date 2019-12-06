import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

export const render = (rootComponent, domElement, serverRenderer) => {
  if (navigator.userAgent.match(/Node\.js/i) && window && window.reactSnapshotRender) {
    let html
    if (serverRenderer) {
      html = serverRenderer(ReactDOMServer.renderToString, rootComponent)
    } else {
      html = ReactDOMServer.renderToString(rootComponent)
    }
    domElement.innerHTML = html
    window.reactSnapshotRender()
  } else {
    ReactDOM.createRoot(domElement, { hydrate: true }).render(rootComponent)
  }
}
