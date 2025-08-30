import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Discover",
      links: [
        "Find Restaurants",
        "Popular Cuisines",
        "Top Rated",
        "New Restaurants",
        "Food Delivery",
      ],
    },
    {
      title: "For Restaurants",
      links: [
        "Join eatery.ph",
        "Restaurant Dashboard",
        "Promote Your Business",
        "Analytics",
        "Support",
      ],
    },
    {
      title: "Cities",
      links: [
        "Manila",
        "Cebu",
        "Davao",
        "Baguio",
        "View All Cities",
      ],
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Contact Us",
        "Terms of Service",
        "Privacy Policy",
        "Safety Guidelines",
      ],
    },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-hero rounded-xl p-2">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">eatery.ph</div>
                <div className="text-sm text-gray-400">Culinary Hub</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Discover the best Filipino restaurants, read authentic reviews, and explore 
              the rich culinary heritage of the Philippines.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-background">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-background">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-background">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-background mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary transition-smooth"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Philippines</div>
                <div className="text-gray-400 text-sm">Nationwide Coverage</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">+63 2 1234 5678</div>
                <div className="text-gray-400 text-sm">Support Hotline</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">hello@eatery.ph</div>
                <div className="text-gray-400 text-sm">General Inquiries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 eatery.ph. All rights reserved. Made with ❤️ for Filipino food lovers.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-smooth">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;