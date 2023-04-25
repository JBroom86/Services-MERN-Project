import { getServices } from "../../../utils/backend"

function HomePage() {
    getServices().then(services => console.log(services))

    return <h1>Homepage Page will go here!</h1>
}

export default HomePage