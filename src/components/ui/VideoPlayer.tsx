"use client";

interface VideoPlayerProps {
    videoId: string;
    className?: string;
}

export const VideoPlayer = ({ videoId, className = "" }: VideoPlayerProps) => {
    return (
        <div className={`relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${className}`}>
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&controls=1&rel=0&modestbranding=1&playsinline=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
    );
};
