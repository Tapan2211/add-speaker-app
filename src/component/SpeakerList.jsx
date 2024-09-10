import React from 'react';

const SpeakerList = ({ speakers, selectedSpeakers, onSelectSpeaker, searchTerm }) => {
    const filteredSpeakers = speakers.filter(speaker =>
        speaker.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="speaker-list">
            {filteredSpeakers.map(speaker => (
                <div
                    key={speaker}
                    className={`speaker ${selectedSpeakers.includes(speaker) ? 'selected' : ''}`}
                    onClick={() => onSelectSpeaker(speaker)}
                >
                    {speaker}
                </div>
            ))}
        </div>
    );
};

export default SpeakerList;
