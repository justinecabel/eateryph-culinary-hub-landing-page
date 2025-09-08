import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Users, MapPin, Award, Globe, Mail, Phone } from "lucide-react";
import { generateBreadcrumbStructuredData, generateOrganizationStructuredData } from "@/utils/structuredData";
import juanDelaCruzImg from "@/assets/team-juan-delacruz.jpg";
import mariaGarciaImg from "@/assets/team-maria-garcia.jpg";
import carlosSantosImg from "@/assets/team-carlos-santos.jpg";

const About = () => {
  const team = [
    {
      name: "Juan Dela Cruz",
      role: "Founder & CEO",
      bio: "Passionate about Filipino cuisine and technology. Started eatery.ph to connect people with authentic Filipino restaurants.",
      avatar: juanDelaCruzImg
    },
    {
      name: "Maria Garcia",
      role: "Head of Operations",
      bio: "Expert in restaurant partnerships and customer experience. Ensures quality across all platform interactions.",
      avatar: mariaGarciaImg
    },
    {
      name: "Carlos Santos",
      role: "CTO",
      bio: "Tech enthusiast building scalable solutions for the food industry. Loves coding and great food.",
      avatar: carlosSantosImg
    }
  ];

  const stats = [
    { icon: Users, value: "2,650+", label: "Partner Restaurants" },
    { icon: MapPin, value: "50+", label: "Cities Covered" },
    { icon: Heart, value: "1M+", label: "Happy Customers" },
    { icon: Award, value: "4.8", label: "Average Rating" }
  ];

  const values = [
    {
      title: "Authentic Filipino Cuisine",
      description: "We celebrate the rich culinary heritage of the Philippines and promote authentic flavors.",
      icon: Heart
    },
    {
      title: "Supporting Local Businesses",
      description: "We partner with local restaurants to help them reach more customers and grow their business.",
      icon: Users
    },
    {
      title: "Quality & Trust",
      description: "We maintain high standards for our restaurant partners and provide verified reviews.",
      icon: Award
    },
    {
      title: "Community Building",
      description: "We bring food lovers together and create a community around Filipino cuisine.",
      icon: Globe
    }
  ];

  const breadcrumbItems = [
    { name: "Home", url: "https://eatery.ph/" },
    { name: "About", url: "https://eatery.ph/about" }
  ];

  const structuredData = [
    generateOrganizationStructuredData(),
    generateBreadcrumbStructuredData(breadcrumbItems)
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About eatery.ph - Philippines' Premier Restaurant Discovery Platform"
        description="Learn about eatery.ph's mission to celebrate Filipino cuisine and connect food lovers with authentic restaurants across the Philippines. Meet our team and discover our story."
        keywords="about eatery.ph, Filipino food platform, Philippine restaurant directory, authentic Filipino cuisine, restaurant discovery Philippines, Filipino food culture"
        canonical="https://eatery.ph/about"
        structuredData={structuredData}
      />
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Eatery.ph
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We're on a mission to celebrate Filipino cuisine and connect food lovers with the best restaurants across the Philippines.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Celebrating Filipino Cuisine</h3>
                  <p className="text-muted-foreground mb-6">
                    Eatery.ph was born from a simple idea: to make it easier for people to discover and enjoy authentic Filipino cuisine. 
                    We believe that food brings people together and that every restaurant has a unique story to tell.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Founded in 2023, we started as a small team of food enthusiasts who wanted to create a platform that truly 
                    represents the diversity and richness of Filipino culinary culture. From traditional family recipes to 
                    modern fusion dishes, we showcase it all.
                  </p>
                  <p className="text-muted-foreground">
                    Today, we're proud to partner with thousands of restaurants across the Philippines, helping them reach 
                    food lovers and grow their businesses while preserving our culinary heritage.
                  </p>
                </div>
                <div className="aspect-square bg-gradient-subtle rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Made with Love</h4>
                    <p className="text-muted-foreground">
                      Every feature we build is crafted with love for Filipino cuisine and culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle>{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto">
                      {member.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {member.bio}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions, suggestions, or want to partner with us? We'd love to hear from you!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-muted-foreground">hello@eatery.ph</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-muted-foreground">+63 2 8888 9999</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <Button size="lg" className="px-8">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;