
  mapboxgl.accessToken = mapToken
 
    const map = new mapboxgl.Map({
        container: "map", // container ID
         style:"mapbox://styles/mapbox/streets-v12",
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 12 // starting zoom
    });

     const marker = new mapboxgl.Marker({color:"red"})
     .setLngLat(listing.geometry.coordinates)
     .setPopup(
      new mapboxgl.Popup({offset:25}).setHTML(
        `<h6><b>${listing.location}</b></h6> <p>Exact Location will be Provided After Booking <p/>`
      )
     )
     .addTo(map);