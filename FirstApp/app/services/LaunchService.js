import React from "react";
import { AsyncStorage } from "react-native";
import SQLite from "react-native-sqlite-storage";

export default class LaunchService {

    // I'm familiar with the async and await from C# so I wanted to try fetching async with promises
    // instead.
    static async getNasaUrlsAsync() {
        return fetch('https://launchlibrary.net/1.3/agency/NASA')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.agencies[0].infoURLs;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    static getCachedNasaUrls(completion: (nasaUrls) => {}) {

    }
}
