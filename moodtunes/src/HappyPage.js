import { useEffect, useState } from 'react';

const HappyPage = () => {
    const [songs, setSongs] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('api/songs?mood=happy')
            .then(() => {
                if (!res.ok) throw new Error ('Could not load happy songs');
                return res.json();
            })
            .then((data) => setSongs(data))
            .catch((err) => setError(err.message));
        
    }, []);

    return (
        <div>
            <h2>Happy Songs</h2>
            {songs.map((song, index) => (
                <div key="index">
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                    <a href={song.youtube_link} target="_blank" rel="noreferrer">
                        Listen
                    </a>
                </div>
            ))}
        </div>
    );
};

export default HappyPage;