export const DATA = {
  hero: {
    name: "Thanmay M Shetty",
    role: "AIML Engineer",
    abstract: "I bridge the gap between abstract algorithms and tangible solutions. Specializing in Generative AI, RAG Architectures, and full-stack engineering.",
  },
  projects: [
    {
      title: "BioBloom",
      category: "Agri-Tech AI",
      description: "A unified AI ecosystem solving fragmentation in agriculture.",
      features: ["RAG-based Crop Rotation", "Biowaste Optimization Agent", "Blockchain Supply Chain"],
      stack: ["Python", "LangChain", "Solidity", "React"],
      link: "/projects/biobloom",
      size: "large" as const,
    },
    {
      title: "FloatChat",
      category: "Oceanographic Intelligence",
      description: "Decoding the Indian Ocean via ARGO float data.",
      features: ["NetCDF Data RAG", "Natural Language Interface"],
      stack: ["Llama 3", "Pinecone", "Next.js"],
      link: "/projects/floatchat",
      size: "small" as const,
    }
  ],
  timeline: [
    {
      year: "2024",
      role: "IEEE CIS Treasurer",
      org: "IEEE",
      desc: "Managed financial allocation and leadership for technical events."
    },
    {
      year: "2023",
      role: "Hackathon Winner",
      org: "RNSIT",
      desc: "Built rapid prototype for smart city logistics."
    },
    {
      year: "2023",
      role: "Hackathon Winner",
      org: "KSEEM",
      desc: "Created AI solution for waste segregation."
    }
  ]
};

