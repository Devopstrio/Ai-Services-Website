const computerVision = {
  id: "computer-vision",
  breadcrumbs: ["AI Capabilities", "Computer Vision"],
  hero: {
    titleLight: "Computer",
    titleBold: "Vision",
    description: "Give your software the power of sight. We build real-time visual AI models that analyze images and video feeds to automate inspection, enhance security, and extract spatial insights.",
  },
  inAction: {
    headingLight: "Seeing Beyond",
    headingRed: "Pixels",
    paragraph: "Computer Vision is transforming the physical world. DevOpsTRIO engineers deep learning vision models capable of real-time object detection, facial recognition, and defect analysis. We deploy lightweight, high-performance models directly to edge devices on the factory floor, or scale massive video-processing pipelines in the cloud for global surveillance networks.",
    buttonText: "See Vision AI Live",
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  },
  metricsCards: [
    { value: "99.9%", label: "Defect Detection Rate", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop" },
    { value: "30fps+", label: "Real-Time Inference", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop" },
    { value: "Edge", label: "Optimized Deployment", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop" },
    { value: "10M+", label: "Frames Processed", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" }
  ],
  whoWeWorkWith: {
    titleLight: "Vision",
    titleRed: "Applications",
    items: [
      { title: "Manufacturing", desc: "Automate quality assurance by detecting microscopic defects on assembly lines in real-time.", icon: "cpu" },
      { title: "Retail", desc: "Analyze customer foot traffic, heatmaps, and automate checkout processes using camera feeds.", icon: "users" },
      { title: "Healthcare", desc: "Assist radiologists by automatically identifying anomalies in X-rays and MRI scans.", icon: "database" }
    ]
  },
  benefits: {
    titleLight: "The Vision",
    titleRed: "Advantage",
    items: [
      { title: "Tireless Inspection", desc: "Cameras don't get fatigued. Maintain perfect quality control 24/7 without human error.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" },
      { title: "Edge Processing", desc: "Process video directly on local cameras to avoid massive bandwidth costs and ensure privacy.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
      { title: "Spatial Analytics", desc: "Understand physical spaces dynamically. Track inventory levels or monitor safety compliance visually.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  cards: {
    titleLight: "Vision",
    titleRed: "Capabilities",
    items: [
      { badge: "DETECTION", title: "Object Detection", body: "Locate and classify multiple objects within a single image or video frame.", more: "We use YOLO and Faster R-CNN architectures to track inventory, vehicles, and personnel.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "SEGMENTATION", title: "Image Segmentation", body: "Classify every single pixel in an image for highly precise boundaries.", more: "Crucial for medical imaging and autonomous driving where bounding boxes aren't accurate enough.", image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "RECOGNITION", title: "Facial & Biometrics", body: "Securely identify individuals for access control or personalized experiences.", more: "We implement advanced liveness detection to prevent spoofing and ensure strict GDPR compliance.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "OCR", title: "Optical Character Recognition", body: "Extract text from messy real-world images, street signs, or handwritten notes.", more: "We combine OCR with NLP to not just read the text, but understand the context of the document.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "VIDEO", title: "Video Analytics", body: "Process live streams to detect complex events over time, like theft or safety hazards.", more: "Our pipelines handle RTSP streams, utilizing GPU-accelerated decoding for massive scalability.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "GENERATION", title: "Image Synthesis", body: "Use GANs and Diffusion models to generate missing training data or edit images.", more: "We create synthetic datasets to train vision models for rare edge cases (like specific factory defects).", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Vision",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Zero-Defect Manufacturing", desc: "Deploying Edge AI to detect 2mm defects on a high-speed automotive assembly line.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "Edge vs. Cloud Vision", desc: "A technical guide on where to process video feeds to balance latency, privacy, and cost.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Synthetic Data Generation", desc: "Using Diffusion models to bootstrap vision datasets for rare anomalies.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Optimizing YOLOv8", desc: "Techniques for achieving 60fps object detection on low-power IoT devices.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Smart City Traffic Analytics", desc: "Monitoring 500+ intersections to optimize traffic light timing dynamically.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The Future of Spatial AI", desc: "How Apple Vision Pro and advanced CV are merging the digital and physical worlds.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default computerVision;