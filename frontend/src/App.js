import React, { Component } from 'react'
import App from 'base-shell/lib'
import MUIConfig from 'material-ui-shell/lib'
import merge from 'base-shell/lib/utils/config'
import _config from './config'

const config = merge(MUIConfig, _config)

export default class Paradis extends Component {
  render() {
    return <App config={config} />
  }
}
