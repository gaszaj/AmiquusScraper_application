import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type StepImage = {
  src: string;
  alt: string;
};

export function StepsCarousel({
  images,
  className = "",
}: {
  images: StepImage[];
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [direction, setDirection] = React.useState<1 | -1>(1);

  const openAt = (idx: number) => {
    setActiveIndex(idx);
    setOpen(true);
  };

  const goPrev = React.useCallback(() => {
    setDirection(-1);
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = React.useCallback(() => {
    setDirection(1);
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, goPrev, goNext]);

  return (
    <>
      <Carousel className={className} opts={{ align: "start", loop: true }}>
        <div className="relative">
          <CarouselPrevious className="left-1 z-20" type="button" />
          <CarouselNext className="right-1 z-20" type="button" />

          <CarouselContent>
            {images.map((img, idx) => (
              <CarouselItem
                key={img.alt + idx}
                className="basis-1/2 md:basis-1/4"
              >
                <motion.button
                  type="button"
                  onClick={() => openAt(idx)}
                  className="w-full text-left"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  <div className="rounded-xl border bg-background p-2 hover:bg-muted/40 transition">
                    <motion.img
                      src={img.src}
                      alt={img.alt}
                      className="h-28 md:h-32 w-full object-contain"
                      loading="lazy"
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    />
                    <p className="mt-2 text-center text-xs text-muted-foreground">
                      Step {idx + 1}
                    </p>
                  </div>
                </motion.button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">Step image viewer</DialogTitle>

          <div className="relative bg-black">
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Button>

            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            <div className="flex items-center justify-center min-h-[60vh]">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.img
                  key={images[activeIndex]?.src || activeIndex}
                  src={images[activeIndex]?.src}
                  alt={images[activeIndex]?.alt}
                  className="max-h-[80vh] w-auto max-w-full object-contain"
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction === 1 ? 24 : -24,
                    scale: 0.99,
                  }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    x: direction === 1 ? -24 : 24,
                    scale: 0.99,
                  }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                />
              </AnimatePresence>
            </div>

            <div className="p-3 text-center text-sm text-white/80">
              Step {activeIndex + 1} of {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
