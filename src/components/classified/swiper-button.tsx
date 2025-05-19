import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface SwiperButtonsProps {
    prevClassName?: string;
    nextClassName?: string;
    onPrevClick?: () => void;
    onNextClick?: () => void;
}

export const SwiperButtons = ({
    prevClassName,
    nextClassName,
    onPrevClick,
    onNextClick,
}: SwiperButtonsProps) => {
    return (
        <>
            <Button
                variant="ghost"
                type="button"
                rel="prev"
                size="icon"
                aria-label="Previous slide"
                className={cn(
                    "swiper-button-prev absolute top-1/2 left-2 md:left-4 -translate-y-1/2 z-10 flex items-center justify-center rounded-full",
                    prevClassName,
                )}
                onClick={(e) => {
                    e.stopPropagation();
                    onPrevClick?.();
                }}
            >
                <ChevronLeft className="h-8 w-8 text-black dark:text-white" />
            </Button>

            <Button
                variant="ghost"
                type="button"
                rel="next"
                size="icon"
                aria-label="Next slide"
                className={cn(
                    "swiper-button-next absolute top-1/2 right-2 md:right-4 -translate-y-1/2 z-10 flex items-center justify-center rounded-full",
                    nextClassName,
                )}
                onClick={(e) => {
                    e.stopPropagation();
                    onNextClick?.();
                }}
            >
                <ChevronRight className="h-8 w-8 text-black dark:text-white" />
            </Button>
        </>
    );
};
