type PersonProps={
    name:{
        fName:string
        lName:string
    }
}
export const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.fName} {props.name.lName}
        </div>
    )
}
