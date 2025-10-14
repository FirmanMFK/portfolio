import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
// import bukkuHome from "@/assets/bukku-home.jpeg"; // Placeholder: User needs to add this image
// import bukkuSearch from "@/assets/bukku-search.jpeg"; // Placeholder: User needs to add this image
// import bukkuCart from "@/assets/bukku-cart.jpeg"; // Placeholder: User needs to add this image

const BukkuEcommerceDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bukku E-Commerce App</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">Kotlin</Badge>
            <Badge variant="secondary">MVP</Badge>
            <Badge variant="secondary">Retrofit</Badge>
            <Badge variant="secondary">GSON</Badge>
            <Badge variant="secondary">Firebase Crashlytics</Badge>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-muted-foreground mb-6">
              The Bukku E-Commerce App is a full-featured mobile application designed for finding, exploring, and purchasing books. Users can search for books, publishers, or writers, manage their shopping cart, and proceed with secure payment integrations.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Comprehensive book search and filtering</li>
              <li>Detailed book information and reviews</li>
              <li>Shopping cart management</li>
              <li>Secure payment gateway integration</li>
              <li>User profiles and order history</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Technical Highlights</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
              <li>Built with Kotlin using the MVP (Model-View-Presenter) architecture</li>
              <li>Retrofit for efficient API communication with backend services</li>
              <li>GSON for JSON serialization and deserialization</li>
              <li>Firebase Crashlytics for real-time crash reporting and monitoring</li>
              <li>Responsive UI designed with Material Design principles</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <img 
                // src={bukkuHome} 
                alt="Bukku E-Commerce Home Screen" 
                className="w-full rounded-lg shadow-lg border"
              />
              <p className="text-sm text-muted-foreground text-center">Home Screen</p>
            </div>
            <div className="space-y-2">
              <img 
                // src={bukkuSearch} 
                alt="Bukku E-Commerce Search Screen" 
                className="w-full rounded-lg shadow-lg border"
              />
              <p className="text-sm text-muted-foreground text-center">Search Screen</p>
            </div>
            <div className="space-y-2">
              <img 
                // src={bukkuCart} 
                alt="Bukku E-Commerce Shopping Cart Screen" 
                className="w-full rounded-lg shadow-lg border"
              />
              <p className="text-sm text-muted-foreground text-center">Shopping Cart Screen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BukkuEcommerceDetail;
