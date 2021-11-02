const LogoCloud = () => (
  <div className="bg-gray-100">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
        Trusted by over 4 very average small businesses
      </p>
      <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img className="h-12" src="/images/tuple-logo-gray-400.svg" alt="Tuple" />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img className="h-12" src="/images/statickit-logo-gray-400.svg" alt="StaticKit" />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
          <img
            className="h-12"
            src="/images/transistor-logo-gray-400.svg"
            alt="Transistor"
          />
        </div>
        <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
          <img
            className="h-12"
            src="/images/workcation-logo-gray-400.svg"
            alt="Workcation"
          />
        </div>
      </div>
    </div>
  </div>
)

export default LogoCloud
