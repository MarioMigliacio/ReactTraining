import VideoItem from "./VideoItem";
import React from "react";

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem video={video} onVideoSelect={onVideoSelect} />;
    });

    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )
};

export default VideoList;