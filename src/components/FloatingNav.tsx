"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Home, MapPin, QrCode, Image as ImageIcon, X, Landmark } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function FloatingNav() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [activePerson, setActivePerson] = useState(0);
  const [activeBank, setActiveBank] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Reset bank selection when person changes
  useEffect(() => {
    setActiveBank(0);
  }, [activePerson]);

  const paymentOptions = [
    {
      owner: "គណនីកូនប្រុស", // Groom
      accounts: [
        { bank: "ABA Bank", name: "Kem Vannda", number: "000 000 001", qr: "/images/qr-groom-aba.png", color: "#005e9d" },
      //  { bank: "ACLEDA Bank", name: "Oul Tokata", number: "000 000 002", qr: "/images/qr-groom-acleda.png", color: "#003b5c" }
      ]
    },
    {
      owner: "គណនីកូនស្រី", // Bride
      accounts: [
        { bank: "ABA Bank", name: "Choek Kimheng", number: "000 000 003", qr: "/images/qr-bride-aba.png", color: "#005e9d" },
       // { bank: "Wing Bank", name: "Phin Phanu", number: "000 000 004", qr: "/images/qr-bride-wing.png", color: "#a5cd39" }
      ]
    }
  ];

  const currentAccount = paymentOptions[activePerson].accounts[activeBank];

  useEffect(() => {
    // Attempt to autoplay music
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(e => {
        console.log("Autoplay prevented by browser policy until user interaction.");
      });
    }
  }, []);

  // Make sure audio plays if user interacts with the page and it hasn't started yet
  useEffect(() => {
    const handleInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log(e));
      }
    };
    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("scroll", handleInteraction, { once: true });
    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, [isPlaying]);

  return (
    <>
      <audio 
        ref={audioRef} 
        loop 
        src="/audio/save_the_day.mp3" 
      />

      {/* QR Payment Modal */}
      <AnimatePresence>
        {showQRModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 pointer-events-auto"
            onClick={() => setShowQRModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 w-full max-w-sm flex flex-col items-center shadow-2xl relative"
            >
              <button 
                onClick={() => setShowQRModal(false)}
                className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h2 className="text-[#918645] font-serif text-2xl font-bold mb-4">ចំណងដៃ</h2>
              
              {/* Person Tabs (Groom/Bride) */}
              <div className="flex bg-gray-100 p-1 rounded-xl w-full mb-3 relative">
                {paymentOptions.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePerson(idx)}
                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all z-10 ${
                      activePerson === idx ? 'text-[#918645]' : 'text-gray-400'
                    }`}
                  >
                    {option.owner}
                  </button>
                ))}
                {/* Animated active background */}
                <motion.div 
                  className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm"
                  animate={{ left: activePerson === 0 ? '4px' : 'calc(50%)' }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>

              {/* Bank Selection Pills */}
              <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
                {paymentOptions[activePerson].accounts.map((acc, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveBank(idx)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all flex items-center gap-1 border ${
                      activeBank === idx 
                        ? 'border-transparent text-white shadow-md' 
                        : 'border-gray-200 text-gray-500 bg-transparent hover:bg-gray-50'
                    }`}
                    style={activeBank === idx ? { backgroundColor: acc.color } : {}}
                  >
                    <Landmark className="w-3 h-3" />
                    {acc.bank}
                  </button>
                ))}
              </div>
              
              {/* QR Image */}
              <div className="w-48 h-48 bg-gray-100 rounded-xl mb-4 overflow-hidden flex items-center justify-center p-2 border-2 border-[#918645]/20 relative">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={`${activePerson}-${activeBank}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    alt="QR Code" 
                    src={currentAccount.qr} 
                    className="w-full h-full object-contain absolute" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg";
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* Account Details */}
              <div className="flex flex-col w-full gap-2 text-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activePerson}-${activeBank}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-2 w-full"
                  >
                    <div className="bg-gray-50 rounded-xl p-2 border border-gray-100 flex flex-col items-center">
                      <p className="text-xs text-gray-500">ធនាគារ (Bank)</p>
                      <p className="font-bold text-gray-800 text-sm" style={{ color: currentAccount.color }}>{currentAccount.bank}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-2 border border-gray-100 flex flex-col items-center">
                      <p className="text-xs text-gray-500">ឈ្មោះគណនី (Name)</p>
                      <p className="font-bold text-gray-800 text-sm">{currentAccount.name}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-2 border border-gray-100 flex flex-col items-center">
                      <p className="text-xs text-gray-500">លេខគណនី (Number)</p>
                      <p className="font-bold text-xl tracking-wider" style={{ color: currentAccount.color }}>{currentAccount.number}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Left Corner */}
      <div className="fixed w-full max-w-[500px] bottom-0 left-1/2 -translate-x-1/2 z-[60] pointer-events-none">
        <Link href="/" className="pointer-events-auto">
          <div className="absolute bottom-20 left-2 z-[60] flex items-center justify-center hover:scale-105 transition-transform">
            <button className="bg-white shadow-lg h-12 w-12 rounded-full flex items-center justify-center text-[#00c853]">
              <Home className="w-5 h-5" />
            </button>
          </div>
        </Link>
        <div className="absolute bottom-4 left-16 z-[60] flex items-center justify-center pointer-events-auto hover:scale-105 transition-transform">
          <a href="https://maps.app.goo.gl/XdjfkSe2LKYDCEVc7" target="_blank" rel="noopener noreferrer">
            <button className="bg-white shadow-lg h-12 w-12 rounded-full flex items-center justify-center text-[#2979ff]">
              <MapPin className="w-5 h-5" />
            </button>
          </a>
        </div>
      </div>

      {/* Bottom Right Corner */}
      <div className="fixed w-full max-w-[500px] bottom-0 left-1/2 -translate-x-1/2 z-[60] pointer-events-none">
        <div className="absolute bottom-20 right-2 z-[60] flex items-center justify-center pointer-events-auto hover:scale-105 transition-transform">
          <button onClick={() => setShowQRModal(true)} className="bg-white shadow-lg h-12 w-12 rounded-full flex items-center justify-center text-[#d500f9]">
            <QrCode className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute bottom-4 right-16 z-[60] flex items-center justify-center pointer-events-auto hover:scale-105 transition-transform">
          <button onClick={() => {
            window.dispatchEvent(new CustomEvent('open-gallery'));
          }} className="bg-white shadow-lg h-12 w-12 rounded-full flex items-center justify-center text-[#f50057]">
            <ImageIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}
