"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LandingScreen() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100vh" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex justify-center bg-background overflow-y-auto"
    >
      <main className="min-h-[100dvh] w-full max-w-[500px] overflow-hidden bg-background relative shadow-2xl">
        <div className="flex justify-between">
          <div className="relative w-24">
            <img alt="Flower decoration" loading="lazy" width="95" height="85" style={{ objectFit: "cover" }} src="/images/shape-tl.webp" />
          </div>
          <div className="relative w-24">
            <img alt="Top right decoration" loading="lazy" width="117" height="103" style={{ objectFit: "cover" }} src="/images/shape-tr.webp" />
          </div>
        </div>
        
        <div className="relative flex justify-center items-center flex-col gap-10 sm:-top-12 -top-16">
          <div className="absolute top-0 left-0 w-full">
            <img alt="" loading="lazy" src="/images/shape-center.webp" className="w-full h-auto object-cover" />
          </div>
          <div className="pt-20 flex flex-col gap-10 items-center justify-center">
            <div className="relative w-52">
              <img alt="Wedding Title" loading="lazy" src="/images/wedding-title-kh-color.png" className="w-full h-full object-cover" />
            </div>
            <div className="relative w-52">
              <img alt="Name Initial" loading="lazy" src="/images/shom-img-kh.png" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-xl font-serif max-w-[200px] text-center leading-[2rem]" style={{ color: "#b4aed1" }}>
              សូមគោរពអញ្ជើញជាភ្ញៀវកិត្តិយស
            </h1>
            <button 
              onClick={() => router.push('/details')}
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-transform hover:scale-105 active:scale-95 px-4 py-2 bg-transparent border-none shadow-none h-12 z-30 cursor-pointer"
            >
              <div className="relative z-30 w-60">
                <img alt="Click to join" loading="lazy" src="/images/click-to-join-button-kh.png" className="w-full h-full object-cover" />
              </div>
            </button>
            <h2 className="font-serif text-lg" style={{ color: "#b4aed1" }}>ថ្ងៃសៅរ៍ ទី ២១ ខែវិច្ឆកា ឆ្នាំ២០២៦</h2>
            <p className="text-sm text-center w-1/2" style={{ color: "#8e7e78" }}>
              <span className="font-bold">វេលាម៉ោង ៥:០០ ល្ងាច</span> 
              <br/>នៅ គេហដ្ឋានខាងស្រី ភូមិក្រែក ឃុំក្រែកជើង ស្រុកពញាក្រែក ខេត្តត្បូងឃ្មុំ ដោយមេត្រីភាព<br />
              <span className="font-bold">(សូមមើលប្លង់បញ្ជាក់)</span>
            </p>
          </div>
        </div>

        <div className="relative top-40 left-2">
          <div className="absolute w-52 bottom-10 sm:-left-28 -left-20">
            <img src="/images/small-flower.webp" alt="" loading="lazy" width="552" height="981" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute w-52 bottom-5 sm:-left-20 -left-24">
            <img src="/images/small-flower.webp" alt="" loading="lazy" width="552" height="981" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute w-44 -bottom-40 -left-24">
            <img src="/images/flower.webp" alt="" loading="lazy" width="456" height="1095" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute w-44 -bottom-52 sm:-left-28 -left-20">
            <img src="/images/flower.webp" alt="" loading="lazy" width="456" height="1095" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute w-44 -bottom-10 -left-4">
            <img src="/images/small-flower.webp" alt="" loading="lazy" width="552" height="981" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute w-52 -bottom-64 left-20">
            <img src="/images/small-flower.webp" alt="" loading="lazy" width="552" height="981" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute w-64 -rotate-[5deg] -bottom-[440px] -left-4">
            <img src="/images/flower.webp" alt="" loading="lazy" width="456" height="1095" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute w-64 -rotate-[5deg] -bottom-[400px] -left-24">
            <img src="/images/flower.webp" alt="" loading="lazy" width="456" height="1095" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute -rotate-[5deg] w-52 -bottom-36 left-16">
            <img src="/images/small-flower.webp" alt="" loading="lazy" width="552" height="981" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute -rotate-[5deg] w-52 -bottom-32 left-24">
            <img src="/images/small-flower.webp" alt="" loading="lazy" width="552" height="981" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute -rotate-[5deg] w-52 bottom-10 -right-20">
            <img src="/images/small-flower.webp" alt="" loading="lazy" width="552" height="981" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute -rotate-[5deg] w-52 -bottom-52 -right-32">
            <img src="/images/flower.webp" alt="" loading="lazy" width="456" height="1095" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute -rotate-[5deg] w-32 -bottom-[290px] -right-10">
            <img src="/images/flower.webp" alt="" loading="lazy" width="456" height="1095" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute -rotate-[5deg] w-52 -bottom-10 -right-10">
            <img src="/images/small-flower.webp" alt="" loading="lazy" width="552" height="981" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute w-64 -rotate-[5deg] -bottom-[400px] -right-10">
            <img src="/images/flower.webp" alt="" loading="lazy" width="456" height="1095" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute w-64 -rotate-[5deg] -bottom-[600px] -right-10">
            <img src="/images/flower.webp" alt="" loading="lazy" width="456" height="1095" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute w-72 -rotate-[5deg] -bottom-[500px] -right-40">
            <img src="/images/flower.webp" alt="" loading="lazy" width="456" height="1095" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute -rotate-[5deg] w-52 -bottom-40 right-24">
            <img src="/images/small-flower.webp" alt="" loading="lazy" width="552" height="981" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
          <div className="absolute -rotate-[5deg] w-52 -bottom-32 right-20">
            <img src="/images/small-flower.webp" alt="" loading="lazy" width="552" height="981" style={{ width: "100%", height: "100%", objectFit: "cover" }} sizes="(max-width: 1250px) 100vw, 1250px" />
          </div>
        </div>
      </main>
    </motion.div>
  );
}
