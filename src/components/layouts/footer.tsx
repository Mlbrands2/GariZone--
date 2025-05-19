import { routes } from "@/config/routes";
import Image from "next/image";
import Link from "next/link";
import { SiInstagram, SiMeta, SiX } from "@icons-pack/react-simple-icons";
import { navLinks } from "@/config/constants";
import { NewsletterForm } from "../shared/newsletter-form";

const socialLinks = [
  { id: 1, href: "https://facebook.com", icon: <SiMeta /> },
  { id: 2, href: "https://twitter.com", icon: <SiX /> },
  { id: 3, href: "https://instagram.com", icon: <SiInstagram /> },
 
];

export const PublicFooter = () => {
  return (
    <footer className="bg-gray-100 lg:px-8 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Link className="flex items-center" href={routes.home}>
              <Image
                width={50}
                height={50}
                alt="GariZone Logo"
                src="/logo.png"
                className="rounded-full object-contain"
              />
            </Link>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link key={link.id} href={link.href}>
                {link.icon}
              </Link>
            ))}
          </div>

          <div className="space-y-2">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="text-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={routes.inventory} className="text-foreground hover:text-primary">
                  Browse Cars
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <NewsletterForm />
      </div>
    </footer>
  );
};
