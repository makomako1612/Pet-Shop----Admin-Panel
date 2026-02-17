import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import GlobalStyles from "./GlobalStyles"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
)

