import Vue from 'vue'
import { ModalController, Modal } from './Modal'

const $modal = new ModalController()

export default class ModalWrapper {
  static install() {
    Vue.component(Modal.name, Modal)
    Vue.prototype.$modal = $modal
  }
}

export { $modal, Modal, ModalController }
