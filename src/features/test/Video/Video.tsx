import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Video {
    id: number;
    title: string;
    url: string;
}

const VideoList: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await axios.get('http://localhost:3001/videos');
            setVideos(response.data);
        };

        fetchVideos();
    }, []);

    return (
        <div>
            <h1>Video List</h1>
            {videos.map((video) => (
                <div key={video.id}>
                    <h2>{video.title}</h2>
                    <video
                        width="600"
                        controls
                    >
                        <source
                            src={video.url}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ))}
        </div>
    );
};

export default VideoList;
