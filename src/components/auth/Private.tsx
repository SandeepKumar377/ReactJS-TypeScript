import Login from "./Login"
import { ProfileProps } from "./Profile"
type PrivateProps = {
    isLogedIn: boolean
    component: React.ComponentType<ProfileProps>
}
const Private = ({ isLogedIn, component: Component }: PrivateProps) => {
    if (isLogedIn) {
        return <Component name="Sandeep" />
    } else {
        return <Login />
    }
}
export default Private