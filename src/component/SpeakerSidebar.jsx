import React, { useState } from 'react';
import '../styles/sidebar.scss';
import IMAGE from '../assets/profile_picture.png';
import EDIT_IMAGE from '../assets/editing.png';

const SpeakerSidebar = ({ isOpen, closeSidebar }) => {
    const [selectedSpeakers, setSelectedSpeakers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const speakers = [
        { name: "Eleanor Pena", area: "President of Sales", company: "XYZ Organisation" },
        { name: "Esther Howard", area: "Marketing Coordinator", company: "XYZ Organisation" },
        { name: "Albert Flores", area: "Nursing Assistant", company: "XYZ Organisation" },
        { name: "John Doe", area: "Marketing Head", company: "XYZ Organisation" },
        { name: "Savannah Nguyen", area: "Web Designer", company: "XYZ Organisation" }
    ];

    const handleSelectSpeaker = (speaker) => {
        if (selectedSpeakers.includes(speaker.name)) {
            setSelectedSpeakers(selectedSpeakers.filter(s => s !== speaker.name));
        } else {
            setSelectedSpeakers([...selectedSpeakers, speaker.name]);
        }
    };

    const handleCancelSelection = () => {
        setSelectedSpeakers([]);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredSpeakers = speakers.filter(speaker =>
        speaker.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={`sidebar ${isOpen ? 'active' : ''}`}>
            <div className="header">
                Add Speaker
                <button onClick={closeSidebar} className="close-button">X</button>
            </div>
            <div >
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
            </div>
            <div className="speaker-list">
                {filteredSpeakers.map((speaker) => (
                    <div
                        key={speaker.name}
                        className={`speaker ${selectedSpeakers.includes(speaker.name) ? 'selected' : ''}`}
                        onClick={() => handleSelectSpeaker(speaker)}
                    >
                        <div>
                            <img className="avatar" src={IMAGE} alt={`${speaker.name}'s avatar`} />
                        </div>
                        <div className="speaker-details">
                            <div className="speaker-name">{speaker.name}</div>
                            <div className='speaker-sub-detail'>
                                <div className="speaker-area">{speaker.area}</div>
                                <span style={{ marginLeft: '5px', marginRight: '5px' }}> | </span>
                                <div className="speaker-company">{speaker.company}</div>
                            </div>
                            <div className='edit-option'>
                                <img className="edit-image" src={EDIT_IMAGE} alt="edit" />
                                <span className='edit'>Edit Speaker</span>
                            </div>
                        </div>
                        <div className="check-container">
                            <input
                                type="checkbox"
                                checked={selectedSpeakers.includes(speaker.name)}
                                onChange={() => handleSelectSpeaker(speaker)}
                                className='check'
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="actions">
                <div>
                    <button
                        className="add-button"
                        disabled={selectedSpeakers.length === 0}
                        onClick={() => alert('Speakers Added!')}
                    >
                        Add
                    </button>
                    <button className="cancel-button" onClick={handleCancelSelection}>
                        Cancel
                    </button>
                </div>

                <div>
                    <span className='create-speaker'>Create a Speaker</span>
                </div>


            </div>
        </div>
    );
};

export default SpeakerSidebar;
