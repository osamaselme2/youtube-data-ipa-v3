import React from "react";

const ShowVideo = ({ currentVideo, isLoading }) => {
    console.log(currentVideo);
    return (
        <div className="col-md-6 border pt-2" style={{ height: '500px', marginTop: '20px' }}>
            {isLoading ? ( 
                'video is Loading...'

            ) : (
            <>
             <iframe
             width='95%'
             height='60%'
             src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
             frameBorder="0"
             allow="accelerometer; autoplay; clipoard-write; encrypted-media; gyroscope-in-picture; fullscreen"
             allowFullScreen 
             title={currentVideo.id. videoId}
             />
             
             <h5>{currentVideo.snippet.title}</h5>
             <div style={{position:"relative", width: "100%"}}>
                <p className="ml-auto">
                    <b>channel Id : {currentVideo.snippet.channelId}</b>
                </p>
                <p className="text-ceter">
                    <b>channel Name : {currentVideo.snippet.channelTitle}</b>
                </p>
                <p className="text-ceter">{currentVideo.snippet.description}
                </p>
                
                
             </div>
             
             </>
            )}
            </div>

            
    )
}
export default ShowVideo;