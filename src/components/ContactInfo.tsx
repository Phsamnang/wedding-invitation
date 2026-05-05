export default function ContactInfo() {
  return (
    <section className="flex flex-col items-center w-full gap-4 mt-8">
      <h1 className="text-[#918645] font-serif text-xl font-bold">ទំនាក់ទំនងទូរស័ព្ទ</h1>
      <div className="flex flex-row justify-between w-full px-14 sm:px-16 gap-4">
        <div className="flex flex-col gap-2 items-start">
          <p className="text-foreground/80 text-sm sm:text-base">កូនប្រុសនាម</p>
          <p className="text-[#918645] font-bold text-sm sm:text-base break-all">កែម វ៉ាន់ដា</p>
          <p className="text-[#918645] font-bold text-sm sm:text-base">096 287 3576</p>
        </div>
        <div className="flex flex-col gap-2 items-end text-right">
          <p className="text-foreground/80 text-sm sm:text-base">កូនស្រីនាម</p>
          <p className="text-[#918645] font-bold text-sm sm:text-base break-all">ចឺក គីមហេង</p>
          <p className="text-[#918645] font-bold text-sm sm:text-base">097 277 1720</p>
        </div>
      </div>
      <div className="flex gap-4 items-center mt-2" style={{ filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }}>
        <div className="relative w-4 h-4">
          <img alt="decoration" loading="lazy" className="w-full h-full object-cover" src="/images/small-embroidery-2.webp" />
        </div>
        <div className="w-4 h-4 rounded-full bg-black flex justify-center items-center">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="10" width="10" xmlns="http://www.w3.org/2000/svg" className="text-white"><path d="M8 16a4 4 0 0 0 4-4 4 4 0 0 0 0-8 4 4 0 0 0-8 0 4 4 0 1 0 0 8 4 4 0 0 0 4 4m3-12q0 .11-.03.247c-.544.241-1.091.638-1.598 1.084A3 3 0 0 0 8 5c-.494 0-.96.12-1.372.331-.507-.446-1.054-.843-1.597-1.084A1 1 0 0 1 5 4a3 3 0 0 1 6 0m-.812 6.052A3 3 0 0 0 11 8a3 3 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a7 7 0 0 1-.647-.487m-3.56.617a3 3 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084q.03.137.03.247a3 3 0 1 1-6 0q0-.11.03-.247c.544-.242 1.091-.638 1.598-1.084m-.816-4.721A3 3 0 0 0 5 8c0 .794.308 1.516.812 2.052a7 7 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487M8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2"></path></svg>
        </div>
        <div className="relative w-4 h-4">
          <img alt="decoration" loading="lazy" className="w-full h-full object-cover" src="/images/small-embroidery-2.webp" />
        </div>
      </div>
    </section>
  );
}
