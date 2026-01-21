import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import mainScreen from "@/assets/pt_1.jpg";

const screens = [
  { id: 1, image: mainScreen, label: "Main Screen" },
  { id: 2, emoji: "📱", label: "Left Screen" },
  { id: 3, emoji: "🎬", label: "Right Screen" },
];

const PhoneMockup = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
  });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(autoplay, 3000);
    return () => clearInterval(interval);
  }, [emblaApi, autoplay]);

  return (
    <div className="relative flex items-center justify-center h-[500px] md:h-[600px] w-full max-w-4xl mx-auto">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {screens.map((screen, index) => (
            <div 
              key={screen.id} 
              className="flex-[0_0_100%] min-w-0 flex items-center justify-center"
            >
              <div className={`relative ${index === 0 ? 'animate-float-enhanced' : ''}`}>
                <div className="relative w-[220px] md:w-[280px] h-[440px] md:h-[560px] bg-foreground rounded-[2rem] border-[4px] border-foreground shadow-2xl overflow-hidden">
                  <div className="absolute inset-[4px] rounded-[1.5rem] overflow-hidden">
                    {screen.image ? (
                      <img 
                        src={screen.image} 
                        alt={screen.label}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <div className="text-center p-4">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-foreground/10 flex items-center justify-center">
                            <span className="text-4xl">{screen.emoji}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{screen.label}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-foreground rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
