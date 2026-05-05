export default function Footer() {
  return (
    <footer className="w-full grid grid-cols-1 place-items-center gap-16 pb-20">
      <div className="flex flex-col items-center gap-16 mt-5">
        <a href="https://maps.app.goo.gl/XdjfkSe2LKYDCEVc7" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:scale-105 active:scale-95 px-4 py-2 bg-transparent border-none shadow-none h-12 z-30 cursor-pointer">
            <div className="relative z-30 w-60">
              <img alt="Open Maps" loading="lazy" className="w-full h-full object-cover" src="/images/go-googlemap-button-kh.png" />
            </div>
          </button>
        </a>
      </div>
      <div className="relative w-[80%] mt-[-60px] z-20">
        <img alt="Save the Date" loading="lazy" src="/images/save-the-date.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div className="relative w-[96%] sm:w-[98%] z-20 mr-3 mt-[-80px]">
        <img alt="Pre-wedding" src="/images/da.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    </footer>
  );
}
