import React from 'react';
import { MdOutlineWifiCalling3 } from 'react-icons/md';
import { motion } from 'framer-motion';

const CallToActionBanner = () => {
  const phoneNumber = '(833) 368-6811';

  return (
    <a
      href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
      className="fixed bottom-0 inset-x-0 bg-[#104e3c] text-center p-2 flex items-center justify-center m-2 md:hidden rounded-md z-40"
    >
      <div className="flex items-center">
        <motion.div
          className="bg-white p-2 rounded-md"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MdOutlineWifiCalling3 className="w-5 h-5 text-black" />
        </motion.div>
        <div className="ml-3">
          <p className="text-sm font-normal text-white">Call & Get Unpublished Train Deals!</p>
          <p className="font-bold text-lg text-white">{phoneNumber}</p>
        </div>
      </div>
    </a>
  );
};

export default CallToActionBanner;
