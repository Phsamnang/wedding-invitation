export default function DecorativeFrames() {
  return (
    <>
      {/* Preload images (hidden) */}
      <div aria-hidden="true" style={{ position: "absolute", visibility: "hidden", width: "0px", height: "0px", overflow: "hidden" }}>
        <img alt="" loading="eager" src="/images/img01.webp" />
        <img alt="" loading="eager" src="/images/img02.webp" />
        <img alt="" loading="eager" src="/images/img03.webp" />
        <img alt="" loading="lazy" src="/images/img04.webp" />
        <img alt="" loading="lazy" src="/images/img05.webp" />
      </div>

      {/* Left and Right Frames */}
      <div className="w-full max-w-[500px] fixed top-48 left-1/2 flex justify-end -translate-x-1/2 z-20 pointer-events-none">
        <div className="relative w-10 h-full">
          <img alt="" loading="lazy" src="/images/frame.webp" style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scaleX(-1)" }} />
        </div>
      </div>
      <div className="w-full max-w-[500px] fixed top-48 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="relative w-10 h-full">
          <img alt="" loading="lazy" src="/images/frame.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Bottom Corner Flowers */}
      <div className="fixed w-full max-w-[500px] bottom-0 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <div className="absolute xs:w-52 w-44 bottom-0 left-0 z-30">
          <img alt="" className="w-full h-full object-cover" src="/images/flower-frame.webp" />
        </div>
        <div className="absolute xs:w-52 w-44 bottom-0 right-0 z-30">
          <img alt="" className="w-full h-full object-cover" src="/images/flower-frame.webp" style={{ transform: "scaleX(-1)" }} />
        </div>
      </div>
    </>
  );
}
