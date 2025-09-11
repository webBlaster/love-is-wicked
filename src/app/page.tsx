"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Sparkles,
  Coffee,
  Music,
  Star,
  Crown,
  Diamond,
} from "lucide-react";

export default function ElevatedRomanticPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Cycle through images every 5 seconds for more elegant timing
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleYesClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <Star
          className="absolute top-20 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 text-primary/30 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <Diamond
          className="absolute top-40 right-4 sm:right-20 w-4 h-4 sm:w-5 sm:h-5 text-accent/40 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <Sparkles
          className="absolute bottom-40 left-4 sm:left-20 w-5 h-5 sm:w-6 sm:h-6 text-primary/20 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <Heart
          className="absolute top-60 right-4 sm:right-10 w-3 h-3 sm:w-4 sm:h-4 text-accent/30 animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <header className="relative py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div
            className={`transition-all duration-1500 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-float">
              <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse" />
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent fill-current animate-heartbeat" />
              <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse" />
            </div>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-balance bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
              My Doja
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 text-pretty text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto px-2">
              With you, even ordinary moments feel special. I can only imagine
              how beautiful life would be walking this journey together.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div
            className={`transition-all duration-1500 delay-300 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl sm:rounded-3xl blur-xl animate-pulse-glow"></div>
              <Card className="relative overflow-hidden shadow-2xl border-2 border-primary/20 bg-card/95 backdrop-blur-sm">
                <CardContent className="p-1 sm:p-2">
                  <div className="relative h-[700px] sm:h-[700px] md:h-[700px] lg:h-[800px] rounded-xl sm:rounded-2xl overflow-hidden group">
                    <img
                      src="/person-babe.jpeg"
                      alt="Beautiful portrait"
                      className="w-full h-full object-cover transition-all duration-1000 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div
            className={`transition-all duration-1500 delay-500 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <Card className="bg-card/95 backdrop-blur-sm border-2 border-accent/30 shadow-2xl shadow-primary/10">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="space-y-6 sm:space-y-8">
                  <div className="text-center mb-6 sm:mb-8 md:mb-10">
                    <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
                      <Diamond className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-float" />
                      <Heart className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-accent fill-current animate-heartbeat" />
                      <Diamond className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-float" />
                    </div>
                    <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 text-balance px-2">
                      Will You Be Mine Forever?
                    </h2>
                  </div>

                  <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-card-foreground leading-relaxed">
                    <p className="text-pretty font-light">
                      You’ve become the part of my days I look forward to most.
                      The way you make me laugh, the way you understand me, and
                      the peace I feel whenever we talk, it’s more than just a
                      vibe, it’s something real. I don’t want this to be just a
                      chapter; I want it to be our story. So here I am, heart in
                      hand, asking.....{" "}
                      <span className=" text-primary font-bold">
                        WILL YOU BE MY GIRLFRIEND?
                      </span>
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 border border-primary/20">
                    <h3 className="font-playfair text-lg sm:text-xl md:text-2xl font-semibold text-primary text-center mb-4 sm:mb-6">
                      Our Beautiful Future Together ✨💕
                    </h3>
                    <div className="grid gap-3 sm:gap-4">
                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/50 rounded-lg sm:rounded-xl">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                          📚
                        </div>
                        <span className="text-sm sm:text-base md:text-lg font-medium text-card-foreground">
                          📖💙 Writing our love story one beautiful chapter at a
                          time.
                        </span>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/50 rounded-lg sm:rounded-xl">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                          🎶
                        </div>
                        <span className="text-sm sm:text-base md:text-lg text-card-foreground">
                          🎵😄 ⁠Filling our days with joy, music, and shared
                          laughter.
                        </span>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/50 rounded-lg sm:rounded-xl">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                          🌿
                        </div>
                        <span className="text-sm sm:text-base md:text-lg text-card-foreground">
                          🌱🤝 Growing together, hand in hand, through every
                          season of life.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                    <Button
                      onClick={handleYesClick}
                      className="w-full text-base sm:text-lg md:text-xl py-6 sm:py-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transform hover:scale-105 transition-all duration-300 animate-pulse-glow shadow-xl rounded-xl"
                    >
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 fill-current" />
                      Yes, I'd love to be yours! 💖
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full text-sm sm:text-base md:text-lg py-4 sm:py-6 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-white/80 rounded-xl"
                    >
                      I need some time to think 💭
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div
          className={`text-center mt-12 sm:mt-16 md:mt-20 transition-all duration-1500 delay-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <Card className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto bg-card/90 backdrop-blur-sm border-2 border-primary/20 shadow-xl">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Star className="w-4 h-4 sm:w-6 sm:h-6 text-primary animate-float" />
                    <Diamond className="w-6 h-6 sm:w-8 sm:h-8 text-accent animate-pulse" />
                    <Star className="w-4 h-4 sm:w-6 sm:h-6 text-primary animate-float" />
                  </div>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-card-foreground text-pretty leading-relaxed font-light px-2">
                  Whatever your answer, know that you are absolutely incredible
                  and deserve all the love in the world. You've already made my
                  life so much brighter just by being in it.
                </p>
                <div className="flex justify-center mt-6 sm:mt-8">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-accent fill-current animate-heartbeat" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Fancy Romantic Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative max-w-xs sm:max-w-lg md:max-w-2xl w-full bg-gradient-to-br from-white via-blue-50 to-sky-50 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-blue-200 animate-scaleIn mx-4">
            {/* Floating hearts around modal */}
            <div className="absolute -inset-4 sm:-inset-8 pointer-events-none hidden sm:block">
              {[...Array(8)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute w-3 h-3 sm:w-4 sm:h-4 text-blue-400 fill-current animate-float"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${10 + Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>

            {/* Modal Content */}
            <div className="relative p-6 sm:p-8 md:p-12 text-center">
              {/* Decorative elements */}
              <div className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Star className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400 animate-pulse" />
                  <Diamond className="w-5 h-5 sm:w-8 sm:h-8 text-sky-400 animate-spin-slow" />
                  <Star className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400 animate-pulse" />
                </div>
              </div>

              {/* Main content */}
              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 md:space-y-8">
                <div className="flex justify-center">
                  <div className="relative">
                    <Heart className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-blue-500 fill-current animate-heartbeat" />
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-4">
                  <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent leading-tight px-2">
                    From patronizing Ageless baby,
                  </h2>
                  <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 bg-clip-text text-transparent px-2">
                    to being Ageless' Baby
                  </h3>
                </div>

                <div className="flex justify-center space-x-1 sm:space-x-2">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 animate-pulse" />
                  <Crown className="w-7 h-7 sm:w-10 sm:h-10 text-sky-500 animate-bounce" />
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 animate-pulse" />
                </div>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-xs sm:max-w-md md:max-w-lg mx-auto px-2">
                  You've just made this the most beautiful moment of my life!
                  Welcome to our forever journey together. 💕
                </p>

                {/* Action buttons */}
                <div className="pt-4 sm:pt-6 space-y-4">
                  <Button
                    onClick={() => setShowModal(false)}
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  >
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 fill-current" />
                    Close
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative border animation */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 opacity-20 animate-pulse pointer-events-none"></div>
          </div>
        </div>
      )}

      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className="absolute w-6 h-6 text-accent fill-current animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
