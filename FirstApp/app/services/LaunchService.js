import React from "react";
import { AsyncStorage } from "react-native";
import SQLite from "react-native-sqlite-storage";

export default class LaunchService {

    // I'm familiar with the async and await from C# so I wanted to try fetching with promises
    // instead.
    static getNasaUrlsAsync() {
        return fetch('https://launchlibrary.net/1.3/agency/NASA')
            .then((response) => response.json())
            .then((responseJson) => {
                var urls = responseJson.agencies[0].infoURLs;
                AsyncStorage.setItem('nasaUrls', JSON.stringify(urls));
                return urls;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }

    static getCachedNasaUrls() {
        return AsyncStorage.getItem('nasaUrls')
            .then((result) => {
                return JSON.parse(result);
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }
}
