import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCYl9tNh6f2kZu5RnevLqOo62D7lIOajWo';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');

    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0] });
        });
    }

    render() {
        return (
            <div>
                <VideoDetail video={this.state.selectedVideo} />
                <SearchBar />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
            </div>
        )
    }
}



ReactDOM.render(<App />, document.querySelector('.container'));
