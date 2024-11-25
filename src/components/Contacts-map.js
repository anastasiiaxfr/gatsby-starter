import React, { useEffect } from 'react';

const ContactMap = () => {
  useEffect(() => {
    // Dynamically load the Google Maps script if not already loaded
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBPF99qS_1PYbUeLp_O7KqhMBv75-vRx2E&callback=initMap`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize the map when the script is loaded
      window.initMap = () => {
        const location = { lat: 50.4692319, lng: 30.46604775 };
        const map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: location,
          styles: [
            { elementType: 'geometry', stylers: [{ color: '#0d0f18' }] },
            { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#0d0f18' }] },
            { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#bdbdbd' }] },
            { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
            { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#181818' }] },
            { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#1f2439' }] },
            { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
            { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#000000' }] },
            { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#3d3d3d' }] }
          ]
        });

        new window.google.maps.Marker({
          position: location,
          map: map
        });
      };
    }
  }, []);

  return (
    <section className="mb-0 bg-gray-100">
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </section>
  );
};

export default ContactMap;
