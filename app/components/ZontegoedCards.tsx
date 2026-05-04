type ZontegoedCardsProps = {
  className?: string;
};

export default function ZontegoedCards({ className = "" }: ZontegoedCardsProps) {
  return (
    <div
      className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ${className}`}
    >
      <div className="bg-gradient-to-br from-[#CCA46E] to-[#E6C896] rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-center gap-4 border-2 border-[#D4A86A] min-h-[140px]">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-1">
            Zontegoed
          </h3>
          <p className="text-xs md:text-sm text-white/90">Standaard opwaardering</p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xl md:text-2xl font-bold text-white/60 line-through">
            €50
          </span>
          <span className="text-2xl md:text-3xl font-bold text-white">€65</span>
        </div>
        <p className="text-xs md:text-sm text-white/95 leading-relaxed">
          Betaal €50 en krijg €65 tegoed
        </p>
      </div>

      <div className="relative bg-gradient-to-br from-[#D4A86A] to-[#E6C896] rounded-xl p-5 md:p-6 shadow-lg shadow-[#D4A86A]/25 ring-2 ring-white/45 border-2 border-white/50 hover:shadow-xl hover:ring-white/60 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-center gap-4 min-h-[140px] overflow-hidden">
        <span className="absolute top-3 right-3 text-[10px] md:text-xs font-bold uppercase tracking-wide bg-[#1F1F1F]/15 backdrop-blur-[2px] text-white px-2.5 py-1 rounded-full shadow-sm">
          Nieuwe klant
        </span>
        <div className="pr-16 md:pr-20">
          <h3 className="text-lg md:text-xl font-bold text-white mb-1">
            Zontegoed welkom
          </h3>
          <p className="text-xs md:text-sm text-white/90">
            Alleen bij registratie als nieuwe klant
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xl md:text-2xl font-bold text-white/60 line-through">
            €50
          </span>
          <span className="text-2xl md:text-3xl font-bold text-white">€75</span>
        </div>
        <p className="text-xs md:text-sm text-white/95 leading-relaxed">
          Betaal €50 en krijg €75 tegoed — eenmalig bij je eerste registratie.
        </p>
      </div>
    </div>
  );
}
