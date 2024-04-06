'use client';
import React, {useState} from 'react'
import { MenuItem, Menu, ProductItem, HoveredLink } from  "@/components/ui/navbar-import"
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import { cn } from "@/utils/cn";



function Navbar ({ className} : {className?: string}){
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
          className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
          <Menu setActive={setActive}>

          <a href="#initial">
            <MenuItem setActive={setActive} active={null} item="Home">
            </MenuItem>
            </a>



            <a href="#services">
            <MenuItem setActive={setActive} active={null} item="Services">
            </MenuItem>
            </a>
            
            <a href="#clients">
            <MenuItem setActive={setActive} active={null} item="Clients">
            </MenuItem>
            </a>


            <a href="#pricing">
            <MenuItem setActive={setActive} active={null} item="Pricing">
            </MenuItem>
            </a>
            
          </Menu>
        </div>
      );
}

export default Navbar