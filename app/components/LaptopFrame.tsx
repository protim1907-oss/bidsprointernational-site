/**
 * Wraps its children inside a stylised laptop mockup: an animated screen
 * (lid tilts open on load, content fades in, a light glare sweeps across)
 * that gently floats, sitting on a metallic base with a hinge groove.
 * Pure CSS — animations live in globals.css and respect prefers-reduced-motion.
 */
export default function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="bp-laptop-wrap w-full">
      <div className="bp-laptop-float">
        {/* Screen / lid */}
        <div className="bp-laptop-lid relative rounded-t-2xl border border-slate-700 bg-slate-950 p-2.5 shadow-2xl">
          {/* Webcam dot */}
          <div className="mx-auto mb-2 h-1.5 w-1.5 rounded-full bg-slate-700 ring-1 ring-slate-600" />
          {/* Display */}
          <div className="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
            <div className="bp-screen-content p-5">{children}</div>
            {/* Sweeping glare + static reflection */}
            <div className="bp-screen-glare" />
            <div
              className="pointer-events-none absolute inset-0 rounded-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%)",
              }}
            />
          </div>
        </div>
        {/* Base / keyboard deck */}
        <div className="relative mx-auto h-3.5 w-[105%] rounded-b-xl border border-t-0 border-slate-700 bg-gradient-to-b from-slate-600 to-slate-800 shadow-2xl">
          <div className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b-lg bg-slate-900/70" />
        </div>
        {/* Soft ground shadow */}
        <div
          className="mx-auto mt-2 h-4 w-[80%] rounded-[100%] opacity-60 blur-md"
          style={{ background: "radial-gradient(ellipse, rgba(2,6,23,0.7), transparent 70%)" }}
        />
      </div>
    </div>
  );
}
