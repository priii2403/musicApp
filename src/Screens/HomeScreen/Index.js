import React, { useState } from "react";
import "./HomeScreen.css";
import mainContentImage from "../../Assets/Pic.png";
import playingImage from "../../Assets/player.png";

// Sample audio files (You need to add actual paths to your audio files)
import song1Audio from "../../Assets/1.mp3";
import song2Audio from "../../Assets/2.mp3";
import song3Audio from "../../Assets/3.mp3";
import song4Audio from "../../Assets/4.mp3";
import song5Audio from "../../Assets/5.mp3";

const HomeScreen = () => {
  // Sample playlist data with audio files
  const playlistData = [
    {
      id: 1,
      title: "Song 1",
      playing: false,
      time: "3:45",
      album: "Album A",
      audio: song1Audio,
    },
    {
      id: 2,
      title: "Song 2",
      playing: false,
      time: "4:20",
      album: "Album B",
      audio: song2Audio,
    },
    {
      id: 3,
      title: "Song 3",
      playing: false,
      time: "5:10",
      album: "Album C",
      audio: song3Audio,
    },
    {
      id: 4,
      title: "Song 3",
      playing: false,
      time: "5:10",
      album: "Album C",
      audio: song4Audio,
    },
    {
      id: 5,
      title: "Song 3",
      playing: false,
      time: "5:10",
      album: "Album C",
      audio: song5Audio,
    },
  ];

  const [currentSong, setCurrentSong] = useState(null);
  const [audio, setAudio] = useState(null);

  const playSong = (song) => {
    if (audio) {
      audio.pause();
    }

    const newAudio = new Audio(song.audio);
    setAudio(newAudio);
    setCurrentSong(song.id);
    newAudio.play();

    newAudio.addEventListener("ended", () => {
      setCurrentSong(null); // Reset when song finishes
    });
  };

  const stopSong = () => {
    if (audio) {
      audio.pause();
      setCurrentSong(null);
    }
  };

  return (
    <div className="home-screen">
      <div className="partition menu">
        {/* Menu section */}
        <div className="label-row">
          <div className="label1">Dream</div>
          <div className="label2">Music</div>
        </div>
        <div>menu</div>
        <div className="menu-items">
          <div className="menu-item">
            <i className="icon-home"></i> Home
          </div>
          <div className="menu-item">
            <i className="icon-trends"></i> Trends
          </div>
          <div className="menu-item">
            <i className="icon-library"></i> Library
          </div>
          <div className="menu-item">
            <i className="icon-discover"></i> Discover
          </div>
        </div>
        <div className="settings">
          <div>General</div>
          <div className="menu-item">
            <i className="icon-settings"></i> Settings
          </div>
          <div className="menu-item">
            <i className="icon-logout"></i> Logout
          </div>
        </div>
      </div>

      <div className="partition content">
        {/* Navbar section */}
        <div className="navbar">
          <div className="nav-item">Music</div>
          <div className="nav-item">Podcast</div>
          <div className="nav-item">Live</div>
          <div className="nav-item">Radio</div>
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>

        {/* Main content section */}
        <div className="main-content">
          <img
            src={mainContentImage}
            alt="Main content"
            className="main-image"
          />
          <div className="playlist">
            <div className="header-row">
              <div className="tt">Popular</div>
              <div className="tt">See All</div>
            </div>
            <div className="playlist-header">
              <div>No</div>
              <div>Title</div>
              <div>Playing</div>
              <div>Time</div>
              <div>Album</div>
              <div>Controls</div>
            </div>
            <div className="playlist-items">
  {playlistData.map((song, index) => (
    <div key={song.id} className="playlist-item">
      <div className="playlist-number">{index + 1}</div>
      <div>{song.title}</div>
      <div>{song.playing ? "Playing" : "Stopped"}</div>
      <div>{song.time}</div>
      <div>{song.album}</div>
      <div className="controls">
        {currentSong === song.id ? (
          <button onClick={stopSong}>Stop</button>
        ) : (
          <button onClick={() => playSong(song)}>Play</button>
        )}
      </div>
    </div>
  ))}
</div>
          </div>
        </div>
      </div>

      <div className="partition now-playing">
        {/* Now playing section */}
        <div className="now-playing-card">
          <div className="now-playing-header">Now Playing</div>
          <img src={playingImage} alt="Song" className="song-image" />
          <div className="song-title">Song Title</div>
          <div className="singer-name">Singer Name</div>
          <div className="playing-bar">{/* Progress bar goes here */}</div>
          <div className="controls">{/* Player controls go here */}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
