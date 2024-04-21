import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Veebiarendus"
        subTitle="Arendan kasutaja vajadustest ja ettevõtte ärieesmärkidest lähtuvaid kodulehti ja veebipõhiseid infosüsteeme, mis on avatud lähtekoodiga, paindlikud ja turvalised."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Veebikujundus"
        subTitle="Loon kujunduse, mis on silmale ilus vaadata ja külastajale lihtne kasutada. Kasutajate küsitlemine, analüüs ja pidev testimine tagavad parima võimaliku tulemuse."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobiilirakendus"
        subTitle="Sul on suurepärane mobiiliäpi idee. Ja oled leidnud ka agentuuri, kes võiks aidata selle idee reaalsuseks muuta. Mis edasi?"
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="Tööde raames optimeerin teie veebilehte, et parandada nähtavust Google otsingus ning suurendada kodulehe orgaanilist liiklust."
      />
    </div>
  );
};

export default MyServices;