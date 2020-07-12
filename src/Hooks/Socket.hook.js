import { useState, useEffect } from 'react';

import socketIOClient from "socket.io-client";

export default function useSocketIo() {
    const [monitorando, setMonitorando] = useState(false);
    const [hashtag, setHashtag] = useState("");
    const [tweets, setTweets] = useState([]);
    const [tweetsAprovados, setTweetsAprovados] = useState([]);
    const [tweetsReprovados, setTweetsReprovados] = useState([]);

    useEffect(() => {
        const socket = socketIOClient(process.env.REACT_APP_SERVER);
    
        socket.on("init", (data) => {
          setMonitorando(data.monitorando);
          setHashtag(data.hashtag);
          setTweetsAprovados(data.tweetsAprovados);
          setTweetsReprovados(data.tweetsReprovados);
          setTweets(data.tweets);
        });
    
        socket.on("change", (data) => {
          setMonitorando(data.monitorando);
          setHashtag(data.hashtag);
          setTweetsAprovados(data.tweetsAprovados);
          setTweetsReprovados(data.tweetsReprovados);
          setTweets(data.tweets);
        });

      }, [setTweets]);


    return {hashtag,monitorando,tweets,tweetsAprovados,tweetsReprovados, setMonitorando, setHashtag}
}
