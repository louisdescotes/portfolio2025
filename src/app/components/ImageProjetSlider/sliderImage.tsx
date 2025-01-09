import Image from "next/image"

const SliderImage = () => {
    return (
        <aside className="w-full h-full col-start-2 col-end-5 row-start-3 row-end-9 lg:row-start-2 lg:row-end-5 lg:col-start-2 lg:col-end-9">
            <Image className="w-full object-cover h-full" src="/one.jpg" alt="disque" width={1128} height={632} />
              <div className=" h-18 flex justify-center items-center pt-4">
                <h3 className="">Sparky</h3>
              </div>
            {/* <div className="flex flex-col gap-4 max-h-12 w-fit overflow-hidden">
          {nameProject.map((number) => (
            <div className="projet h-18 flex items-center" key={number}>
              <h3 className="">{number}</h3>
            </div>
          ))}
        </div> */}
      </aside>
    )
}
export default SliderImage