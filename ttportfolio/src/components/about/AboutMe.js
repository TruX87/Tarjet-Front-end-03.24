import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Tere! Olen Tarjet Truks</h2>
          <p className="text-base leading-6 ">
            Veebidisainer Eestist. Mul on rikkalik kogemus veebisaidi 
            kujundamise ja ehitamisega, samuti oskan hästi wordpressi.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Vanus:</span>
            36
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Elukoht:</span>
            Eesti
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Tegevjuht:</span>
            MaiTar Solutions OÜ
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Aadress:</span>
            Saaremaa, Eesti
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;