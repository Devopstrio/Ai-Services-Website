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
    paragraph: "Computer Vision is transforming the physical world. Devopstrio engineers deep learning vision models capable of real-time object detection, facial recognition, and defect analysis. We deploy lightweight, high-performance models directly to edge devices on the factory floor, or scale massive video-processing pipelines in the cloud for global surveillance networks.",
    buttonText: "See Vision AI Live",
    imageSrc: "/assets/capability-references/computer-vision/in-action.webp",
  },
  metricsCards: [
    { value: "99.9%", label: "Defect Detection Rate", image: "/assets/capability-references/computer-vision/metric-0.webp" },
    { value: "30fps+", label: "Real-Time Inference", image: "/assets/capability-references/computer-vision/metric-1.webp" },
    { value: "Edge", label: "Optimized Deployment", image: "/assets/capability-references/computer-vision/metric-2.webp" },
    { value: "10M+", label: "Frames Processed", image: "/assets/capability-references/computer-vision/metric-3.webp" }
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
      { title: "Tireless Inspection", desc: "Cameras don't get fatigued. Maintain perfect quality control 24/7 without human error.", image: "/assets/capability-references/computer-vision/benefit-0.webp" },
      { title: "Edge Processing", desc: "Process video directly on local cameras to avoid massive bandwidth costs and ensure privacy.", image: "/assets/capability-references/computer-vision/benefit-1.webp" },
      { title: "Spatial Analytics", desc: "Understand physical spaces dynamically. Track inventory levels or monitor safety compliance visually.", image: "/assets/capability-references/computer-vision/benefit-2.webp" }
    ]
  },
  cards: {
    titleLight: "Vision",
    titleRed: "Capabilities",
    items: [
      { badge: "DETECTION", title: "Object Detection", body: "Locate and classify multiple objects within a single image or video frame.", more: "We use YOLO and Faster R-CNN architectures to track inventory, vehicles, and personnel.", image: "/assets/capability-references/computer-vision/capability-0.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "SEGMENTATION", title: "Image Segmentation", body: "Classify every single pixel in an image for highly precise boundaries.", more: "Crucial for medical imaging and autonomous driving where bounding boxes aren't accurate enough.", image: "/assets/capability-references/computer-vision/capability-1.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "RECOGNITION", title: "Facial & Biometrics", body: "Securely identify individuals for access control or personalized experiences.", more: "We implement advanced liveness detection to prevent spoofing and ensure strict GDPR compliance.", image: "/assets/capability-references/computer-vision/capability-2.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "OCR", title: "Optical Character Recognition", body: "Extract text from messy real-world images, street signs, or handwritten notes.", more: "We combine OCR with NLP to not just read the text, but understand the context of the document.", image: "/assets/capability-references/computer-vision/capability-3.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "VIDEO", title: "Video Analytics", body: "Process live streams to detect complex events over time, like theft or safety hazards.", more: "Our pipelines handle RTSP streams, utilizing GPU-accelerated decoding for massive scalability.", image: "/assets/capability-references/computer-vision/capability-4.webp", color1: "#F5F2EA", color2: "#E6DBC6" },
      { badge: "GENERATION", title: "Image Synthesis", body: "Use GANs and Diffusion models to generate missing training data or edit images.", more: "We create synthetic datasets to train vision models for rare edge cases (like specific factory defects).", image: "/assets/capability-references/computer-vision/capability-5.webp", color1: "#F5F2EA", color2: "#E6DBC6" }
    ]
  },
  insights: {
    titleLight: "Vision",
    titleRed: "Insights",
    items: [
      { tag: "CASE STUDY", title: "Zero-Defect Manufacturing", desc: "Deploying Edge AI to detect 2mm defects on a high-speed automotive assembly line.", image: "/assets/services/webp/bg-software.webp", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "WHITE PAPER", title: "Edge vs. Cloud Vision", desc: "A technical guide on where to process video feeds to balance latency, privacy, and cost.", image: "/assets/ecosystem/domains/webp/Ecosystem_main_page_poster.webp", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "RESEARCH", title: "Synthetic Data Generation", desc: "Using Diffusion models to bootstrap vision datasets for rare anomalies.", image: "/assets/ecosystem/domains/webp/ecosysytem.-1.webp", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "FRAMEWORK", title: "Optimizing YOLOv8", desc: "Techniques for achieving 60fps object detection on low-power IoT devices.", image: "/images/downloaded/d97187fdf9_img.jpg", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "CASE STUDY", title: "Smart City Traffic Analytics", desc: "Monitoring 500+ intersections to optimize traffic light timing dynamically.", image: "/assets/ecosystem/engineering-excellence-hero/1.png", color1: "#2A2A2A", color2: "#1A1A1A" },
      { tag: "REPORT", title: "The Future of Spatial AI", desc: "How Apple Vision Pro and advanced CV are merging the digital and physical worlds.", image: "/assets/ecosystem/engineering-excellence-hero/2.png", color1: "#2A2A2A", color2: "#1A1A1A" }
    ]
  }
};
export default computerVision;