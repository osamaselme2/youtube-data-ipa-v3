import React, { useEffect, useState }from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

const App = () => {
  ///search item
  const [search, setSearch] = useState('');
  ///search data
  const [data, setData] = useState([]);
  ///current videos
  const [currentVideo, setCurrentVideo] = useState({});
  //isloading
  const [isLoading, setisLoading] = useState(true);
  ///function
  const searchData = (text) => {
    setSearch(text);
    axios
    .get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q:search,
        maxResults: 15,
        key:'AIzaSyDRTsJqp5jMVvZKpxVk0GluLtCq0Re3V8k',
        part: 'snippet',
      },
    })
    .then((videos) => {
      const videosfiltered = filteredVideos(videos.data.items);
      setData(videosfiltered);
      setCurrentVideo(videosfiltered[0]);
      setisLoading(false);
    })
    .catch((err ) => console.log(err));
  };

  const filteredVideos = (videoList) => {
    const filteredVideos = [];

    videoList.map((video) => {
      if (video.id.kind === 'youtube#video') {
        filteredVideos.push(video);
      }
    })

    return filteredVideos;
  };

  const changeCurrentVideo = (video) =>{
    setCurrentVideo(video);
  }

    useEffect( () => {
      searchData('labya');
    },[])
    return(
      <div className='App'>
        <Header search={searchData} />
        <Body 
        currentVideo={currentVideo}
        isLoading={isLoading} 
        videos={data}
        changeCurrentVideo={changeCurrentVideo} 
        />
        
      </div>

    );
};
    


export default App;
