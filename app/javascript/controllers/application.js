import { Application } from "@hotwired/stimulus"

import UiController from "./ui_controller"

const application = Application.start()

// Configure Stimulus development experience
application.warnings = true
application.debug    = false
window.Stimulus      = application

application.register("ui", UiController)


export { application }
