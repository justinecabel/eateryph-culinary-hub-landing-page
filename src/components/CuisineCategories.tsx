import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import DomainForSaleModal from "@/components/DomainForSaleModal";
import AdContainer from "@/components/AdContainer";
import { useDomainForSale } from "@/hooks/useDomainForSale";

const CuisineCategories = () => {
  const navigate = useNavigate();
  const { isModalOpen, showModal, hideModal } = useDomainForSale();

  const handleCuisineClick = (cuisine: string) => {
    navigate(`/restaurants?cuisine=${cuisine}`);
  };

  const cuisines = [
    {
      name: "Filipino",
      icon: "🍛",
      description: "Traditional Filipino dishes",
      count: "2,400+"
    },
    {
      name: "Street Food",
      icon: "🍢",
      description: "Local street favorites",
      count: "1,800+"
    },
    {
      name: "Seafood",
      icon: "🦐",
      description: "Fresh from Philippine waters",
      count: "950+"
    },
    {
      name: "Desserts",
      icon: "🍧",
      description: "Filipino sweets and treats",
      count: "750+"
    },
    {
      name: "Grilled",
      icon: "🔥",
      description: "BBQ and grilled specialties",
      count: "1,200+"
    },
    {
      name: "Noodles",
      icon: "🍜",
      description: "Pancit and noodle dishes",
      count: "680+"
    }
  ];

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Popular Cuisines
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the diverse flavors of Filipino cuisine across different categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cuisines.map((cuisine, index) => {
              const shouldShowAd = (index + 1) % 4 === 0;
              
              if (shouldShowAd) {
                return (
                  <AdContainer key={`ad-${index}`} size="square" className="h-full" />
                );
              }
              
              return (
                <Card 
                  key={cuisine.name}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
                  onClick={() => handleCuisineClick(cuisine.name)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {cuisine.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{cuisine.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{cuisine.description}</p>
                    <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {cuisine.count} places
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      <DomainForSaleModal isOpen={isModalOpen} onClose={hideModal} />
    </>
  );
};

export default CuisineCategories;