import Corner from "./corner"

const CornerLayout = () => {
    return(
        <section className="absolute flex flex-col justify-between w-full h-full p-8 z-10">
            <div className="w-full flex items-top justify-between">
                <Corner angle={180} />
                <Corner angle={-90}/>
            </div>
            <div className="w-full flex items-bottom justify-between">
                <Corner angle={90}/>
                <Corner angle={0}/>
            </div>
        </section>
    )
}
export default CornerLayout