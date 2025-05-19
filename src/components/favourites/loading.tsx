
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "../ui/skeleton"

export function FavoritesLoadingUI() {
  // Create an array of 6 items to represent loading cars
  const loadingItems = Array.from({ length: 6 }, (_, i) => i)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {loadingItems.map((index) => (
        <Card key={index} className="overflow-hidden">
          {/* Image skeleton */}
          <Skeleton className="h-48 w-full" />

          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="space-y-2">
                {/* Car make/model skeleton */}
                <Skeleton className="h-5 w-32" />
                {/* Year skeleton */}
                <Skeleton className="h-4 w-16" />
              </div>
              {/* Heart icon skeleton */}
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
            <div className="flex gap-2 mb-2">
              {/* Badge skeleton */}
              <Skeleton className="h-5 w-24" />
            </div>
            {/* Price skeleton */}
            <Skeleton className="h-6 w-20 mt-2" />
          </CardContent>

          <CardFooter className="p-4 pt-0">
            {/* Button skeleton */}
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
