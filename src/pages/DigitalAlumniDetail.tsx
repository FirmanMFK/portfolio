import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import alumniHome from "@/assets/alumni-home.jpeg";
import alumniMyFriend from "@/assets/alumni-my-friend.jpeg";
import alumniListFriend from "@/assets/alumni-list-friend.jpeg";

const DigitalAlumniDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative h-[300px] w-full bg-cover bg-no-repeat bg-center mb-8"
        style={{ background: `linear-gradient(to right,rgb(9, 171, 225),rgb(123, 195, 250))` }}
      >
        <div className="absolute inset-0 bg-black/30 "></div>
        <div className="relative container mx-auto px-4 py-6 z-10">
          <Link to="/#projects">
            <Button variant="ghost" className="mb-8 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 py-6 -mt-[250px] relative z-20">
        <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Alumni Book</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">Kotlin</Badge>
            <Badge variant="secondary">MVP</Badge>
            <Badge variant="secondary">Coroutines</Badge>
            <Badge variant="secondary">Material Design</Badge>
            <Badge variant="secondary">XML</Badge>
            <Badge variant="secondary">SQLite</Badge>
            <Badge variant="secondary">Shared Preferences</Badge>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-muted-foreground mb-6">
              The Digital Alumni Book application helps users find alumni from their school or community and connect with each other. It provides features to view alumni profiles, send friend requests, and browse community news.
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>User authentication and profile management</li>
              <li>Search and filter alumni by various criteria</li>
              <li>Send and accept friend requests</li>
              <li>View alumni activity feeds and news</li>
              <li>Notifications for new friend requests and updates</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Technical Highlights</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
              <li>Developed with Kotlin using the MVP (Model-View-Presenter) architecture</li>
              <li>Efficient data handling with SQLite database</li>
              <li>Utilizes Coroutines for asynchronous operations</li>
              <li>XML for UI layout design following Material Design principles</li>
              <li>Persistent user data storage using Shared Preferences</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <img 
                src={alumniHome} 
                alt="Digital Alumni Book News Feed / Home Screen" 
                className="w-full rounded-lg shadow-lg border"
              />
              <p className="text-sm text-muted-foreground text-center">News Feed / Home Screen</p>
            </div>
            <div className="space-y-2">
              <img 
                src={alumniMyFriend} 
                alt="Digital Alumni Book My Friends List Screen" 
                className="w-full rounded-lg shadow-lg border"
              />
              <p className="text-sm text-muted-foreground text-center">My Friends List Screen</p>
            </div>
            <div className="space-y-2">
              <img 
                src={alumniListFriend} 
                alt="Digital Alumni Book Find Friends Screen" 
                className="w-full rounded-lg shadow-lg border"
              />
              <p className="text-sm text-muted-foreground text-center">Find Friends Screen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalAlumniDetail;
