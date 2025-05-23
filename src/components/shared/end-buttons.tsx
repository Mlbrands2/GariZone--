import Link from "next/link"
import { Button } from "../ui/button"
import { routes } from "@/config/routes"
import { CarIcon, HomeIcon } from "lucide-react"

export const EndButtons = () => {
    return (
                        <div className="mt-6 flex items items-center justify-center gap-4">
                    <Button
                        variant="outline"
                        className="transition-colors hover:border-white hover:bg-primary hover:text-white"
                        asChild
                    >
                        <Link href={routes.home}>
                            <HomeIcon className="mr-2 h-5 w-5" />
                            Go to home 🛖
                        </Link>
                    </Button>
                    <Button
                        asChild
                    >
                        <Link href={routes.inventory}>
                            <CarIcon className="mr-2 h-5 w-5" />
                            view Classifieds 🪟
                        </Link>
                    </Button>
                </div>
    )
}