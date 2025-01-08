import Corner from "./corner"

const CornerLayout = () => {
    return(
        <section className="absolute flex flex-col justify-between w-full h-full p-8 -z-10">
            <div className="w-full flex items-top justify-between">
                <Corner />
                <Corner angle={2}/>
            </div>
            <div className="w-full flex items-bottom justify-between">
                <Corner angle={4}/>
                <Corner angle={3}/>
            </div>
        </section>
    )
}
export default CornerLayout