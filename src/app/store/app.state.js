/** ****************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Thu Mar 15 2018
 *  File : app.state.js
 ****************************************** */
import { observable, computed, action } from 'mobx'

export class AppState {
  @observable count = 0
  @observable name = 'nj'
  @computed get msg() {
    return `${this.name} say ${this.count}`
  }
  @action add() {
    this.count += 1
  }
}

const appState = new AppState()


setInterval(() => {
  appState.add()
}, 1000)

export default appState
