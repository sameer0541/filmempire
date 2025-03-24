import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const VideoPage = () => {
  const params = useParams();
  const navigate = useNavigate()
  const [dimension,setDimension] = useState({width:window.innerWidth,height:window.innerHeight});
  const handleResize=()=>{
    setDimension({width: window.innerWidth,height: window.innerHeight})
  }
  useEffect(()=>{
    window.addEventListener('resize',handleResize)
    return()=>{window.removeEventListener('resize',handleResize);}
  },[])
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0"><button className="text-4xl text-white" onClick={()=>navigate(-1)}><span>&larr;</span></button></div>
      <iframe width={dimension.width} height={dimension.height} src={`https://www.youtube.com/embed/${params.videoId}`} title="YouTube video playe" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
    </div>
  )
}

export default VideoPage;
