export type AILabStatus = "LIVE" | "EXPERIMENT" | "IN DEVELOPMENT" | "COMING SOON";

export interface AIExperiment {
  id: string;
  name: string;
  shortExplanation: string;
  technology: string[];
  status: AILabStatus;
  demoUrl?: string;
}

export const aiExperiments: AIExperiment[] = [
  {
    id: "vision-classifier",
    name: "Real-time Vision Classifier",
    shortExplanation: "A browser-based computer vision model that identifies objects in real-time using your webcam.",
    technology: ["TensorFlow.js", "React", "WebRTC"],
    status: "EXPERIMENT",
    demoUrl: "https://dandiatechsolution.vercel.app/"
  },
  {
    id: "doc-qna",
    name: "Document Q&A Agent",
    shortExplanation: "Upload any PDF and instantly ask questions to extract key information using semantic search.",
    technology: ["LangChain", "OpenAI", "Pinecone"],
    status: "LIVE",
    demoUrl: "https://dandiatechsolution.vercel.app/"
  },
  {
    id: "voice-assistant",
    name: "Voice-to-Task Assistant",
    shortExplanation: "An AI assistant that listens to voice commands and automatically generates actionable tasks.",
    technology: ["Whisper API", "GPT-4", "Next.js"],
    status: "IN DEVELOPMENT"
  },
  {
    id: "generative-ui",
    name: "Generative UI Builder",
    shortExplanation: "Describe a component in plain English, and the AI generates functional React code instantly.",
    technology: ["React", "LLMs", "TailwindCSS"],
    status: "COMING SOON"
  }
];
