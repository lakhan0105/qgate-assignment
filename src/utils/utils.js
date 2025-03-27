import accessControl from "../assets/access-control.jpg";
import threat from "../assets/threat.jpg";
import remote from "../assets/remote.jpg";
import management from "../assets/management.jpg";

export const servicesData = [
  {
    id: "access-control",
    title: "Access Control Systems",
    img: accessControl,
    shortDescription:
      "Secure entry with RFID, biometric, and PIN-based access.",
    description:
      "Our Access Control Systems provide multi-layered security through advanced technologies like RFID cards, biometric scanning, and PIN-based authentication. Perfect for offices, gated communities, and sensitive infrastructure, our systems ensure only authorized individuals can enter designated areas.",
  },
  {
    id: "smart-surveillance",
    title: "Smart Surveillance",
    img: threat,
    shortDescription:
      "AI-powered video monitoring for proactive threat detection.",
    description:
      "We offer intelligent surveillance solutions powered by AI and machine learning. From motion detection and facial recognition to real-time alerts and cloud recording, our systems help businesses proactively respond to potential threats and maintain safety around the clock.",
  },
  {
    id: "gate-automation",
    title: "Automated Gate Solutions",
    img: remote,
    shortDescription:
      "Remote-controlled gates with integrated safety features.",
    description:
      "Our Automated Gate Solutions combine convenience with security. Whether it’s sliding, swinging, or boom barriers, our systems support remote access, license plate recognition, and obstacle detection to ensure safe and efficient entry and exit management.",
  },
  {
    id: "visitor-management",
    title: "Visitor Management",
    img: management,
    shortDescription: "Digitally manage guest entries with real-time tracking.",
    description:
      "Enhance your facility’s security with our digital Visitor Management System. It enables quick registration, photo capture, badge printing, and real-time tracking of visitors, ensuring a smooth and secure experience for both guests and staff.",
  },
];
