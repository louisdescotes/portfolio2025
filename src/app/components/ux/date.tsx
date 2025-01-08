const DateNow = () => {
    const date = new Date()
    const fullDate = date.toLocaleDateString()
    
    return (
        <div className="relative left-0 pl-10 lg:pl-20 z-50 cursor-auto">
            {fullDate}
        </div>
    )
}
export default DateNow;