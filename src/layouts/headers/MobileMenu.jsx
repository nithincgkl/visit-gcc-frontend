'use client';
import Link from 'next/link';
import style from "./style.module.css";
import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

const MobileMenu = ({ active }) => {
  const [selected, setSelected] = useState("US");

  return (
    <div className="mobile-menu">
      <ul className="cs_nav_list" style={{ display: active ? "block" : "none" }}>
        <li>
          <Link href="/">
            <img src="/assets/images/inv-gcc.png" alt="GCC Logo" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <img src="/assets/images/GCC-one-visa.png" alt="GCC Logo" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <img src="/assets/images/Partner.png" alt="Partner Logo" />
          </Link>
        </li>
        <li  className={style['btn_login']}>
          <Link href="/">Login/Signup</Link>
        </li>
      </ul>

      <div className={style['flag_selector']}>
        <ReactFlagsSelect
          countries={["US", "GB", "FR", "DE", "IT"]}
          customLabels={{ US: "", GB: "", FR: "", DE: "", IT: "" }}
          selected={selected}
          onSelect={(code) => setSelected(code)}
          placeholder="US"
          showSelectedLabel={false}
          showOptionLabel={false}
        />
      </div>
    </div>
  );
};

export default MobileMenu;