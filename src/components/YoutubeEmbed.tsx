import React from "react";

import './YoutubeEmbed.css';

type YoutubeEmbedProps = {
    embedId: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({embedId}) => {
    return (<div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
};

export default YoutubeEmbed;
