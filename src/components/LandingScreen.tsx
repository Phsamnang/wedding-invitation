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
        
        {/* Top Decorations */}
        <div className="flex justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -30, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-24"
          >
            <img alt="Flower decoration" loading="lazy" width="95" height="85" style={{ objectFit: "cover" }} src="/images/shape-tl.webp" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-24"
          >
            <img alt="Top right decoration" loading="lazy" width="117" height="103" style={{ objectFit: "cover" }} src="/images/shape-tr.webp" />
          </motion.div>
        </div>
        
        <div className="relative flex justify-center items-center flex-col gap-10 sm:-top-12 -top-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full"
          >
            <img alt="" loading="lazy" src="/images/shape-center.webp" className="w-full h-auto object-cover" />
          </motion.div>
          
          <div className="pt-20 flex flex-col gap-10 items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative w-52"
            >
              <img alt="Wedding Title" loading="lazy" src="/images/wedding-title-kh-color.png" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "backOut" }}
              className="relative w-52"
            >
              <img alt="Name Initial" loading="lazy" src="/images/shom-img-kh.png" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-xl font-serif max-w-[200px] text-center leading-[2rem]" style={{ color: "#b4aed1" }}
            >
              សូមគោរពអញ្ជើញជាភ្ញៀវកិត្តិយស
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              className="z-30"
            >
              <button 
                onClick={() => router.push('/details')}
                className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-transform hover:scale-105 active:scale-95 px-4 py-2 bg-transparent border-none shadow-none h-12 z-30 cursor-pointer"
              >
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="relative z-30 w-60"
                >
                  <img alt="Click to join" loading="lazy" src="/images/click-to-join-button-kh.png" className="w-full h-full object-cover" />
                </motion.div>
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex flex-col items-center gap-2"
            >
              <h2 className="font-serif text-lg" style={{ color: "#b4aed1" }}>ថ្ងៃសៅរ៍ ទី ២១ ខែវិច្ឆកា ឆ្នាំ២០២៦</h2>
              <p className="text-sm text-center w-[80%] max-w-[300px]" style={{ color: "#8e7e78" }}>
                <span className="font-bold">វេលាម៉ោង ៥:០០ ល្ងាច</span> 
                <br/>នៅ គេហដ្ឋានខាងស្រី ភូមិក្រែក ឃុំក្រែកជើង ស្រុកពញាក្រែក ខេត្តត្បូងឃ្មុំ ដោយមេត្រីភាព<br />
                <span className="font-bold">(សូមមើលប្លង់បញ្ជាក់)</span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Flowers Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="relative top-40 left-2"
        >
          {/* We add slightly different durations and delays so they don't all move exactly identically, creating a natural breeze effect */}
          <motion.div animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} className="absolute w-52 bottom-10 sm:-left-28 -left-20">
            <img src="/images/small-flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -12, 0], rotate: [0, -1, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} className="absolute w-52 bottom-5 sm:-left-20 -left-24">
            <img src="/images/small-flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute w-44 -bottom-40 -left-24">
            <img src="/images/flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -15, 0], rotate: [0, -2, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="absolute w-44 -bottom-52 sm:-left-28 -left-20">
            <img src="/images/flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} className="absolute w-44 -bottom-10 -left-4">
            <img src="/images/small-flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0], rotate: [0, -1, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="absolute w-52 -bottom-64 left-20">
            <img src="/images/small-flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -12, 0], rotate: [-5, -3, -5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} className="absolute w-64 -bottom-[440px] -left-4">
            <img src="/images/flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0], rotate: [-5, -4, -5] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} className="absolute w-64 -bottom-[400px] -left-24">
            <img src="/images/flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -14, 0], rotate: [-5, -6, -5] }} transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }} className="absolute w-52 -bottom-36 left-16">
            <img src="/images/small-flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -9, 0], rotate: [-5, -3, -5] }} transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} className="absolute w-52 -bottom-32 left-24">
            <img src="/images/small-flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -11, 0], rotate: [-5, -7, -5] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute w-52 bottom-10 -right-20">
            <img src="/images/small-flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -15, 0], rotate: [-5, -3, -5] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.9 }} className="absolute w-52 -bottom-52 -right-32">
            <img src="/images/flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0], rotate: [-5, -6, -5] }} transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="absolute w-32 -bottom-[290px] -right-10">
            <img src="/images/flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -13, 0], rotate: [-5, -4, -5] }} transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} className="absolute w-52 -bottom-10 -right-10">
            <img src="/images/small-flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -9, 0], rotate: [-5, -3, -5] }} transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="absolute w-64 -bottom-[400px] -right-10">
            <img src="/images/flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -12, 0], rotate: [-5, -7, -5] }} transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} className="absolute w-64 -bottom-[600px] -right-10">
            <img src="/images/flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -14, 0], rotate: [-5, -3, -5] }} transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} className="absolute w-72 -bottom-[500px] -right-40">
            <img src="/images/flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0], rotate: [-5, -6, -5] }} transition={{ duration: 5.7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute w-52 -bottom-40 right-24">
            <img src="/images/small-flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <motion.div animate={{ y: [0, -8, 0], rotate: [-5, -4, -5] }} transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }} className="absolute w-52 -bottom-32 right-20">
            <img src="/images/small-flower.webp" alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
