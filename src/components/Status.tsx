type StatusProps = {
    status: 'loading'| 'success' | 'error'
}
export const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'Loading...'
    }
    else if (props.status === 'success') {
        message = 'Dara fetched Successfully...'
    }
    else if (props.status === 'error') {
        message = 'Something Error...'
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}
