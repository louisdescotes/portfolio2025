const DateNow = () => {
    const date = new Date()
    const fullDate = date.toLocaleDateString()
    
    return (
        <div className="relative left-20">
            {fullDate}
        </div>
    )
}
export default DateNow;