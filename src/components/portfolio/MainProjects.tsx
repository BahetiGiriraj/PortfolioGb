import { useState } from "react";
import ProjectModal from "./ProjectModal";

// --- Import all your project images here ---
// This ensures Vite correctly processes and deploys them.
import wanderlustImg from "/assets/project/Wanderlust.png";
import zerodhaCloneImg from "/assets/project/ZerodhaClone.png";
import expenseCompanionImg from "/assets/project/Expen.png";
import shrutiArtImg from "/assets/project/C1.png";

const initialNotionPages = [
  // {
  //   id: 1,
  //   title: "How to Build a Portfolio with Next.js",
  //   notion_url: "https://www.notion.so/how-to-build-a-portfolio-with-nextjs",
  //   display_order: 1,
  //   status: "published",
  // },
  // {
  //   id: 2,
  //   title: "Next.js SEO Optimization Guide",
  //   notion_url: "https://www.notion.so/nextjs-seo-guide",
  //   display_order: 2,
  //   status: "published",
  // },
  // {
  //   id: 3,
  //   title: "Mastering TailwindCSS in 2025",
  //   notion_url: "https://www.notion.so/master-tailwind-2025",
  //   display_order: 3,
  //   status: "published",
  // },
];

const MainProjects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"personal" | "client">("personal");
  const [notionPages] = useState(initialNotionPages);

  const personalProjects = [
    {
      id: 1,
      name: "WanderLust",
      about: "WanderLust is an Airbnb clone with features to manage listings and comments, set your location, secure authentication, and search stays by country.",
      skills: ["React", "Node", "Express", "Bootstrap", "MongoDB", "RESTful API", "MapBox API", "GitHub", "Git"],
      link: "https://project-1-v8jl.onrender.com/listing",
      // Use the imported image variable here
      image: wanderlustImg, 
      category: "personal",
    },
    {
      id: 2,
      name: "Zerodha Clone",
      about: "Frontend-only replica focusing on the user interface.",
      skills: ["React", "Bootstrap"],
      link: "https://zerodhaclone-1-2q0t.onrender.com",
      // Use the imported image variable here
      image: zerodhaCloneImg, 
      category: "personal",
    },
    {
      id: 3,
      name: "Expense Companion",
      about: "Track your weekly and monthly expenses, record your income and balance, calculate the total balance, and export everything to spreadsheets. Made with Lovable",
      skills: ["TypeScript", "Tailwind", "Lovable AI"],
      link: "https://preview--happy-wallet-whisperer.lovable.app",
      // Use the imported image variable here
      image: expenseCompanionImg,
      category: "personal",
    },
  ];

  const clientProjects = [
    {
      id: 1,
      name: "Shruti's Art World",
      about: "Portfolio for showcasing her work",
      skills: ["Next.js", "GraphQL", "TailwindCSS"],
      link: "https://shrutilathi.vercel.app",
      // Use the imported image variable here
      image: shrutiArtImg,
      category: "client",
    },
    // {
    //   id: 2,
    //   name: "Client Project Two",
    //   about: "Custom CMS development for a publishing company.",
    //   skills: ["Vue.js", "Node.js", "MongoDB"],
    //   link: "https://example.com/client-two",
    //   image: "/assets/client-two.png",
    //   category: "client",
    // },
  ];

  const openModal = (type: "personal" | "client") => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <>
      <section className="w-full px-6 md:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Personal Projects */}
            <div className="lg:col-span-4">
              <div
                className="bg-card border border-border rounded-lg p-6 h-full cursor-pointer group hover:bg-portfolio-hover transition-all duration-300 shadow-portfolio hover:shadow-portfolio-hover hover:scale-[1.02]"
                onClick={() => openModal("personal")}
              >
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border group-hover:border-primary transition-colors overflow-hidden">
                    {/* These images are from Unsplash, so their paths are fine */}
                    <img
                      src="https://images.unsplash.com/photo-1541560052-5e137f229371?w=900&auto=format&fit=crop&q=60"
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Personal Projects
                    </h3>
                    <p className="text-muted-foreground">
                      Exploring creativity and pushing boundaries through
                      innovative solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Projects */}
            <div className="lg:col-span-4">
              <div
                className="bg-card border border-border rounded-lg p-6 h-full cursor-pointer group hover:bg-portfolio-hover transition-all duration-300 shadow-portfolio hover:shadow-portfolio-hover hover:scale-[1.02]"
                onClick={() => openModal("client")}
              >
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border group-hover:border-primary transition-colors overflow-hidden">
                    {/* This image is also from Unsplash */}
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Client Projects
                    </h3>
                    <p className="text-muted-foreground">
                      Delivering exceptional results that exceed expectations
                      and drive business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Published Notion Pages */}
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  📄 Published Notion Pages
                </h3>

                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {notionPages.length === 0 ? (
                    <div className="text-gray-500 text-sm">
                      No published pages yet.
                    </div>
                  ) : (
                    notionPages.map((item, idx) => (
                      <a
                        key={item.id}
                        href={item.notion_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 border border-gray-200 rounded-lg p-4 hover:bg-primary/10 hover:border-primary transition-all duration-300 cursor-pointer group ${
                          idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm group-hover:border-primary">
                          📚
                        </div>

                        <span className="font-medium text-gray-800 group-hover:text-primary line-clamp-2">
                          {idx + 1}. {item.title}
                        </span>
                      </a>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        projects={modalType === "personal" ? personalProjects : clientProjects}
      />
    </>
  );
};

export default MainProjects;