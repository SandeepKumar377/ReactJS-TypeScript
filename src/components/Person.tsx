import { PersonProps } from './Person.types'
export const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.fName} {props.name.lName}
        </div>
    )
}
