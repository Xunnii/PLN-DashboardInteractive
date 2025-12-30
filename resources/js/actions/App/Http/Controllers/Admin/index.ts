import DisplayImageController from './DisplayImageController'
import DisplayVideoController from './DisplayVideoController'
import KontainerBawahController from './KontainerBawahController'
const Admin = {
    DisplayImageController: Object.assign(DisplayImageController, DisplayImageController),
DisplayVideoController: Object.assign(DisplayVideoController, DisplayVideoController),
KontainerBawahController: Object.assign(KontainerBawahController, KontainerBawahController),
}

export default Admin