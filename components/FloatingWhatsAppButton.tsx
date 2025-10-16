import React from "react";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/6283141748248"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-14 h-14 rounded-full shadow-lg hover:scale-105 transition-transform"
      />
    </a>
  );
}
