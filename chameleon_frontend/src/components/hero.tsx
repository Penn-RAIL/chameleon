import logo from '/logo.png';

export function Hero() {
  return (
    <div id="header" className="relative w-full h-[400px] overflow-hidden bg-[url('/background.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-cover bg-center opacity-90"></div>
      <div className="absolute inset-0 bg-sky-600/30"></div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-[300px]">
          <img
            src={logo}
            alt="Chameleon Logo"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
