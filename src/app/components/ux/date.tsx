const DateNow = () => {
    const date = new Date()
    const fullDate = date.toLocaleDateString()
    
    return (
        <div>
            {fullDate}
        </div>
    )
}
export default DateNow;