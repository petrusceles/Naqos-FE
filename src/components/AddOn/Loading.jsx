export default function Loading() {
  return (
    <>
      <div className="h-screen flex z-50 fixed w-screen bg-slate-100">
        <div className="grid grid-rows-2 w-full justify-center items-center my-auto lg:px-36 mx-auto">
          <div className="lg:min-w-[120px] lg:w-1/12 w-1/6 max-w-2xl lg:max-w-none flex justify-self-center self-end">
            <img
              src="https://res.cloudinary.com/dnvbade3q/image/upload/v1690963691/BasicAssets/Logo_brxwjk.svg"
              className="scale-[150%]"
            />
          </div>
          <div className="w-full ">
            <div className="h-2 w-1/2 rounded flex justify-center mx-auto bg-violet-100 overflow-hidden">
              <div className="h-2 w-3/4 rounded bg-primary animate-slideMobile100 lg:animate-slide100"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
