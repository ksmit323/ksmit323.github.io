import React from 'react';
import YouTube from 'react-youtube';


interface YouTubeEmbedProps {
    videoId: string;
    start?: number; 
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, start = 0 }) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
            start
        },
    };

    return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeEmbed;