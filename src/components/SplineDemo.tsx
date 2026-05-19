'use client'

import { SplineScene } from "@/components/ui/splite";
 
export function SplineDemo() {
  return (
    <div className="w-full flex justify-center mb-16 md:mb-32 md:-mt-16">
      <div className="w-[95vw] md:w-[80vw] max-w-4xl h-[60vh] md:h-[70vh] min-h-[400px] md:min-h-[500px] bg-[#ebebf0] relative overflow-hidden rounded-t-[100px] md:rounded-t-[500px] rounded-b-3xl shadow-2xl shadow-indigo-500/10 border border-black/5 flex flex-col items-center transform-gpu">
        
        {/* 3D Content wrapper */}
        <div className="absolute inset-0 w-full h-full min-w-0 min-h-0 bg-transparent">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Floating details overlay on top of spline */}
        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 bg-white/60 backdrop-blur-xl p-4 md:p-8 rounded-2xl md:rounded-3xl border border-white/50 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 will-change-transform">
            <div>
              <p className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Role</p>
              <p className="text-zinc-900 font-black text-base md:text-xl">Aspiring SDE</p>
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Core Tech</p>
              <p className="text-zinc-900 font-black text-base md:text-xl">React / ASP.NET / C</p>
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Background</p>
              <p className="text-zinc-900 font-black text-base md:text-xl">B.Tech 2nd Year CSE</p>
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Status</p>
              <p className="text-cyan-600 font-black text-base md:text-xl flex items-center gap-2">
                <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-cyan-500 animate-pulse shadow-md"></span>
                OPEN TO WORK
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}