/** ****************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Wed Mar 14 2018
 *  File : index.js
 ****************************************** */
import AppStateClass from './app.state'

export const AppState = AppStateClass

export default {
  AppState,
}

export const createStoreMap = () => ({
  appState: new AppStateClass(),
})
