const DateNow = () => {
    const date = new Date()
    const fullDate = date.toLocaleDateString()
    
    return (
        <div className="flex items-center justify-start row-start-10 lg:row-start-5 lg:row-end-6 lg:col-start-2 lg:col-end-3">
            {fullDate}
        </div>
    )
}
export default DateNow;