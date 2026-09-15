import React from "react";
import { GlobalPresence } from "./GlobalPresence";

export function GlobalNetworks() {
  return (
    React.createElement('section', { className: "w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white"       ,}
      /* Background Graphic Glow */
      , React.createElement('div', { className: "absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0"       ,} )

      , React.createElement('div', { className: "max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10"      ,}
        , React.createElement(GlobalPresence, null )
      )
    )
  );
}
