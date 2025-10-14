import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import paymentImg from "@/assets/mytelkomsel-payment.jpg";
import walletImg from "@/assets/mytelkomsel-wallet.jpg";
import homeImg from "@/assets/mytelkomsel-home.jpg";

const MyTelkomselDetail = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MyTelkomsel Android App</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">Kotlin</Badge>
            <Badge variant="secondary">Java</Badge>
            <Badge variant="secondary">XML</Badge>
            <Badge variant="secondary">MVVM</Badge>
            <Badge variant="secondary">Dependency Injection</Badge>
            <Badge variant="secondary">Retrofit</Badge>
            <Badge variant="secondary">Material Design</Badge>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-muted-foreground mb-6">
              MyTelkomsel is a comprehensive mobile application that serves as the official app for Telkomsel customers in Indonesia. 
              The app provides a seamless experience for managing mobile services, purchasing data packages, and handling digital payments.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Digital wallet integration with GoPay, DANA, OVO, and LinkAja</li>
              <li>Multiple payment methods including e-money and bank direct debit</li>
              <li>Internet package purchase and management</li>
              <li>Telkomsel SmartPay for installment services</li>
              <li>Roaming services and special packages</li>
              <li>Personalized recommendations based on user behavior</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Technical Highlights</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
              <li>Built with Kotlin and XML for robust Android development</li>
              <li>MVVM architecture for clean separation of concerns</li>
              <li>Retrofit for efficient API communication</li>
              <li>Material Design principles for intuitive UI/UX</li>
              <li>Integration with multiple payment gateways</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <img 
                src={homeImg} 
                alt="MyTelkomsel Home Screen showing internet packages" 
                className="w-full rounded-lg shadow-lg border"
              />
              <p className="text-sm text-muted-foreground text-center">Home & Package Selection</p>
            </div>
            <div className="space-y-2">
              <img 
                src={walletImg} 
                alt="MyTelkomsel Wallet Screen with payment options" 
                className="w-full rounded-lg shadow-lg border"
              />
              <p className="text-sm text-muted-foreground text-center">Digital Wallet Integration</p>
            </div>
            <div className="space-y-2">
              <img 
                src={paymentImg} 
                alt="MyTelkomsel Payment Methods" 
                className="w-full rounded-lg shadow-lg border"
              />
              <p className="text-sm text-muted-foreground text-center">Payment Methods</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTelkomselDetail;
