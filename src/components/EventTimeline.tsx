export default function EventTimeline() {
  return (
    <>
      {/* Day 1 Timeline */}
      <section className="mt-16 mb-4 flex flex-col items-center w-full gap-10">
        <h1 className="text-[#918645] font-serif text-sm sm:text-base md:text-lg text-center px-4 sm:px-6 leading-7 sm:leading-8 w-full">
          <span className="block font-bold">កម្មវិធីថ្ងៃទី១៖</span>
          <span className="block text-[14px] sm:text-sm md:text-base">ថ្ងៃសុក្រ ទី ២០ ខែវិច្ឆកា ឆ្នាំ២០២៦ (ថ្ងៃចូលរោងជ័យ)</span>
        </h1>
        <div className="relative w-[70%] flex flex-col gap-3 text-sm text-foreground/80 font-sans leading-relaxed">
          <div className="flex flex-col">
            <div style={{ display: "grid", gridTemplateColumns: "24px 1fr", columnGap: "8px" }}>
              <img alt="" src="/icons/yajna.png" style={{ width: "24px", height: "24px", objectFit: "contain", gridArea: "1 / 1 / 3", alignSelf: "center", filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }} />
              <span className="whitespace-nowrap font-bold" style={{ gridArea: "1 / 2" }}>ម៉ោង ៣:០០ រសៀល</span>
              <span className="break-words" style={{ gridArea: "2 / 2" }}>ពិធីសែនក្រុងពាលី</span>
            </div>
            <div style={{ margin: "8px 0px", height: "1px", backgroundColor: "rgb(145, 134, 69)", opacity: 0.25, boxShadow: "rgba(145, 134, 69, 0.2) 0px 0px 4px 1px", borderRadius: "999px" }}></div>
          </div>
          <div className="flex flex-col">
            <div style={{ display: "grid", gridTemplateColumns: "24px 1fr", columnGap: "8px" }}>
              <img alt="" src="/icons/praying.png" style={{ width: "24px", height: "24px", objectFit: "contain", gridArea: "1 / 1 / 3", alignSelf: "center", filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }} />
              <span className="whitespace-nowrap font-bold" style={{ gridArea: "1 / 2" }}>ម៉ោង ៤:០០ រសៀល</span>
              <span className="break-words" style={{ gridArea: "2 / 2" }}>ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត</span>
            </div>
            <div style={{ margin: "8px 0px", height: "1px", backgroundColor: "rgb(145, 134, 69)", opacity: 0.25, boxShadow: "rgba(145, 134, 69, 0.2) 0px 0px 4px 1px", borderRadius: "999px" }}></div>
          </div>
          <div className="flex flex-col">
            <div style={{ display: "grid", gridTemplateColumns: "24px 1fr", columnGap: "8px" }}>
              <img alt="" src="/icons/banquet.png" style={{ width: "24px", height: "24px", objectFit: "contain", gridArea: "1 / 1 / 3", alignSelf: "center", filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }} />
              <span className="whitespace-nowrap font-bold" style={{ gridArea: "1 / 2" }}>ម៉ោង ៥:០០ រសៀល</span>
              <span className="break-words" style={{ gridArea: "2 / 2" }}>អញ្ជើញភ្ញៀវកិត្តិយស ពិសាអាហារពេលល្ងាច</span>
            </div>
            <div style={{ margin: "8px 0px", height: "1px", backgroundColor: "rgb(145, 134, 69)", opacity: 0.25, boxShadow: "rgba(145, 134, 69, 0.2) 0px 0px 4px 1px", borderRadius: "999px" }}></div>
          </div>
        </div>
      </section>

      {/* Day 2 Timeline */}
      <section className="mt-1 mb-4 flex flex-col items-center w-full gap-10">
        <h1 className="text-[#918645] font-serif text-sm sm:text-base md:text-lg text-center px-4 sm:px-6 leading-7 sm:leading-8 w-full">
          <span className="block font-bold">កម្មវិធីថ្ងៃទី២៖</span>
          <span className="block text-[14px] sm:text-sm md:text-base">ថ្ងៃអាទិត្យ ទី២៦ ខែមេសា ឆ្នាំ២០២៦ (ថ្ងៃកំណត់)</span>
        </h1>
        <div className="relative w-[70%] flex flex-col gap-3 text-sm text-foreground/80 font-sans leading-relaxed">
          <div className="flex flex-col">
            <div style={{ display: "grid", gridTemplateColumns: "24px 1fr", columnGap: "8px" }}>
              <img alt="" src="/icons/apple.png" style={{ width: "24px", height: "24px", objectFit: "contain", gridArea: "1 / 1 / 3", alignSelf: "center", filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }} />
              <span className="whitespace-nowrap font-bold" style={{ gridArea: "1 / 2" }}>ម៉ោង ៦:៣០ នាទីព្រឹក</span>
              <span className="break-words" style={{ gridArea: "2 / 2" }}>ជួបជុំសាច់ញាតិ ភ្ញៀវកិត្តិយស ដើម្បីរៀបចំពិធីហែជំនួន</span>
            </div>
            <div style={{ margin: "8px 0px", height: "1px", backgroundColor: "rgb(145, 134, 69)", opacity: 0.25, boxShadow: "rgba(145, 134, 69, 0.2) 0px 0px 4px 1px", borderRadius: "999px" }}></div>
          </div>
          <div className="flex flex-col">
            <div style={{ display: "grid", gridTemplateColumns: "24px 1fr", columnGap: "8px" }}>
              <img alt="" src="/icons/wedding-arch.png" style={{ width: "24px", height: "24px", objectFit: "contain", gridArea: "1 / 1 / 3", alignSelf: "center", filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }} />
              <span className="whitespace-nowrap font-bold" style={{ gridArea: "1 / 2" }}>ម៉ោង ៧:០០ នាទីព្រឹក</span>
              <span className="break-words" style={{ gridArea: "2 / 2" }}>ពិធីហែជំនួនទទួលផ្កាស្លាចូលរោងជ័យ</span>
            </div>
            <div style={{ margin: "8px 0px", height: "1px", backgroundColor: "rgb(145, 134, 69)", opacity: 0.25, boxShadow: "rgba(145, 134, 69, 0.2) 0px 0px 4px 1px", borderRadius: "999px" }}></div>
          </div>
          <div className="flex flex-col">
            <div style={{ display: "grid", gridTemplateColumns: "24px 1fr", columnGap: "8px" }}>
              <img alt="" src="/icons/soup-bowl.png" style={{ width: "24px", height: "24px", objectFit: "contain", gridArea: "1 / 1 / 3", alignSelf: "center", filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }} />
              <span className="whitespace-nowrap font-bold" style={{ gridArea: "1 / 2" }}>ម៉ោង ៧:៣០ នាទីព្រឹក</span>
              <span className="break-words" style={{ gridArea: "2 / 2" }}>អញ្ជើញភ្ញៀវកិត្តិយស ពិសាអាហារពេលព្រឹក</span>
            </div>
            <div style={{ margin: "8px 0px", height: "1px", backgroundColor: "rgb(145, 134, 69)", opacity: 0.25, boxShadow: "rgba(145, 134, 69, 0.2) 0px 0px 4px 1px", borderRadius: "999px" }}></div>
          </div>
          <div className="flex flex-col">
            <div style={{ display: "grid", gridTemplateColumns: "24px 1fr", columnGap: "8px" }}>
              <img alt="" src="/icons/hair-cut-tool.png" style={{ width: "24px", height: "24px", objectFit: "contain", gridArea: "1 / 1 / 3", alignSelf: "center", filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }} />
              <span className="whitespace-nowrap font-bold" style={{ gridArea: "1 / 2" }}>ម៉ោង ៩:០០ នាទីព្រឹក</span>
              <span className="break-words" style={{ gridArea: "2 / 2" }}>ពិធីកាត់សក់បង្កក់សិរី</span>
            </div>
            <div style={{ margin: "8px 0px", height: "1px", backgroundColor: "rgb(145, 134, 69)", opacity: 0.25, boxShadow: "rgba(145, 134, 69, 0.2) 0px 0px 4px 1px", borderRadius: "999px" }}></div>
          </div>
          <div className="flex flex-col">
            <div style={{ display: "grid", gridTemplateColumns: "24px 1fr", columnGap: "8px" }}>
              <img alt="" src="/icons/wedding.png" style={{ width: "24px", height: "24px", objectFit: "contain", gridArea: "1 / 1 / 3", alignSelf: "center", filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }} />
              <span className="whitespace-nowrap font-bold" style={{ gridArea: "1 / 2" }}>ម៉ោង ១០:៣០ នាទីព្រឹក</span>
              <span className="break-words" style={{ gridArea: "2 / 2" }}>ពិធីសំពះផ្ទឹម បង្វិលពពិល សែនជីដូន ជីតា បាចផ្កាស្លា ចងដៃ</span>
            </div>
            <div style={{ margin: "8px 0px", height: "1px", backgroundColor: "rgb(145, 134, 69)", opacity: 0.25, boxShadow: "rgba(145, 134, 69, 0.2) 0px 0px 4px 1px", borderRadius: "999px" }}></div>
          </div>
          <div className="flex flex-col">
            <div style={{ display: "grid", gridTemplateColumns: "24px 1fr", columnGap: "8px" }}>
              <img alt="" src="/icons/banquet.png" style={{ width: "24px", height: "24px", objectFit: "contain", gridArea: "1 / 1 / 3", alignSelf: "center", filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }} />
              <span className="whitespace-nowrap font-bold" style={{ gridArea: "1 / 2" }}>ម៉ោង ១១:០០ នាទីព្រឹក</span>
              <span className="break-words" style={{ gridArea: "2 / 2" }}>អញ្ជើញភ្ញៀវពិសាអាហារថ្ងៃត្រង់</span>
            </div>
            <div style={{ margin: "8px 0px", height: "1px", backgroundColor: "rgb(145, 134, 69)", opacity: 0.25, boxShadow: "rgba(145, 134, 69, 0.2) 0px 0px 4px 1px", borderRadius: "999px" }}></div>
          </div>
          <div className="flex flex-col">
            <div style={{ display: "grid", gridTemplateColumns: "24px 1fr", columnGap: "8px" }}>
              <img alt="" src="/icons/wine.png" style={{ width: "24px", height: "24px", objectFit: "contain", gridArea: "1 / 1 / 3", alignSelf: "center", filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }} />
              <span className="whitespace-nowrap font-bold" style={{ gridArea: "1 / 2" }}>ម៉ោង ៥:០០ ល្ងាច</span>
              <span className="break-words" style={{ gridArea: "2 / 2" }}>អញ្ជើញភ្ញៀវកិត្តិយសពិសាភោជនាហារ ពេលល្ងាច ដោយមេត្រីភាព។</span>
            </div>
            <div style={{ margin: "8px 0px", height: "1px", backgroundColor: "rgb(145, 134, 69)", opacity: 0.25, boxShadow: "rgba(145, 134, 69, 0.2) 0px 0px 4px 1px", borderRadius: "999px" }}></div>
          </div>
        </div>
      </section>
    </>
  );
}
