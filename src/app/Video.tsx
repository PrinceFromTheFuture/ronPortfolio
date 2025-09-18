import React from "react";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  className?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  preload?: "auto" | "metadata" | "none";
};

export default function VideoPlayer({
  src,
  poster,
  className = "",
  autoplay = true,
  muted = true,
  loop = true,
  playsInline = true,
  preload = "metadata",
}: VideoPlayerProps) {
  if (!src) return null;

  return (
    // Use Tailwind's aspect-video for 16:9; fallback to padding-top hack if not available
    <div className={`w-full ${className}`}>
      <div className="relative overflow-hidden rounded-2xl bg-black" style={{ paddingTop: "56.25%" }}>
        {/* Actual video positioned absolutely to cover the 16:9 box */}
        <video
          src={src}
          poster={poster}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay={autoplay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          aria-label="Decorative looping video"
        />
      </div>
    </div>
  );
}

// Usage example:
// <VideoPlayer src="/videos/loop.mp4" poster="/images/poster.jpg" className="my-4" />

// Notes:
// - This component enforces a 16:9 aspect ratio using the padding-top hack (56.25%).
// - If your Tailwind setup includes the aspect-ratio plugin you can replace the wrapper
//   <div className="relative" style={{ paddingTop: '56.25%' }}> with
//   <div className="aspect-video relative"> and remove the inline style.
// - Autoplay usually requires muted to actually start in browsers. Keep muted=true if you want autoplay.
