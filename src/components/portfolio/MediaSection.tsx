import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

// Import all your images and videos here
// This method ensures your paths are correct after deployment
import ACD from "/assets/workshops/ACD.png";
import Unity from "/assets/workshops/Unity.jpeg";
import AwsCloudClub from "/assets/workshops/AwsCloudClub.png";
import MirageClubC from "/assets/workshops/MirageClubC.png";
import AwsEvent from "/assets/workshops/AwsEvent.png";
import IdeateCC from "/assets/workshops/IdeateCC.png";

import RanidiiP1 from "/assets/work/RanidiiP1.png";
import RanidiiP2 from "/assets/work/RanidiiP2.png";
import Giriraj from "/assets/work/Giriraj.png";

interface MediaItem {
  id: number;
  title: string;
  description: string;
  type?: "image" | "video";
  src: string; // The src is now a required string after importing
}

const mediaData = {
  workshops: [
    { id: 1, title: "ACD", description: "AWS Community Day Pune , AI/ML Edition 2025", type: "image", src: ACD },
    { id: 2, title: "Unity Workshop", description: "Taught the basics of Unity during the event.", type: "image", src: Unity },
    { id: 3, title: "Aws Cloud Club", description: "Club Meeting for future plans", type: "image", src: AwsCloudClub },
    { id: 4, title: "Mirage", description: "Club Catalyst 2025", type: "image", src: MirageClubC },
    { id: 5, title: "Aws", description: "Successfully managed the AWS event.", type: "image", src: AwsEvent },
    { id: 6, title: "Ideate", description: "Club Catalyst 2025", type: "image", src: IdeateCC }
  ],
  work: [
    { id: 1, title: "Design Poster for Shruti Lathi", description: "Promotional poster for her upcoming art exhibition.m", type: "image", src: RanidiiP1 },
    { id: 2, title: "Artwork Exhibition Poster", description: "Promotional design for Shruti Lathi’s event.", type: "image", src: RanidiiP2 },
    { id: 3, title: "Promotional Poster for My Work", description: "A promotional poster designed to showcase my professional skills and services.", type: "image", src: Giriraj },
  ],
  videos: [
    // Add your video items here.
    // Make sure to import them first, just like the images.
    // { id: 1, title: "Launch Event Highlights", description: "Highlights from the launch event held in July.", type: "video", src: video1 },
  ]
};

const MediaSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof mediaData | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getModalTitle = () => {
    switch (selectedCategory) {
      case "workshops":
        return "Workshops Gallery";
      case "work":
        return "Work Gallery";
      case "videos":
        return "Work Videos";
      default:
        return "Gallery";
    }
  };

  const getModalDescription = () => {
    switch (selectedCategory) {
      case "workshops":
        return "Browse images from our latest workshops and events.";
      case "work":
        return "Explore our portfolio of recent projects and creative work.";
      case "videos":
        return "Watch videos showcasing our process and finished projects.";
      default:
        return "";
    }
  };

  const activeMediaItems = selectedCategory ? mediaData[selectedCategory] : [];
  const visibleItems = activeMediaItems.slice(currentIndex, currentIndex + 3);

  return (
    <section className="w-full px-6 md:px-8 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="p-6 md:p-8 rounded-3xl border border-gray-300 bg-white shadow-2xl">
          {/* Horizontal scroll category cards */}
          <div className="overflow-x-auto">
           <div className="flex justify-center gap-6 px-2 flex-wrap">

              {[
                { key: "workshops", label: "Workshops", img: "https://plus.unsplash.com/premium_photo-1714229505922-0ab8148bc2bf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0" },
                { key: "work", label: "Work", img: "https://plus.unsplash.com/premium_photo-1680700308566-543a60569017?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0" },
                { key: "videos", label: "Work Videos", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.1.0" }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setSelectedCategory(item.key as keyof typeof mediaData);
                    setSelectedVideo(null);
                    setCurrentIndex(0);
                  }}
                  className="relative flex-none w-80 aspect-[16/9] flex flex-col items-center justify-center rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors duration-300" />
                  <span className="relative z-10 text-2xl font-bold text-white">{item.label}</span>
                  <span className="relative z-10 mt-2 text-sm text-gray-200">Click to explore</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedCategory || !!selectedVideo}
        onOpenChange={() => {
          setSelectedCategory(null);
          setSelectedVideo(null);
        }}
      >
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white rounded-3xl shadow-2xl border border-gray-200">
          {selectedCategory === "videos" && selectedVideo ? (
            <div className="flex flex-col h-[80vh]">
              <div className="p-6 border-b border-gray-200 flex items-center justify-center relative">
                <button onClick={() => setSelectedVideo(null)} className="absolute left-6 text-blue-600 hover:underline">
                  ← Back to Videos
                </button>
                <DialogTitle className="text-3xl font-extrabold text-gray-900 text-center">
                  {selectedVideo.title}
                </DialogTitle>
              </div>
              <div className="flex-1 bg-black flex items-center justify-center">
                <video src={selectedVideo.src} controls autoPlay className="w-full h-full object-contain bg-black" />
              </div>
              <div className="p-6 border-t border-gray-200 bg-white">
                <p className="text-gray-600 mt-2">{selectedVideo.description}</p>
              </div>
            </div>
          ) : (
            <>
              <div className="relative p-6 border-b border-gray-200 flex items-center justify-between">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-extrabold text-gray-900">{getModalTitle()}</DialogTitle>
                  <DialogDescription className="mt-1 text-base text-gray-500">{getModalDescription()}</DialogDescription>
                </DialogHeader>
                {selectedCategory && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentIndex((prev) => Math.max(prev - 3, 0))}
                      disabled={currentIndex === 0}
                      className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => setCurrentIndex((prev) => Math.min(prev + 3, activeMediaItems.length - 3))}
                      disabled={currentIndex + 3 >= activeMediaItems.length}
                      className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                      →
                    </button>
                  </div>
                )}
              </div>
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => {
                      if (item.type === "video" && item.src) {
                        setSelectedVideo(item);
                      }
                    }}
                  >
                    {item.type === "image" ? (
                      <img src={item.src} alt={item.title} className="aspect-[3/4] w-full object-contain bg-black" />
                    ) : (
                      <video src={item.src} className="aspect-[3/4] w-full object-contain bg-black" muted />
                    )}
                    {item.type === "image" && (
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-left">
                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                        <p className="text-gray-200 text-sm mt-1">{item.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MediaSection;