import React, { useState } from "react";
import { useRouter } from 'next/router'

import AdminHeader from "../component/AdminHeader";
function Header() {
  const router = useRouter()
  const [headerColor , setHeaderColor]= useState()
  
  return (
    
    <div className="">
      
      <AdminHeader/>

      lli
    </div>
  );
}

export default Header;
