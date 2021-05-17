function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 31.47879104839881, lng: 34.974136135653474 },
    zoom: 7.4,
    mapId: "e8111ae3fb9ab26c",
    gestureHandling: "greedy",
    disableDefaultUI: true,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  //Name
  //Lat,Long
  //Image URL
  //ScaledSize width,height

  const locations = [
    [
      "You're Here",
      31.783983989933148,
      34.673487089335644,
      "placeholder.svg",
      32,
      32,
      "You're Here!",
    ],
    [
      "Mount Hermon",
      33.3090064466715,
      35.76612525081759,
      "hermon.png",
      32,
      32,
      "Mount Hermon - The highest point in Israel is an inviting place to hike all year round. Skiers, of course, will head straight for Mount Hermon in winter, but those who prefer to walk can also have a ball there.<br> When summer has already set in over the rest of the country, Mount Hermon is still bursting with the vitality of an extended springtime.",
    ],
    [
      "Eilat",
      29.559956379898885,
      34.94984719289768,
      "eilat.png",
      32,
      32,
      "Eilat is part of the Southern Negev Desert,the city is considered a tourist destination for domestic and international tourists heading to Israel.Eilat averages 360 sunny days a year.",
    ],
    [
      "Dead Sea",
      31.47442155544856,
      35.4888581689118,
      "dead-sea.png",
      32,
      32,
      "Dead sea is a region that combines the greatest contrasts in Nature. An island of constant summer in the heart of winter, a place where the sun is good and the mud purifies. An arid desert in the heart of which is a wondrous sea, filled with healing properties.A sea that allows you to float peacefully, surrounded by an extraordinary, ancient landscape. A secluded getaway that has served, throughout history, as a spiritual center and cradle of religions.The Dead Sea Land is an enchanting microcosm in which the sun, the sea and the desert mountains meet.A place where colors are sharper, Nature is wilder, tranquility is deeper, where history draws closer, and where every experience becomes much greater.",
    ],
    [
      "Sea Of Galilee",
      32.79791554908946,
      35.588644420620554,
      "kineret.png",
      32,
      32,
      "Sea Of Galilee - is a freshwater lake in Israel. It is the lowest freshwater lake on Earth and the second-lowest lake in the world.at its fullest, and its maximum depth is approximately 43 metres (141 ft). The lake is fed partly by underground springs but its main source is the Jordan River, which flows through it from north to south and exits the lake at the Degania Dam.",
    ],
    [
      "Jerusalem",
      31.768077162479134,
      35.209287934616604,
      "jerusalem.png",
      32,
      32,
      "Jeruslaem - is one of the oldest cities in the world, and is considered holy to the three major Abrahamic religions—Judaism, Christianity, and Islam. ",
    ],
    [
      "Tel-Aviv",
      32.086145890447234,
      34.788335475770744,
      "tlv.png",
      32,
      32,
      "Tel Aviv - is the most populous city in the Gush Dan metropolitan area of Israel. Located on the Israeli Mediterranean coastline and with a population of 460,613, it is the economic and technological center of the country. If East Jerusalem is considered part of Israel, Tel Aviv is the country's second most populous city after Jerusalem; if not, Tel Aviv is the most populous city before West Jerusalem.",
    ],
    [
      "Herzliya",
      32.1628566645767,
      34.79483259157042,
      "hertzeliya.png",
      32,
      32,
      "Herzliya - is an affluent city in the central coast of Israel, in the middle of the Central District (Israel) known for its robust start-up and entrepreneurial culture. Named after Theodor Herzl, the founder of modern Zionism, Herzliya covers an area of 21.6 square kilometres (8.3 sq mi). At its western municipal boundaries is Herzliya Pituah, one of Israel's most affluent neighborhoods and home to numerous embassies, company headquarters, as well as prominent Israeli business people.",
    ],
    [
      "Desert Mountains",
      30.609322387316777,
      34.815938683123825,
      "desert.png",
      32,
      32,
      "Maktesh Ramon - is a geological feature of Israel's Negev desert. Located at the peak of Mount Negev, some 85 km south of the city of Beersheba, the landform is not an impact crater from a meteor nor a volcanic crater formed by a volcanic eruption, but rather is the world's largest erosion cirque (steephead valley or box canyons). The formation is 40 km long, 2–10 km wide and 500 meters deep, and is shaped like an elongated heart.",
    ],
    [
      "Forest",
      32.73370039057146,
      35.014255432987056,
      "forest.png",
      32,
      32,
      "Mount Carmel - is a coastal mountain range in northern Israel stretching from the Mediterranean Sea towards the southeast. The range is a UNESCO biosphere reserve. A number of towns are situated there, most notably the city of Haifa, Israel's third largest city, located on the northern and western slopes.",
    ],
    [
      "Golan Heights",
      33.028563356361026,
      35.758540275844254,
      "golan-heights.png",
      32,
      32,
      "Golan - is a region in the Levant, spanning about 1,800 square kilometers (690 sq mi). The region defined as the Golan Heights differs between disciplines: as a geological and biogeographical region, the Golan Heights refers to a basaltic plateau bordered by the Yarmouk River in the south, the Sea of Galilee and Hula Valley in the west, the Anti-Lebanon with Mount Hermon in the north and Wadi Raqqad in the east.",
    ],
  ];

  for (i = 0; i < locations.length; i++) {
    const currLocation = locations[i];

    const marker = new google.maps.Marker({
      position: { lat: currLocation[1], lng: currLocation[2] },
      map,
      title: currLocation[0],
      icon: {
        url: currLocation[3],
        scaledSize: new google.maps.Size(currLocation[4], currLocation[5]),
      },
      animation: google.maps.Animation.DROP,
    });

    const infowindow = new google.maps.InfoWindow({
      content: currLocation[6],
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });

    marker.addListener("click", () => {
      map.setZoom(7.4);
      map.setCenter(marker.getPosition());
    });
  }
}

/* 31.783983989933148, 34.673487089335644 */
/* 31.47879104839881, 34.974136135653474 */
