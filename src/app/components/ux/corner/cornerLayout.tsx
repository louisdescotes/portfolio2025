import Corner from "./corner"

const CornerLayout = () => {
    return(
        <>
            <div className="z-20 flex items-center justify-center row-start-1 col-start-1 row-end-2 col-end-2 lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2 ">
                <Corner angle={180} />
            </div>
            <div className="z-20 flex items-center justify-center row-start-1 col-start-5 row-end-2 col-end-6 lg:row-start-1 lg:row-end-2 lg:col-start-9 lg:col-end-10 ">
                <Corner angle={-90} />
            </div>
            <div className="z-20 flex items-center justify-center row-start-10 col-start-1 row-end-10 col-end-2 lg:row-start-5 lg:row-end-6 lg:col-start-1 lg:col-end-2 ">
                <Corner angle={90} />
            </div>
            <div className="z-20 flex items-center justify-center row-start-10 col-start-5 row-end-10 col-end-6 lg:row-start-5 lg:row-end-6 lg:col-start-9 lg:col-end-10  ">
                <Corner angle={0} />
            </div>
        </>
    )
}
export default CornerLayout