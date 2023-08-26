import React, { useRef, useState } from "react";
import { BsFullscreen } from "react-icons/bs";
import { FaPause, FaPlay } from "react-icons/fa";

function VideoTestimonial({ source }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlay(true);
    }
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setPlay(false);
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen(); // Older Firefox
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen(); // Chrome, Safari, Opera
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen(); // IE
      }
    }
  };
  return (
    <div className="hover:shadow-2xl cursor-pointer relative rounded-md lg:w-full h-[230px] lg:h-[365px] group">
      <video
        src={source}
        ref={videoRef}
        className="absolute w-full h-full object-cover rounded-md"
        loop
      ></video>
      <button
        className="hidden group-hover:flex play-btn absolute inset-0 z-10 left-[50%] px-2 py-2 bg-white/70 w-12 h-12 top-[50%] translate-x-[-50%]  translate-y-[-50%] items-center justify-center rounded-full"
        onClick={!play ? handlePlayVideo : handlePauseVideo}
      >
        {!play ? <FaPlay /> : <FaPause />}
      </button>

      <button
        className="hidden group-hover:flex w-10 h-10 bg-white/90 rounded-full absolute bottom-5 right-5  items-center justify-center text-black"
        onClick={handleFullScreen}
      >
        <BsFullscreen />
      </button>
    </div>
  );
}

export default VideoTestimonial;
