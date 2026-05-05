export default function WeddingTitle() {
  return (
    <>
      <div className="z-50 bg-white w-[80%] mx-auto pt-2">
        <img alt="" loading="lazy" src="/images/wedding-title-kh.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      <section className="flex flex-row justify-between items-start w-full px-14 sm:px-14 mt-6 gap-4">
        <div className="flex flex-col gap-2 items-start">
          <p className="text-foreground/70 font-sans text-sm">លោក<span className="font-bold text-[#918645] ml-1">ប៊ិន អុល</span></p>
          <p className="text-foreground/70 font-sans text-sm">អ្នកស្រី<span className="font-bold text-[#918645] ml-1">រស់ ផល</span></p>
        </div>
        <div className="flex flex-col gap-2 items-end text-right">
          <p className="text-foreground/70 font-sans text-sm">លោក<span className="font-bold text-[#918645] ml-1">ភិន ផាន</span></p>
          <p className="text-foreground/70 font-sans text-sm">អ្នកស្រី<span className="font-bold text-[#918645] ml-1">ម៉ែន វួន</span></p>
        </div>
      </section>
    </>
  );
}
