import React from 'react'
import SidenavTitle from './SideNavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enüü" />
      <ul>
        <li className="sidenavLi">Blogi leht</li>
        <li className="sidenavLi">Portfoolio leht</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojektid" />
      <ul>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">E-commerce</li>
        <li className="sidenavLi">Chatting Applications</li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">Backend Setup</li>
        <li className="sidenavLi">Amazon Clone</li>
      </ul>
      <SidenavTitle title="V" subTitle="iimased postitused" />
      <ul>
        <li className="sidenavLi">UI & UX Conference at Lviv 2022</li>
        <li className="sidenavLi">How to become a creative designer</li>
        <li className="sidenavLi">
          Designers thoughts about mobile UI templates
        </li>
        <li className="sidenavLi">Designer Conference at Florida, USA 2020</li>
      </ul>
      <SidenavTitle title="V" subTitle="õta ühendust" />
      <ul>
        <li className="sidenavLi">+372 53434551</li>
        <li className="sidenavLi">tarjet.truks@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav