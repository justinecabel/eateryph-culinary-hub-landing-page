import { ChefHat, Fish, Soup, Coffee, Cake, Salad } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CuisineCategories = () => {
  const categories = [
    {
      name: "Traditional Filipino",
      icon: ChefHat,
      description: "Authentic regional dishes",
      count: 1234,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      name: "Seafood",
      icon: Fish,
      description: "Fresh from Philippine waters",
      count: 567,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      name: "Street Food",
      icon: Soup,
      description: "Local favorites and snacks",
      count: 890,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      name: "Coffee & Drinks",
      icon: Coffee,
      description: "Local coffee and beverages",
      count: 432,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      name: "Desserts",
      icon: Cake,
      description: "Filipino sweets and treats",
      count: 321,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      name: "Healthy Options",
      icon: Salad,
      description: "Fresh and nutritious meals",
      count: 234,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Popular Cuisines
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the diverse flavors of Filipino cuisine across different categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Card
              key={category.name}
              className="group cursor-pointer hover:shadow-warm transition-bounce border-0 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`${category.bgColor} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce`}>
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-sm">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {category.description}
                </p>
                <div className="text-xs font-semibold text-primary">
                  {category.count.toLocaleString()} restaurants
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuisineCategories;