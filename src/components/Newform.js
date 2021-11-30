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
            <form onSubmit={handleSubmit}>
                <input placeholder="Username"
                    name="userName"
                    value={playlist.name}
                    onChange={handleChange} />
                <input placeholder="Playlist Name"
                    name="playlistName"
                    value={playlist.song}
                    onChange={handleChange} />
                <input placeholder="Tag Name"
                    name="playlistTags"
                    value={playlist.artist}
                    onChange={handleChange} />
                <input type="submit" value="Create Playlist"/>
            </form>

        </section>
    )

}

export default Newform




