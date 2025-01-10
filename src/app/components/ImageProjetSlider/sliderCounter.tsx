const SliderCounter = () => {
    return (
        <section
        className="flex flex-col gap-2 justify-center w-full h-ful col-start-3 col-end-5 row-start-2 row-end-3 lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2 lg:ml-12 absolute"
      >
            <div className="">01</div>
            <div>
              <div className=" lg:w-1 lg:h-20 bg-black" />
            </div>
            <div className="lg:-translate-x-8 lg:px-3 lg:py-4 lg:w-[10dvw] bg-[#D9D9D9] z-50">
              <span className="lg:translate-x-5 inline-block text-3xl">02</span>
            </div>
            <div>
              <div className=" lg:w-1 lg:h-20 bg-black" />
            </div>
            <div className="">03</div>
          {/* {nameProject.map((number, index) => (
            <span key={number} className="number">
              0{index + 1}
            </span>
          ))} */}
  
      </section>
    )
}
export default SliderCounter