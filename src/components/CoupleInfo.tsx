export default function CoupleInfo() {
  return (
    <section className="flex flex-col items-center gap-4 mt-4 w-full">
      <div className="relative w-10 h-auto">
        <img alt="Embroidery" loading="lazy" width="43" height="12" className="w-full h-full object-cover" src="/images/small-embroidery.webp" style={{ filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }} />
      </div>
      
      <h1 className="text-[#918645] font-serif text-xl">សូមគោរពអញ្ជើញ</h1>
      <p className="px-16 text-center text-sm text-foreground/80 leading-6">
        សម្ដេច ទ្រង់ ឯកឧត្តម អ្នកឧកញ៉ា លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្ត អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិពរជ័យ សិរីសួស្ដី ជ័យមង្គល ក្នុង ពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស កូនស្រី របស់ពួកយើងខ្ញុំ។
      </p>

      <section className="w-full flex flex-col items-center mt-4">
        <div className="w-full flex justify-between items-end px-14">
          <div className="flex flex-col gap-2 items-center">
            <div className="w-28 h-36 sm:w-32 sm:h-40 overflow-hidden rounded-2xl" style={{ border: "2px solid rgb(145, 134, 69)", boxShadow: "rgba(145, 134, 69, 0.3) 0px 4px 12px" }}>
              <img alt="Groom" loading="lazy" className="w-full h-full object-cover object-top" src="/images/da.jpg" />
            </div>
            <p className="text-foreground/70 text-sm">កូនប្រុសនាម</p>
            <p className="text-[#918645] font-bold">កែម វ៉ាន់ដា</p>
          </div>
          
          <div className="flex flex-col items-center mb-1">
            <img alt="" loading="lazy" className="w-10 h-10 sm:w-12 sm:h-12 object-cover" src="/images/hear-wedding.png" style={{ filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }} />
          </div>
          
          <div className="flex flex-col gap-2 items-center">
            <div className="w-28 h-36 sm:w-32 sm:h-40 overflow-hidden rounded-2xl" style={{ border: "2px solid rgb(145, 134, 69)", boxShadow: "rgba(145, 134, 69, 0.3) 0px 4px 12px" }}>
              <img alt="Bride" loading="lazy" className="w-full h-full object-cover object-center" src="/images/da.jpg" />
            </div>
            <p className="text-foreground/70 text-sm">កូនស្រីនាម</p>
            <p className="text-[#918645] font-bold">ចឺក គីមហេង</p>
          </div>
        </div>
      </section>

      <p className="px-16 text-center text-sm text-foreground/80 leading-6 mt-6">
        ដែលប្រព្រឹត្តទៅនៅថ្ងៃ<span className="text-[#918645] font-bold"> សៅរ៍ ១២កើត ខែ កត្តិក ឆ្នាំ មមី អដ្ឋស័ក ព.ស.២៥៦៩ ត្រូវនឹងថ្ងៃ ២១ ខែវិច្ឆកា ឆ្នាំ២០២៦ </span>វេលាម៉ោង ៥ៈ០០ ល្ងាច នៅ គេហដ្ឋានខាងស្រី ភូមិក្រែក ឃុំក្រែកជើង ស្រុកពញាក្រែក ខេត្តត្បូងឃ្មុំ ដោយមេត្រីភាព.
      </p>
      <p className="mt-2 text-sm text-[#918645] font-bold">(សូមមើលប្លង់បញ្ជាក់) សូមអរគុណ</p>

      <div className="flex gap-4 mt-4" style={{ filter: "invert(55%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(85%)" }}>
        <div className="relative w-4 h-auto">
          <img alt="Decoration Left" loading="lazy" width="48" height="46" className="w-full h-full object-cover" src="/images/small-embroidery-2.webp" />
        </div>
        <div className="w-4 h-4 rounded-full bg-black flex justify-center items-center">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="10" width="10" xmlns="http://www.w3.org/2000/svg" className="text-white"><path d="M8 16a4 4 0 0 0 4-4 4 4 0 0 0 0-8 4 4 0 0 0-8 0 4 4 0 1 0 0 8 4 4 0 0 0 4 4m3-12q0 .11-.03.247c-.544.241-1.091.638-1.598 1.084A3 3 0 0 0 8 5c-.494 0-.96.12-1.372.331-.507-.446-1.054-.843-1.597-1.084A1 1 0 0 1 5 4a3 3 0 0 1 6 0m-.812 6.052A3 3 0 0 0 11 8a3 3 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a7 7 0 0 1-.647-.487m-3.56.617a3 3 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084q.03.137.03.247a3 3 0 1 1-6 0q0-.11.03-.247c.544-.242 1.091-.638 1.598-1.084m-.816-4.721A3 3 0 0 0 5 8c0 .794.308 1.516.812 2.052a7 7 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487M8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2"></path></svg>
        </div>
        <div className="relative w-4 h-auto">
          <img alt="Decoration Right" loading="lazy" width="48" height="46" className="w-full h-full object-cover" src="/images/small-embroidery-2.webp" />
        </div>
      </div>
    </section>
  );
}
