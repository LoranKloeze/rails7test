import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="ui"
export default class extends Controller {
  connect() {
  }

  doit() {
    console.log('Someone clicked that button v2')
  }
}
