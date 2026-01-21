const PhoneMockup = () => {
  return (
    <div className="relative flex items-center justify-center h-[500px] md:h-[600px]">
      {/* Left Phone */}
      <div className="absolute left-1/2 -translate-x-[180%] md:-translate-x-[160%] top-1/2 -translate-y-1/2 z-10 opacity-60 scale-75 md:scale-90">
        <div className="relative w-[180px] md:w-[220px] h-[360px] md:h-[440px] bg-card rounded-[2.5rem] border-[8px] border-foreground/10 shadow-xl overflow-hidden">
          {/* Phone Screen - Placeholder for user image */}
          <div className="absolute inset-2 rounded-[2rem] bg-muted flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-xl">📱</span>
              </div>
              <p className="text-xs text-muted-foreground">Left Screen</p>
            </div>
          </div>
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-foreground/10 rounded-full" />
        </div>
      </div>

      {/* Center Phone (Main) */}
      <div className="relative z-20 animate-float">
        <div className="relative w-[220px] md:w-[280px] h-[440px] md:h-[560px] bg-card rounded-[3rem] border-[10px] border-foreground/10 shadow-2xl overflow-hidden">
          {/* Phone Screen - Placeholder for user image */}
          <div className="absolute inset-2 rounded-[2.25rem] bg-gradient-to-b from-muted to-muted/50 flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-sm font-semibold text-primary mb-1">AI-Powered</p>
              <p className="text-base font-bold text-foreground mb-4">Prompt Creation<br/>at Your Fingertips</p>
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-2xl">✨</span>
              </div>
              <p className="text-xs text-muted-foreground mt-4">Main Screen</p>
            </div>
          </div>
          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground/10 rounded-full" />
          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-foreground/20 rounded-full" />
        </div>
      </div>

      {/* Right Phone */}
      <div className="absolute left-1/2 translate-x-[80%] md:translate-x-[60%] top-1/2 -translate-y-1/2 z-10 opacity-60 scale-75 md:scale-90">
        <div className="relative w-[180px] md:w-[220px] h-[360px] md:h-[440px] bg-card rounded-[2.5rem] border-[8px] border-foreground/10 shadow-xl overflow-hidden">
          {/* Phone Screen - Placeholder for user image */}
          <div className="absolute inset-2 rounded-[2rem] bg-muted flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-xl">🎬</span>
              </div>
              <p className="text-xs text-muted-foreground">Right Screen</p>
            </div>
          </div>
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-foreground/10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
