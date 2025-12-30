import DisplayController from './DisplayController'
import Admin from './Admin'
import Settings from './Settings'
const Controllers = {
    DisplayController: Object.assign(DisplayController, DisplayController),
Admin: Object.assign(Admin, Admin),
Settings: Object.assign(Settings, Settings),
}

export default Controllers