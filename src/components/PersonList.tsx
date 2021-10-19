type nameListProps = {
    names: {
        fName: string
        lName: string
    }[]
}
export const PersonList = (props: nameListProps) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h2 key={name.fName} >{name.fName} {name.fName}</h2>
                )
            })}
        </div>
    )
}
