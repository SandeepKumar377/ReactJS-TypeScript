import { Name } from './Person.types'
type nameListProps = {
    names: Name[]
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
