import React from "react"    // react
import { useState } from "react";

function Newform(props) {
    const [playlist, setPlaylist] = useState({
        name: "",
        songs: "",
        genre: "",
        artist: "",
        album: "",
        image: "",
        url: "",
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
            name: "",
            songs: "",
            genre: "",
            artist: "",
            album: "",
            image: "",
            url: "",
        })
    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name"
                    name="name"
                    value={playlist.name}
                    onChange={handleChange} />
            </form>
            <form onSubmit={handleSubmit}>
                <input placeholder="Song"
                    name="song"
                    value={playlist.song}
                    onChange={handleChange} />
            </form>
            <form onSubmit={handleSubmit}>
                <input placeholder="Artist"
                    name="artist"
                    value={playlist.artist}
                    onChange={handleChange} />
            </form>
            <form onSubmit={handleSubmit}>
                <input placeholder="Url"
                    name="url"
                    value={playlist.url}
                    onChange={handleChange} />
            </form>
                <button className="update-btn">Add Song</button>
        </section>
    )

}

export default Newform


