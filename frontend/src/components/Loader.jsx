function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">

      {/* Animated Ring */}
      <div className="relative w-28 h-28">

        <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full"></div>

        <div className="absolute inset-0 border-t-4 border-cyan-400 rounded-full animate-spin"></div>

        <div className="absolute inset-4 border-r-4 border-cyan-300 rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "2s" }}
        ></div>

      </div>

      {/* Text */}
      <h2 className="mt-10 text-3xl font-bold text-white tracking-widest">
        ZENOVA
      </h2>

      <p className="text-cyan-400 mt-2 tracking-[6px] text-sm">
        INITIALIZING SYSTEM...
      </p>

    </div>
  );
}

export default Loader;