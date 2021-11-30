import React from "react"    // react
import { useState } from "react";
import "./Newplaylist/newform.css"

function Newform(props) {
    const [playlist, setPlaylist] = useState({
        userName: "",
        playlistName: "",
        playlistTags: "",

    }
    )
    const handleChange = (event) => {
        setPlaylist({
            ...playlist,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.addPlaylist(playlist)
        setPlaylist({
            userName: "",
            playlistName: "",
            playlistTags: "",
        })
    }
    return (
        <section>
            <form onSubmit={handleSubmit} className="form">
                <div className="usernameSpan">
                <span>Username:    </span>
                <input placeholder="Name"
                    name="userName"

                    value={playlist.userName}
                    onChange={handleChange} 
                    className="usernameInput"/>
                </div>
                <div className="usernameSpan">
                    <span>Playlist Tag:</span>
                    <input placeholder="Untitled Playlist"
                        name="playlistName"
                        value={playlist.playlistName}
                        onChange={handleChange}
                        className="playlistNameInput" />
                    
                </div>
                <div className="usernameSpan">
                    <span>Playlist name: </span>
                    <input placeholder="Category"
                        name="playlistTags"
                        value={playlist.playlistTags}
                        onChange={handleChange}
                        className="playlistTagsInput" />
                </div>
            </form>
            <input type="submit" value="Create Playlist" className="createPlaylistButton" />

        </section>
    )

}

export default Newform




