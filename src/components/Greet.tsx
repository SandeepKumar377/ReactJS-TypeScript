type GreetProps={
    name: string
}
export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h1>Welcome {props.name} ! Your First TypeScript App</h1>
        </div>
    )
}
