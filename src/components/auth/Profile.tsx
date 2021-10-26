export type ProfileProps={
    name:string
}
const Profile = ({name}:ProfileProps) => {
    return (
        <div>This Private Profile! Name is {name}</div>
    )
}

export default Profile