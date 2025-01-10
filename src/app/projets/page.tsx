import ThreeScene from "../scene/Scene"

const Page = () => {
  return(
    <main className="absolute w-full h-dvh grid grid-cols-[.1fr,1fr,1fr,1fr,.1fr] grid-rows-10 gap-4 lg:grid-cols-[0.5fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,0.5fr] lg:grid-rows-[0.5fr,1fr,1fr,1fr,0.5fr]">
      <p className=" h-full w-full flex items-end justify-center text-center lg:col-start-5 lg:col-end-6 lg:row-start-4 lg:row-end-5 top-0 left-0 z-50 text-black">Spikes</p>
      <ThreeScene />
    </main>
  )
}
export default Page