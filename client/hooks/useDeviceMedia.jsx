import React, { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';

export default function useDeviceMedia() {
    const [assets, setAssets] = useState();
    useEffect(async () => {
        const albumName = "Camera";
        const getPhotos = await MediaLibrary.getAlbumAsync(albumName);
        const getAllPhotos = await MediaLibrary.getAssetsAsync({
            first: 20,
            album: getPhotos,
            sortBy: ['creationTime'],
            mediaType: ['photo', 'video']
        });
        getAllPhotos && setAssets(getAllPhotos);
    }, []);
    return assets;
}
