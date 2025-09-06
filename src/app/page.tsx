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
      alert("You've just made me the happiest person in the universe! 💫✨");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <Star
          className="absolute top-20 left-10 w-4 h-4 text-primary/30 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <Diamond
          className="absolute top-40 right-20 w-5 h-5 text-accent/40 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <Sparkles
          className="absolute bottom-40 left-20 w-6 h-6 text-primary/20 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <Heart
          className="absolute top-60 right-10 w-4 h-4 text-accent/30 animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <header className="relative py-24 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1500 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-3 mb-8 animate-float">
              <Crown className="w-8 h-8 text-primary animate-pulse" />
              <Heart className="w-12 h-12 text-accent fill-current animate-heartbeat" />
              <Crown className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-8 text-balance bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              My Dearest
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-pretty text-muted-foreground font-light leading-relaxed">
              There's something incredibly important I need to share with you...
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1500 delay-300 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl animate-pulse-glow"></div>
              <Card className="relative overflow-hidden shadow-2xl border-2 border-primary/20 bg-card/95 backdrop-blur-sm">
                <CardContent className="p-2">
                  <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden group">
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
              <CardContent className="p-10">
                <div className="space-y-8">
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 mb-6">
                      <Diamond className="w-8 h-8 text-primary animate-float" />
                      <Heart className="w-16 h-16 text-accent fill-current animate-heartbeat" />
                      <Diamond className="w-8 h-8 text-primary animate-float" />
                    </div>
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
                      Will You Be Mine Forever?
                    </h2>
                  </div>

                  <div className="space-y-6 text-xl text-card-foreground leading-relaxed">
                    <p className="text-pretty font-light">
                      You’ve become the part of my days I look forward to most.
                      The way you make me laugh, the way you understand me, and
                      the peace I feel whenever we talk, it’s more than just a
                      vibe, it’s something real. I don’t want this to be just a
                      chapter; I want it to be our story. So here I am, heart in
                      hand, asking..... will you be my girlfriend?
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 space-y-6 border border-primary/20">
                    <h3 className="font-playfair text-2xl font-semibold text-primary text-center mb-6">
                      Our Beautiful Future Together
                    </h3>
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl">
                        <Coffee className="w-8 h-8 text-primary" />
                        <span className="text-lg font-medium text-card-foreground">
                          Romantic dates and adventures
                        </span>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl">
                        <Music className="w-8 h-8 text-accent" />
                        <span className="text-lg text-card-foreground">
                          Dancing under the stars
                        </span>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl">
                        <Heart className="w-8 h-8 text-primary fill-current" />
                        <span className="text-lg text-card-foreground">
                          Building something beautiful together
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-8">
                    <Button
                      onClick={handleYesClick}
                      className="w-full text-xl py-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transform hover:scale-105 transition-all duration-300 animate-pulse-glow shadow-xl rounded-xl"
                    >
                      <Heart className="w-6 h-6 mr-3 fill-current" />
                      Yes, I'd love to be yours! 💖
                      <Sparkles className="w-6 h-6 ml-3" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full text-lg py-6 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-white/80 rounded-xl"
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
          className={`text-center mt-20 transition-all duration-1500 delay-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <Card className="max-w-3xl mx-auto bg-card/90 backdrop-blur-sm border-2 border-primary/20 shadow-xl">
            <CardContent className="p-10">
              <div className="space-y-6">
                <div className="flex justify-center mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-6 h-6 text-primary animate-float" />
                    <Diamond className="w-8 h-8 text-accent animate-pulse" />
                    <Star className="w-6 h-6 text-primary animate-float" />
                  </div>
                </div>
                <p className="text-xl text-card-foreground text-pretty leading-relaxed font-light">
                  Whatever your answer, know that you are absolutely incredible
                  and deserve all the love in the world. You've already made my
                  life so much brighter just by being in it.
                </p>
                <div className="flex justify-center mt-8">
                  <Heart className="w-10 h-10 text-accent fill-current animate-heartbeat" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

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
