type GreetProps = {
    name: string
    msaCount?: number
    isLoggedIn: boolean
}
export const Greet = (props: GreetProps) => {
    const { msaCount = 0 } = props
    return (
        <div>
            {
                !props.isLoggedIn ? <h2>Please Login!</h2> :
                    <h1>Welcome {props.name}. You have {msaCount} unread message ! Your First TypeScript App</h1>
            }
        </div>
    )
}
