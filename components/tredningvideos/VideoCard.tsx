import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PlayCircle } from "lucide-react"

export default function VideoCard({ name, channelName, thumbnail, views, createdAt,duration, videoId  }) {
    const videoLink = `https://www.youtube.com/watch?v=${videoId}`;

    const formatViews = (views) => {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(1) + 'M';
        } else if (views >= 1000) {
            return (views / 1000).toFixed(1) + 'K';
        }
        return views == undefined ? 0 : views.toString();
    };

    const timeAgo = (date) => {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);
        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) return interval + " years ago";
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) return interval + " months ago";
        interval = Math.floor(seconds / 86400);
        if (interval > 1) return interval + " days ago";
        interval = Math.floor(seconds / 3600);
        if (interval > 1) return interval + " hours ago";
        interval = Math.floor(seconds / 60);
        if (interval > 1) return interval + " minutes ago";
        return seconds + " seconds ago";
    };

    const formatDurationYouTubeStyle = (duration) => {
        const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
        const matches = duration.match(regex);
    
        const hours = matches[1] ? parseInt(matches[1]) : 0;
        const minutes = matches[2] ? parseInt(matches[2]) : 0;
        const seconds = matches[3] ? parseInt(matches[3]) : 0;
    
        // If hours are present, format as "H:MM:SS"
        if (hours > 0) {
            return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    
        // If no hours, format as "MM:SS"
        return `${minutes}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <Card className="w-full max-w-sm overflow-hidden">
            <div className="relative">
                <img
                    src={thumbnail}
                    alt={name}
                    className="w-full h-auto object-cover"
                    width={320}
                    height={180}
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1 rounded">
                  {formatDurationYouTubeStyle(duration)}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                    <a href={videoLink} target="_blank"><PlayCircle className="w-16 h-16 text-white" /></a>
                </div>
            </div>
            <CardContent className="p-4">
                <div className="flex space-x-4">
                    <div className="flex-1 space-y-1">
                        <h3 className="font-semibold line-clamp-2">
                            <a href={videoLink} target="_blank">{name}</a>
                        </h3>
                        <div className="text-sm text-muted-foreground">
                            <p>{channelName}</p>
                            <p> {formatViews(views)} views • {timeAgo(createdAt)} </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}