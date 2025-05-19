"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { HeartIcon } from "lucide-react"
import { useRouter } from "next/navigation";
import { number, set } from "zod";
import { endpoints } from "@/config/endpoints";
import { json } from "stream/consumers";
import { api } from "@/lib/api-client";



type FavuriteButtonProps = {
    setIsFavourite: (isFavourite: boolean) => void;
    isFavourite: boolean;
    id: number;
}
export const FavouriteButton = (props: FavuriteButtonProps) => {
    const { setIsFavourite, isFavourite, id } = props;

    const router = useRouter();

    const handleFavourite = async () => {
        const {ids} = await api.post<{ ids: number[] }>(endpoints.favourites, {
            json: {id},
    })

    if (ids.includes(id)) setIsFavourite(true);
    else setIsFavourite(false);
    setTimeout(() => router.refresh(), 250);
    
    }
    return(
        <Button 
        onClick={handleFavourite}
            variant="ghost"
            size="icon"
            className={cn("absolute top-2.5 left-3.5 z-10 bg-white/80 hover:bg-white/100 dark:bg-black/80 dark:hover:bg-black/100 group !h-6 !w-6 lg:!h-8 lg:!w-8 xl:!h-10 xl:w-10",
                isFavourite ? "bg-white" : "!bg-muted/15"
            )}
                >
            <HeartIcon
                className={cn("duration-200 transition-colors ease-in-out w-3.5 h-3.5 lg:w-4 lg:h-4 xl:w-6 xl:h-6 text-white group-hover:text-white ",
                    isFavourite ? "text-pink-500 fill-pink-500" : "group-hover:text-pink-500 group-hover:fill-pink-500",
                )}/>

        </Button>
    )
}