/** ****************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Thu Mar 15 2018
 *  File : app.state.js
 ****************************************** */
import { observable } from 'mobx'

class AppState {
  @observable count = 0
}

const appState = new AppState()

export default appState
