import PhoneMockup from "./PhoneMockup";
import DownloadButtons from "./DownloadButtons";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Ripples */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[800px] h-[800px]">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-muted-foreground/10"
              style={{
                transform: `scale(${0.3 + i * 0.18})`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Text */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Meet <span className="text-primary">PromptKit!</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Your All-in-One solution for stunning AI prompts.
          </p>
        </div>

        {/* Phone Mockups */}
        <PhoneMockup />

        {/* Download Section */}
        <div className="text-center mt-12">
          <p className="text-lg font-medium text-muted-foreground mb-6">
            Download for FREE!
          </p>
          <DownloadButtons />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
