"use client"
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/config/routes';
import { Classified, Colour, FuelType, OdoUnit, Prisma, Transmission } from '../../../prisma/src/generated/prisma';
import { ClassifiedWithImage, Favourites, MultiStepFormEnum } from '@/config/types';
import { HTMLParser } from '../shared/html-parser';
import { Cog, Currency, Fuel, FuelIcon, GaugeCircle, Paintbrush2 } from 'lucide-react';
import { options } from 'sanitize-html';
import { Button } from '../ui/button';
import { FavouriteButton } from './favourite-button';
import { use, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { set } from 'zod';
import { AnimatePresence, motion } from 'framer-motion';
import { formatColour, formatFuelType, formatNumber, formatOdometerUnit, formatPrice, formatTransmission } from '@/lib/utils';
import { ImgixImage } from '../ui/imgix-image';


interface ClassifiedCardProps {
    classified: ClassifiedWithImage;
    favourites: number[]
}



const getKeyClassifiedInfo = (classified: ClassifiedWithImage) => {
    return [{
        id: "odoReading",
        icon: <GaugeCircle className='w-4 h-4' />,
        value: `${formatNumber(classified.odoReading)} ${formatOdometerUnit(classified.odoUnit)}`,

    },
    {
        id: "transmission",
        icon: <Cog className='w-4 h-4' />,
        value: classified?.transmission ? formatTransmission(classified?.transmission) : null,

    },
    {
        id: "fuelType",
        icon: <FuelIcon className='w-4 h-4' />,
        value: classified?.colour ? formatFuelType(classified?.fuelType) : null,
    },
    {
        id: "colour",
        icon: <Paintbrush2 className='w-4 h-4' />,
        value: classified?.colour ? formatColour(classified?.colour) : null, //format colour
    }
    ]
}

export const ClassifiedCard = (props: ClassifiedCardProps) => {

    const { classified, favourites } = props;

    const pathname = usePathname();
    const [isFavourite, setIsFavourite] = useState(
        favourites.includes(classified.id)
    );
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!isFavourite && pathname === routes.favourites) setIsVisible(false);
    }, [isFavourite, pathname]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className='bg-white relative rounded-md shadow-md overflow-hidden flex flex-col'>
                    <div className='aspect-3/2 relative'>
                        <Link href={routes.singleClassified(classified.slug)} className='relative block w-full h-full'>
                            <ImgixImage placeholder='blur'
                                blurDataURL={classified.images[0]?.blurhash}
                                src={classified.images[0]?.src}
                                alt={classified.images[0]?.alt}
                                fill={true}
                                className='object-cover'
                                quality={25}
                            />
                        </Link>
                        <FavouriteButton 
                        setIsFavourite={setIsFavourite} 
                        isFavourite={isFavourite} 
                        id={classified.id} />
                        <div className='absolute top-2.5 right-3.5 bg-primary text-slate-50 font-bold px-2 py-1 rounded'>
                            <p className='text-xs lg:text-base xl:text-lg font-semibold'>
                                {formatPrice({
                                    price: classified.price,
                                    currency: classified.currency,
                                })}</p>
                        </div>
                    </div>
                    <div className='p-4 flex flex-col space-y-3'>
                        <div>
                            <Link href={routes.singleClassified(classified.slug)} className='text-slate-800 font-semibold text-lg lg:text-xl xl:text-2xl hover:text-blue-300 transition-colors duration-200'>
                                {classified.title}
                            </Link>
                            {classified?.description && (
                                <div className='text-xs mdtext-sm md:text-sm xl:text-base text-slate-600 line-clamp-2'>
                                    <HTMLParser html={classified.description} />
                                    &nbsp;
                                </div>
                            )}
                            <ul className='text-xs md:text-sm text-gray-600 xl:flex grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-4 items-center justify-between w-full'>
                                {getKeyClassifiedInfo(classified).filter((v) => v.value).map(({ id, icon, value }) => (
                                    <li key={id} className='font-semibold flex xl:flex-col items-center gap-x-1.5'>
                                        {icon} {value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='mt-4 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:gap-x-2 w-full'>
                            <Button className='flex-1 transition-colors hover:border-white hover:bg-slate-500 hover:text-white py-2 lg:py-2.5 h-full text-xs md:text-sm xl:text-base font-semibold border-2 border-slate-300 text-primary rounded-md'
                                asChild
                                variant='outline'
                                size='sm'>
                                <Link href={routes.reserve(classified.slug, MultiStepFormEnum.WELCOME)}>
                                    Reserve
                                </Link>
                            </Button>
                            <Button className='flex-1 py-2 lg:py-2.5 h-full text-xs md:text-sm xl:text-base font-semibold hover:text:white border-2 border-slate-300 text-primary rounded-md bg-white hover:bg-slate-500 transition-colors duration-200'
                                asChild
                                size='sm'>
                                <Link href={routes.singleClassified(classified.slug)}>
                                    View Details
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}