import React, { useState } from 'react'

export default function Navigation() {
    const [Latitude, setLatitude] = useState(0);
    const [Longitude, setLongitude] = useState(0);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error)
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
        console.log("Unable to retrieve your location");
    }
    return (
        <div>{
            `Latitude: ${Latitude}, Longitude: ${Longitude}`
        }
        </div>
    )
}
