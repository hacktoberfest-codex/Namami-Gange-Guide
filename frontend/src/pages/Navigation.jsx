import axios from 'axios';
import React, { useEffect, useState } from 'react'

import 'react-spring-bottom-sheet/dist/style.css'

export default function Navigation() {
    const [Latitude, setLatitude] = useState(0);
    const [Longitude, setLongitude] = useState(0);
    const [counter, setCounter] = useState(0);
    const [Reponse, setReponse] = useState({});

    useEffect(() => {
        axios.post('https://53ab-115-242-248-226.ngrok-free.app/updateLocation', {
            "lat": Latitude,
            "lon": Longitude
        }).then(response => {
            setReponse(response.data);
        })
    }, [Latitude, Longitude]);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true });
        setTimeout(() => {
            navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true });
            setCounter(counter + 1);

        }, 5000);


    } else {
        console.log("Geolocation not supported")
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        setLatitude(latitude);
        setLongitude(longitude);
    }

    function error() {
        setLatitude(-1);
        setLongitude(-1);
        console.log("Unable to retrieve your location");
    }

    return (
        <div>
            <div>{`Latitude: ${Latitude}, Longitude: ${Longitude}\n`}</div>
            <pre>{JSON.stringify(Reponse, null, 4)}</pre>
            <div>{Reponse.type}</div>
        </div>

    )
}
