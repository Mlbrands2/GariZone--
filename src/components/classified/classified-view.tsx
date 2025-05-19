import Image from "next/image";
import Link from "next/link";
import { Prisma } from "../../../prisma/src/generated/prisma";
import { ClassifiedCarousel } from "./classified-carousel";
import {
  formatBodyType,
  formatColour,
  formatFuelType,
  formatNumber,
  formatOdometerUnit,
  formatPrice,
  formatTransmission,
  formatUlezCompliance,
} from "@/lib/utils";
import { HTMLParser } from "../shared/html-parser";
import { Button } from "../ui/button";
import { MultiStepFormEnum } from "@/config/types";
import { routes } from "@/config/routes";
import {
  CarFrontIcon,
  CarIcon,
  CheckIcon,
  Fingerprint,
  FuelIcon,
  GaugeIcon,
  PowerIcon,
  UsersIcon,
  XIcon,
} from "lucide-react";

type ClassifiedWithImagesAndMake = Prisma.ClassifiedGetPayload<{
  include: { make: true; images: true };
}>;

const features = (props: ClassifiedWithImagesAndMake) => [
  {
    id: 1,
    icon:
      props.ulezCompliance === "EXEMPT" ? (
        <CheckIcon className="w-6 h-6 mx-auto text-green-500" />
      ) : (
        <XIcon className="w-6 h-6 mx-auto text-red-500" />
      ),
    label: formatUlezCompliance(props.ulezCompliance),
  },
  {
    id: 2,
    icon: <Fingerprint className="w-6 h-6 mx-auto text-gray-500" />,
    label: props.vrm ?? "N/A",
  },
  {
    id: 3,
    icon: <CarIcon className="w-6 h-6 mx-auto text-gray-500" />,
    label: formatBodyType(props.bodyType),
  },
  {
    id: 4,
    icon: <FuelIcon className="w-6 h-6 mx-auto text-gray-500" />,
    label: formatFuelType(props.fuelType),
  },
  {
    id: 5,
    icon: <PowerIcon className="w-6 h-6 mx-auto text-gray-500" />,
    label: formatTransmission(props.transmission),
  },
  {
    id: 6,
    icon: <GaugeIcon className="w-6 h-6 mx-auto text-gray-500" />,
    label: `${formatNumber(props.odoReading)} ${formatOdometerUnit(props.odoUnit)}`,
  },
  {
    id: 7,
    icon: <UsersIcon className="w-6 h-6 mx-auto text-gray-500" />,
    label: props.seats ?? "N/A",
  },
  {
    id: 8,
    icon: <CarFrontIcon className="w-6 h-6 mx-auto text-gray-500" />,
    label: props.doors ?? "N/A",
  },
];

export const ClassifiedView = (props: ClassifiedWithImagesAndMake) => {
  return (
    <div className="flex flex-col container mx-auto md:px-0 py-12">
      <div className="flex flex-col md:flex-row">
        {/* Image Carousel */}
        <div className="md:w-1/2">
          <ClassifiedCarousel images={props.images} />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          {/* Make Logo */}
          <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
            <Image
              src={props.make.image}
              alt={props.make.name || "Car Make"}
              className="w-20 mr-4"
              width={120}
              height={120}
            />
          </div>

          {/* Title */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{props.title}</h1>
          </div>

          {/* Tags */}
          <div className="mt-4 flex items-center space-x-2 mb-2 flex-wrap">
            <span className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-md">
              {props.year}
            </span>
            <span className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-md">
              {formatNumber(props.odoReading)} {formatOdometerUnit(props.odoUnit)}
            </span>
            <span className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-md">
              {formatColour(props.colour)}
            </span>
            <span className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-md">
              {formatFuelType(props.fuelType)}
            </span>
          </div>

          {/* Description */}
          {props.description && (
            <div className="mb-4">
              <HTMLParser html={props.description} />
            </div>
          )}

          {/* Price Display */}
          <div className="text-4xl font-bold my-4 w-full border border-slate-200 flex justify-center items-center rounded-xl py-12">
            Our Price: {formatPrice({ price: props.price, currency: props.currency })}
          </div>

          {/* Reserve Button */}
          <Button
            className="uppercase font-bold py-3 px-6 rounded w-full mb-4"
            size="lg"
            asChild
          >
            <Link href={routes.reserve(props.slug, MultiStepFormEnum.WELCOME)}>
              Reserve Now
            </Link>
          </Button>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {features(props).map(({ id, icon, label }) => (
              <div
                key={id}
                className="bg-gray-100 rounded-lg shadow-xs p-4 text-center flex items-center flex-col"
              >
                {icon}
                <p className="text-sm font-medium mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
