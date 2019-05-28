window.onload = function() {

  mapboxgl.accessToken = 'pk.eyJ1IjoiY29zbW93YW5nIiwiYSI6ImNqdWl0bG50ODFlZ2w0ZnBnc3VyejZmbWQifQ.5TjxQgPSj6B7VcFkvSfqBA';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-122.3155224, 47.6583362],
    zoom: 15
  });

  /***********************************************/
  /***************** DATA POINTS *****************/
  /***********************************************/

  const dataPoints = {
    "edges": {
      "features": [
        {
          "geometry": {
            "coordinates": [
              [
                -122.31666909435691,
                47.65841238436788
              ],
              [
                -122.31677802,
                47.65841368
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.316778, 47.6584137",
            "_v": "-122.316778, 47.6584137",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at 11TH AVE NE",
            "elevator": null,
            "footway": "crossing",
            "incline": null,
            "indoor": null,
            "layer": null,
            "length": 8.180991375885657,
            "opening_hours": null,
            "subclass": "footway",
            "surface": null,
            "width": null
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31666909435691,
                47.65841238436788
              ],
              [
                -122.31654262,
                47.65841087999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.316778, 47.6584137",
            "_v": "-122.3165426, 47.6584109",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at 11TH AVE NE",
            "elevator": null,
            "footway": "crossing",
            "incline": null,
            "indoor": null,
            "layer": null,
            "length": 9.499008624114342,
            "opening_hours": null,
            "subclass": "footway",
            "surface": null,
            "width": null
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31560448,
                47.65828728
              ],
              [
                -122.31563963,
                47.65694958
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3156045, 47.6582873",
            "_v": "-122.3156396, 47.6569496",
            "description": "Sidewalk W of 12TH AVE NE",
            "footway": "sidewalk",
            "incline": 0.056,
            "layer": 0,
            "length": 148.7,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31677802,
                47.65841368
              ],
              [
                -122.31676853,
                47.65830110999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.316778, 47.6584137",
            "_v": "-122.3167685, 47.6583011",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 42ND ST",
            "footway": "crossing",
            "length": 12.53,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31770647,
                47.65692224
              ],
              [
                -122.3179277699999,
                47.65692464
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3177065, 47.6569222",
            "_v": "-122.3179278, 47.6569246",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at ROOSEVELT WAY NE",
            "footway": "crossing",
            "length": 16.62,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31763967,
                47.65939706
              ],
              [
                -122.3176380599999,
                47.65945455
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176397, 47.6593971",
            "_v": "-122.3176381, 47.6594545",
            "description": "Sidewalk E of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0,
            "layer": 0,
            "length": 6.39,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.68
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3176363,
                47.65950904999999
              ],
              [
                -122.31786189,
                47.65951237
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176363, 47.659509",
            "_v": "-122.3178619, 47.6595124",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at ROOSEVELT WAY NE",
            "footway": "crossing",
            "length": 16.94,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31785311,
                47.65985151999999
              ],
              [
                -122.3178511699999,
                47.65992687
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3178531, 47.6598515",
            "_v": "-122.3178512, 47.6599269",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0.042,
            "layer": 0,
            "length": 8.38,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3177047899999,
                47.65683169999999
              ],
              [
                -122.3179298499999,
                47.65683400999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3177048, 47.6568317",
            "_v": "-122.3179298, 47.656834",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at ROOSEVELT WAY NE",
            "footway": "crossing",
            "length": 16.9,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3165773,
                47.65747643
              ],
              [
                -122.3165989599999,
                47.65711728
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3165773, 47.6574764",
            "_v": "-122.316599, 47.6571173",
            "description": "Sidewalk E of 11TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.041,
            "layer": 0,
            "length": 39.95,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.22
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31659,
                47.65678549999999
              ],
              [
                -122.31660487,
                47.65636576
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.31659, 47.6567855",
            "_v": "-122.3166049, 47.6563658",
            "description": "Sidewalk E of 11TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.048,
            "layer": 0,
            "length": 46.66,
            "subclass": "footway",
            "surface": "concrete",
            "width": 4.29
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31763967,
                47.65939705
              ],
              [
                -122.31786481,
                47.65939992999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176397, 47.6593971",
            "_v": "-122.3178648, 47.6593999",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at ROOSEVELT WAY NE",
            "footway": "crossing",
            "length": 16.91,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3187034099999,
                47.65951422999999
              ],
              [
                -122.31886984,
                47.6595146
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3187034, 47.6595142",
            "_v": "-122.3188698, 47.6595146",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at 9TH AVE NE",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3166083699999,
                47.65696126
              ],
              [
                -122.31659,
                47.65678549999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3166084, 47.6569613",
            "_v": "-122.31659, 47.6567855",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 41ST ST",
            "footway": "crossing",
            "length": 19.58,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31560152,
                47.65839969999999
              ],
              [
                -122.31543512,
                47.65839771
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3156015, 47.6583997",
            "_v": "-122.3154351, 47.6583977",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at 12TH AVE NE",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31560152,
                47.65839969999999
              ],
              [
                -122.3155660799999,
                47.65974848999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3156015, 47.6583997",
            "_v": "-122.3155661, 47.6597485",
            "description": "Sidewalk W of 12TH AVE NE",
            "footway": "sidewalk",
            "incline": 0.054,
            "layer": 0,
            "length": 149.93,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31708921,
                47.65685000999999
              ],
              [
                -122.31709698,
                47.6568434
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3170892, 47.65685",
            "_v": "-122.317097, 47.6568434",
            "description": "Sidewalk SE of EASTLAKE AVE NE",
            "footway": "sidewalk",
            "incline": 0,
            "layer": 0,
            "length": 0.94,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3176380599999,
                47.65945455
              ],
              [
                -122.3176363,
                47.65950904999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176381, 47.6594545",
            "_v": "-122.3176363, 47.659509",
            "description": "Sidewalk E of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0,
            "layer": 0,
            "length": 6.06,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31766994,
                47.65831176999999
              ],
              [
                -122.3176886499999,
                47.65758444
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176699, 47.6583118",
            "_v": "-122.3176886, 47.6575844",
            "description": "Sidewalk E of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": -0.037,
            "layer": 0,
            "length": 80.85,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.68
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3165453099999,
                47.65829845999999
              ],
              [
                -122.3165768399999,
                47.65748830999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3165453, 47.6582985",
            "_v": "-122.3165768, 47.6574883",
            "description": "Sidewalk E of 11TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.048,
            "layer": 0,
            "length": 90.07,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.22
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31676853,
                47.65830110999999
              ],
              [
                -122.31678888,
                47.65749207
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3167685, 47.6583011",
            "_v": "-122.3167889, 47.6574921",
            "description": "Sidewalk W of 11TH AVE NE",
            "footway": "sidewalk",
            "incline": 0.046,
            "layer": 0,
            "length": 89.93,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3179277699999,
                47.65692464
              ],
              [
                -122.31792858,
                47.65689061999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3179278, 47.6569246",
            "_v": "-122.3179286, 47.6568906",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0,
            "layer": 0,
            "length": 3.78,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.42
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31539963,
                47.65974825
              ],
              [
                -122.3153550899999,
                47.65989812
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3153996, 47.6597482",
            "_v": "-122.3153551, 47.6598981",
            "crossing": "unmarked",
            "curbramps": 0,
            "description": "Crossing at NE 43RD ST",
            "footway": "crossing",
            "length": 16.99,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3176927899999,
                47.657428
              ],
              [
                -122.3179157299999,
                47.65743075
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176928, 47.657428",
            "_v": "-122.3179157, 47.6574308",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at ROOSEVELT WAY NE",
            "footway": "crossing",
            "length": 16.74,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31560448,
                47.65828728
              ],
              [
                -122.31543808,
                47.65828529
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3156045, 47.6582873",
            "_v": "-122.3154381, 47.6582853",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at 12TH AVE NE",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31543808,
                47.65828529
              ],
              [
                -122.3144865299999,
                47.65827385
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3154381, 47.6582853",
            "_v": "-122.3144865, 47.6582739",
            "description": "Sidewalk S of NE 42ND ST",
            "footway": "sidewalk",
            "incline": -0.036,
            "layer": 0,
            "length": 71.46,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.17
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3176886499999,
                47.65758444
              ],
              [
                -122.31769049,
                47.65751285999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176886, 47.6575844",
            "_v": "-122.3176905, 47.6575129",
            "description": "Sidewalk E of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0,
            "layer": 0,
            "length": 7.96,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.68
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3176669199999,
                47.65842418999999
              ],
              [
                -122.3178902399999,
                47.65842684999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176669, 47.6584242",
            "_v": "-122.3178902, 47.6584268",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at ROOSEVELT WAY NE",
            "footway": "crossing",
            "length": 16.77,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3176277799999,
                47.65977338999999
              ],
              [
                -122.3178550699999,
                47.65977606999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176278, 47.6597734",
            "_v": "-122.3178551, 47.6597761",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at ROOSEVELT WAY NE",
            "footway": "crossing",
            "length": 17.07,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3187039599999,
                47.65940179999999
              ],
              [
                -122.3187034099999,
                47.65951422999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.318704, 47.6594018",
            "_v": "-122.3187034, 47.6595142",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 43RD ST",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3133249899999,
                47.65823529
              ],
              [
                -122.31309351,
                47.65823804
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.313325, 47.6582353",
            "_v": "-122.3130935, 47.658238",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at UNIVERSITY WAY NE",
            "footway": "crossing",
            "length": 17.38,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31677802,
                47.65841368
              ],
              [
                -122.3176669199999,
                47.65842418999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.316778, 47.6584137",
            "_v": "-122.3176669, 47.6584242",
            "description": "Sidewalk N of NE 42ND ST",
            "footway": "sidewalk",
            "incline": -0.015,
            "layer": 0,
            "length": 66.76,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.22
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3187039599999,
                47.65940179999999
              ],
              [
                -122.31887039,
                47.65940217
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.318704, 47.6594018",
            "_v": "-122.3188704, 47.6594022",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at 9TH AVE NE",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3176669199999,
                47.65842418999999
              ],
              [
                -122.31763967,
                47.65939706
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176669, 47.6584242",
            "_v": "-122.3176397, 47.6593971",
            "description": "Sidewalk E of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": -0.051,
            "layer": 0,
            "length": 108.15,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.68
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3176277799999,
                47.65977338999999
              ],
              [
                -122.31761982,
                47.65992415
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176278, 47.6597734",
            "_v": "-122.3176198, 47.6599242",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 43RD ST",
            "footway": "crossing",
            "length": 16.77,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3165768399999,
                47.65748830999999
              ],
              [
                -122.3165773,
                47.65747643
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3165768, 47.6574883",
            "_v": "-122.3165773, 47.6574764",
            "description": "Sidewalk E of 11TH AVE NE",
            "footway": "sidewalk",
            "incline": 0,
            "layer": 0,
            "length": 1.32,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.22
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31679988,
                47.65682088999999
              ],
              [
                -122.3168158799999,
                47.65636916999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3167999, 47.6568209",
            "_v": "-122.3168159, 47.6563692",
            "description": "Sidewalk W of 11TH AVE NE",
            "footway": "sidewalk",
            "incline": 0.048,
            "layer": 0,
            "length": 50.22,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3179157299999,
                47.65743075
              ],
              [
                -122.3187134399999,
                47.65743211
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3179157, 47.6574308",
            "_v": "-122.3187134, 47.6574321",
            "description": "Sidewalk S of NE 42ND ST",
            "footway": "sidewalk",
            "incline": 0.002,
            "layer": 0,
            "length": 59.9,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.78
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31771854,
                47.65630043
              ],
              [
                -122.3179923499999,
                47.65623076
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3177185, 47.6563004",
            "_v": "-122.3179923, 47.6562308",
            "crossing": "unmarked",
            "curbramps": 0,
            "description": "Crossing at ROOSEVELT WAY NE",
            "footway": "crossing",
            "length": 21.97,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31786481,
                47.65939992999999
              ],
              [
                -122.3187039599999,
                47.65940179999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3178648, 47.6593999",
            "_v": "-122.318704, 47.6594018",
            "description": "Sidewalk S of NE 43RD ST",
            "footway": "sidewalk",
            "incline": 0.026,
            "layer": 0,
            "length": 63.01,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31654262,
                47.65841087999999
              ],
              [
                -122.31560152,
                47.65839969999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3165426, 47.6584109",
            "_v": "-122.3156015, 47.6583997",
            "description": "Sidewalk N of NE 42ND ST",
            "footway": "sidewalk",
            "incline": 0.007,
            "layer": 0,
            "length": 70.68,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.47
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31679988,
                47.65682088999999
              ],
              [
                -122.31685192,
                47.65682148999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3167999, 47.6568209",
            "_v": "-122.3168519, 47.6568215",
            "description": "Sidewalk S of NE 41ST ST",
            "footway": "sidewalk",
            "incline": 0,
            "layer": 0,
            "length": 3.91,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3144865299999,
                47.65827385
              ],
              [
                -122.3142436699999,
                47.65824625999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3144865, 47.6582739",
            "_v": "-122.3142437, 47.6582463",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at BROOKLYN AVE NE",
            "footway": "crossing",
            "length": 18.49,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31543512,
                47.65839771
              ],
              [
                -122.31447749,
                47.6583862
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3154351, 47.6583977",
            "_v": "-122.3144775, 47.6583862",
            "description": "Sidewalk N of NE 42ND ST",
            "footway": "sidewalk",
            "incline": 0.036,
            "layer": 0,
            "length": 71.92,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31543808,
                47.65828529
              ],
              [
                -122.3154731599999,
                47.65695030999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3154381, 47.6582853",
            "_v": "-122.3154732, 47.6569503",
            "description": "Sidewalk E of 12TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.056,
            "layer": 0,
            "length": 148.4,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3166083699999,
                47.65696126
              ],
              [
                -122.3167757599999,
                47.65693307
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3166084, 47.6569613",
            "_v": "-122.3167758, 47.6569331",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at 11TH AVE NE",
            "footway": "crossing",
            "length": 12.95,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3172258999999,
                47.65692333999999
              ],
              [
                -122.31708921,
                47.65685000999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3172259, 47.6569233",
            "_v": "-122.3170892, 47.65685",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at EASTLAKE AVE NE",
            "footway": "crossing",
            "length": 13.11,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3142436699999,
                47.65824625999999
              ],
              [
                -122.3133249899999,
                47.65823529
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3142437, 47.6582463",
            "_v": "-122.313325, 47.6582353",
            "description": "Sidewalk S of NE 42ND ST",
            "footway": "sidewalk",
            "incline": -0.03,
            "layer": 0,
            "length": 68.99,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.34
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3154731599999,
                47.65695030999999
              ],
              [
                -122.31547774,
                47.65677619
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3154732, 47.6569503",
            "_v": "-122.3154777, 47.6567762",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 41ST ST",
            "footway": "crossing",
            "length": 19.35,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31654262,
                47.65841087999999
              ],
              [
                -122.31650736,
                47.65975976
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3165426, 47.6584109",
            "_v": "-122.3165074, 47.6597598",
            "description": "Sidewalk E of 11TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.051,
            "layer": 0,
            "length": 149.94,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.22
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31677802,
                47.65841368
              ],
              [
                -122.3167427599999,
                47.6597626
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.316778, 47.6584137",
            "_v": "-122.3167428, 47.6597626",
            "description": "Sidewalk W of 11TH AVE NE",
            "footway": "sidewalk",
            "incline": 0.05,
            "layer": 0,
            "length": 149.95,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.17
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31771725,
                47.65635022
              ],
              [
                -122.31771854,
                47.65630043
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3177173, 47.6563502",
            "_v": "-122.3177185, 47.6563004",
            "description": "Sidewalk E of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0,
            "layer": 0,
            "length": 5.53,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.34
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3178917099999,
                47.65837061999999
              ],
              [
                -122.3178902399999,
                47.65842685999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3178917, 47.6583706",
            "_v": "-122.3178902, 47.6584269",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0,
            "layer": 0,
            "length": 6.25,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.44
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31423739,
                47.65840801
              ],
              [
                -122.3133288599999,
                47.65839717
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3142374, 47.658408",
            "_v": "-122.3133289, 47.6583972",
            "description": "Sidewalk N of NE 42ND ST",
            "footway": "sidewalk",
            "incline": 0.03,
            "layer": 0,
            "length": 68.23,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.34
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3178931599999,
                47.65831439
              ],
              [
                -122.31791187,
                47.65758705999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3178932, 47.6583144",
            "_v": "-122.3179119, 47.6575871",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0.036,
            "layer": 0,
            "length": 80.85,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.52
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3165453099999,
                47.65829845999999
              ],
              [
                -122.31560448,
                47.65828728
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3165453, 47.6582985",
            "_v": "-122.3156045, 47.6582873",
            "description": "Sidewalk S of NE 42ND ST",
            "footway": "sidewalk",
            "incline": -0.007,
            "layer": 0,
            "length": 70.66,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.22
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3173445799999,
                47.65682738999999
              ],
              [
                -122.3177047899999,
                47.65683169999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3173446, 47.6568274",
            "_v": "-122.3177048, 47.6568317",
            "description": "Sidewalk S of NE 41ST ST",
            "footway": "sidewalk",
            "incline": 0.024,
            "layer": 0,
            "length": 27.05,
            "subclass": "footway",
            "surface": "concrete",
            "width": 5.13
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3133288599999,
                47.65839717
              ],
              [
                -122.3130814299999,
                47.65838876
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3133289, 47.6583972",
            "_v": "-122.3130814, 47.6583888",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at UNIVERSITY WAY NE",
            "footway": "crossing",
            "length": 18.6,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31678888,
                47.65749207
              ],
              [
                -122.31691763,
                47.65726395
              ],
              [
                -122.31697087,
                47.65720513
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3167889, 47.6574921",
            "_v": "-122.3169709, 47.6572051",
            "description": "Sidewalk NW of EASTLAKE AVE NE",
            "footway": "sidewalk",
            "incline": 0.027,
            "layer": 0,
            "length": 34.8,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3177047899999,
                47.65683169999999
              ],
              [
                -122.31771725,
                47.65635022
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3177048, 47.6568317",
            "_v": "-122.3177173, 47.6563502",
            "description": "Sidewalk E of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": -0.048,
            "layer": 0,
            "length": 53.52,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.34
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3172258999999,
                47.65692333999999
              ],
              [
                -122.31770647,
                47.65692224
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3172259, 47.6569233",
            "_v": "-122.3177065, 47.6569222",
            "description": "Sidewalk N of NE 41ST ST",
            "footway": "sidewalk",
            "incline": -0.023,
            "layer": 0,
            "length": 36.09,
            "subclass": "footway",
            "surface": "concrete",
            "width": 3.91
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3176669199999,
                47.65842418999999
              ],
              [
                -122.31766994,
                47.65831176999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176669, 47.6584242",
            "_v": "-122.3176699, 47.6583118",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at NE 42ND ST",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31766994,
                47.65831176999999
              ],
              [
                -122.3178931599999,
                47.65831439
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176699, 47.6583118",
            "_v": "-122.3178932, 47.6583144",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at ROOSEVELT WAY NE",
            "footway": "crossing",
            "length": 16.76,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3178550699999,
                47.65977606999999
              ],
              [
                -122.31785311,
                47.65985151999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3178551, 47.6597761",
            "_v": "-122.3178531, 47.6598515",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0.043,
            "layer": 0,
            "length": 8.39,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3167427599999,
                47.6597626
              ],
              [
                -122.31672258,
                47.65991322
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3167428, 47.6597626",
            "_v": "-122.3167226, 47.6599132",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at NE 43RD ST",
            "footway": "crossing",
            "length": 16.81,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31659,
                47.65678549999999
              ],
              [
                -122.3156564199999,
                47.65677423999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.31659, 47.6567855",
            "_v": "-122.3156564, 47.6567742",
            "description": "Sidewalk S of NE 41ST ST",
            "footway": "sidewalk",
            "incline": 0.015,
            "layer": 0,
            "length": 70.12,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.13
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31771725,
                47.65635022
              ],
              [
                -122.3179406299999,
                47.65635285999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3177173, 47.6563502",
            "_v": "-122.3179406, 47.6563529",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at ROOSEVELT WAY NE",
            "footway": "crossing",
            "length": 16.78,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3178931599999,
                47.65831439
              ],
              [
                -122.3178917099999,
                47.65837061999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3178932, 47.6583144",
            "_v": "-122.3178917, 47.6583706",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0,
            "layer": 0,
            "length": 6.25,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.52
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31887917,
                47.65758597
              ],
              [
                -122.31887985,
                47.65743513
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3188792, 47.657586",
            "_v": "-122.3188799, 47.6574351",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 42ND ST",
            "footway": "crossing",
            "length": 16.76,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3172258999999,
                47.65692333999999
              ],
              [
                -122.3173445799999,
                47.65682738999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3172259, 47.6569233",
            "_v": "-122.3173446, 47.6568274",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 41ST ST",
            "footway": "crossing",
            "length": 13.9,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3167757599999,
                47.65693307
              ],
              [
                -122.3168490799999,
                47.65693390999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3167758, 47.6569331",
            "_v": "-122.3168491, 47.6569339",
            "description": "Sidewalk N of NE 41ST ST",
            "footway": "sidewalk",
            "incline": 0,
            "layer": 0,
            "length": 5.51,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3155660799999,
                47.65974848999999
              ],
              [
                -122.31539963,
                47.65974825
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3155661, 47.6597485",
            "_v": "-122.3153996, 47.6597482",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at 12TH AVE NE",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31649935,
                47.65991051999999
              ],
              [
                -122.31559459,
                47.65989969
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3164994, 47.6599105",
            "_v": "-122.3155946, 47.6598997",
            "description": "Sidewalk N of NE 43RD ST",
            "footway": "sidewalk",
            "incline": 0.014,
            "layer": 0,
            "length": 67.95,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31697087,
                47.65720513
              ],
              [
                -122.3172258999999,
                47.65692333999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3169709, 47.6572051",
            "_v": "-122.3172259, 47.6569233",
            "description": "Sidewalk NW of EASTLAKE AVE NE",
            "footway": "sidewalk",
            "incline": 0.027,
            "layer": 0,
            "length": 36.71,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3167427599999,
                47.6597626
              ],
              [
                -122.3176277799999,
                47.65977338999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3167428, 47.6597626",
            "_v": "-122.3176278, 47.6597734",
            "description": "Sidewalk S of NE 43RD ST",
            "footway": "sidewalk",
            "incline": 0.012,
            "layer": 0,
            "length": 66.46,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.68
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31447749,
                47.6583862
              ],
              [
                -122.31423739,
                47.65840801
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3144775, 47.6583862",
            "_v": "-122.3142374, 47.658408",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at BROOKLYN AVE NE",
            "footway": "crossing",
            "length": 18.19,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3171987399999,
                47.65675269999999
              ],
              [
                -122.3174405,
                47.65653721
              ],
              [
                -122.3176378099999,
                47.6562471
              ],
              [
                -122.3177302,
                47.65608144
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3171987, 47.6567527",
            "_v": "-122.3177302, 47.6560814",
            "description": "Sidewalk SE of EASTLAKE AVE NE",
            "footway": "sidewalk",
            "incline": -0.037,
            "layer": 0,
            "length": 85.21,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31709698,
                47.6568434
              ],
              [
                -122.3171987399999,
                47.65675269999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.317097, 47.6568434",
            "_v": "-122.3171987, 47.6567527",
            "description": "Sidewalk SE of EASTLAKE AVE NE",
            "footway": "sidewalk",
            "incline": -0.037,
            "layer": 0,
            "length": 12.65,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3169708599999,
                47.65720513
              ],
              [
                -122.3167695799999,
                47.65712196999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3169709, 47.6572051",
            "_v": "-122.3167696, 47.657122",
            "crossing": "unmarked",
            "curbramps": 0,
            "description": "Crossing at EASTLAKE AVE NE",
            "footway": "crossing",
            "length": 17.72,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31791187,
                47.65758705999999
              ],
              [
                -122.3187127399999,
                47.65758842999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3179119, 47.6575871",
            "_v": "-122.3187127, 47.6575884",
            "description": "Sidewalk N of NE 42ND ST",
            "footway": "sidewalk",
            "incline": -0.003,
            "layer": 0,
            "length": 60.14,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.24
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31769049,
                47.65751285999999
              ],
              [
                -122.3176927899999,
                47.657428
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176905, 47.6575129",
            "_v": "-122.3176928, 47.657428",
            "description": "Sidewalk E of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": -0.046,
            "layer": 0,
            "length": 9.43,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.68
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31650736,
                47.65975976
              ],
              [
                -122.31649935,
                47.65991051999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3165074, 47.6597598",
            "_v": "-122.3164994, 47.6599105",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at NE 43RD ST",
            "footway": "crossing",
            "length": 16.77,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3167757599999,
                47.65693307
              ],
              [
                -122.31679988,
                47.65682088999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3167758, 47.6569331",
            "_v": "-122.3167999, 47.6568209",
            "crossing": "unmarked",
            "curbramps": 0,
            "description": "Crossing at NE 41ST ST",
            "footway": "crossing",
            "length": 12.6,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3165989599999,
                47.65711728
              ],
              [
                -122.3166083699999,
                47.65696126
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.316599, 47.6571173",
            "_v": "-122.3166084, 47.6569613",
            "description": "Sidewalk E of 11TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.041,
            "layer": 0,
            "length": 17.35,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.22
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31654262,
                47.65841087999999
              ],
              [
                -122.3165453099999,
                47.65829845999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3165426, 47.6584109",
            "_v": "-122.3165453, 47.6582985",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at NE 42ND ST",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3187127399999,
                47.65758842999999
              ],
              [
                -122.31887917,
                47.65758597
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3187127, 47.6575884",
            "_v": "-122.3188792, 47.657586",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at 9TH AVE NE",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3144865299999,
                47.65827385
              ],
              [
                -122.31447749,
                47.6583862
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3144865, 47.6582739",
            "_v": "-122.3144775, 47.6583862",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 42ND ST",
            "footway": "crossing",
            "length": 12.51,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3144865299999,
                47.65827385
              ],
              [
                -122.31451569383785,
                47.65716394482954
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3144865, 47.6582739",
            "_v": "(-122.31451569383785, 47.65716394482954)",
            "description": "Sidewalk W of BROOKLYN AVE NE",
            "footway": "sidewalk",
            "incline": 0.052,
            "layer": 0,
            "length": 148.41,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.27
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31786189,
                47.65951237
              ],
              [
                -122.3178550699999,
                47.65977606999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3178619, 47.6595124",
            "_v": "-122.3178551, 47.6597761",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0.043,
            "layer": 0,
            "length": 29.31,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31786189,
                47.65951237
              ],
              [
                -122.31786481,
                47.65939992999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3178619, 47.6595124",
            "_v": "-122.3178648, 47.6593999",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 43RD ST",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3187034099999,
                47.65951422999999
              ],
              [
                -122.31844464831721,
                47.65951365806263
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3187034, 47.6595142",
            "_v": "(-122.31844464831721, 47.65951365806263)",
            "description": "Sidewalk N of NE 43RD ST",
            "footway": "sidewalk",
            "incline": -0.026,
            "layer": 0,
            "length": 63.19,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31786189,
                47.65951237
              ],
              [
                -122.31844464831721,
                47.65951365806263
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3178619, 47.6595124",
            "_v": "(-122.31844464831721, 47.65951365806263)",
            "description": "Sidewalk N of NE 43RD ST",
            "footway": "sidewalk",
            "incline": -0.026,
            "layer": 0,
            "length": 63.19,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3178511699999,
                47.65992687
              ],
              [
                -122.31761982,
                47.65992415
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3178512, 47.6599269",
            "_v": "-122.3176198, 47.6599242",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at ROOSEVELT WAY NE",
            "footway": "crossing",
            "length": 17.37,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3178511699999,
                47.65992687
              ],
              [
                -122.31784149832754,
                47.66030125877703
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3178512, 47.6599269",
            "_v": "(-122.31784149832754, 47.66030125877703)",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0.042,
            "layer": 0,
            "length": 143.47,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3153550899999,
                47.65989812
              ],
              [
                -122.3149015399999,
                47.65988735999999
              ],
              [
                -122.31481727977685,
                47.65988733078482
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3153551, 47.6598981",
            "_v": "(-122.31481727977685, 47.65988733078482)",
            "description": "Sidewalk N of NE 43RD ST",
            "footway": "sidewalk",
            "incline": 0.041,
            "layer": 0,
            "length": 68.73,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.12
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3153550899999,
                47.65989812
              ],
              [
                -122.31534551621287,
                47.66026156736299
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3153551, 47.6598981",
            "_v": "(-122.31534551621287, 47.66026156736299)",
            "description": "Sidewalk E of 12TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.039,
            "layer": 0,
            "length": 145.04,
            "subclass": "footway",
            "surface": "concrete",
            "width": 0.86
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3153550899999,
                47.65989812
              ],
              [
                -122.31559459,
                47.65989969
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3153551, 47.6598981",
            "_v": "-122.3155946, 47.6598997",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at 12TH AVE NE",
            "footway": "crossing",
            "length": 17.98,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31560448,
                47.65828728
              ],
              [
                -122.31560152,
                47.65839969999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3156045, 47.6582873",
            "_v": "-122.3156015, 47.6583997",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 42ND ST",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31543808,
                47.65828529
              ],
              [
                -122.31543512,
                47.65839771
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3154381, 47.6582853",
            "_v": "-122.3154351, 47.6583977",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 42ND ST",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3167427599999,
                47.6597626
              ],
              [
                -122.31650736,
                47.65975976
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3167428, 47.6597626",
            "_v": "-122.3165074, 47.6597598",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at 11TH AVE NE",
            "footway": "crossing",
            "length": 17.68,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3176927899999,
                47.657428
              ],
              [
                -122.31770647,
                47.65692224
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176928, 47.657428",
            "_v": "-122.3177065, 47.6569222",
            "description": "Sidewalk E of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": -0.046,
            "layer": 0,
            "length": 56.22,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.68
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3179157299999,
                47.65743075
              ],
              [
                -122.31791187,
                47.65758705999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3179157, 47.6574308",
            "_v": "-122.3179119, 47.6575871",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at NE 42ND ST",
            "footway": "crossing",
            "length": 17.38,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3179157299999,
                47.65743075
              ],
              [
                -122.3179277699999,
                47.65692464
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3179157, 47.6574308",
            "_v": "-122.3179278, 47.6569246",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0.047,
            "layer": 0,
            "length": 56.26,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.42
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3187127399999,
                47.65758842999999
              ],
              [
                -122.31871035226993,
                47.658081577821605
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3187127, 47.6575884",
            "_v": "(-122.31871035226993, 47.658081577821605)",
            "description": "Sidewalk E of 9TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.053,
            "layer": 0,
            "length": 201.54,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.73
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3187039599999,
                47.65940179999999
              ],
              [
                -122.31870557140952,
                47.65906898885298
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.318704, 47.6594018",
            "_v": "(-122.31870557140952, 47.65906898885298)",
            "description": "Sidewalk E of 9TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.053,
            "layer": 0,
            "length": 201.54,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.73
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3176886499999,
                47.65758444
              ],
              [
                -122.31791187,
                47.65758705999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176886, 47.6575844",
            "_v": "-122.3179119, 47.6575871",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at ROOSEVELT WAY NE",
            "footway": "crossing",
            "length": 16.76,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3156564199999,
                47.65677423999999
              ],
              [
                -122.31547774,
                47.65677619
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3156564, 47.6567742",
            "_v": "-122.3154777, 47.6567762",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at 12TH AVE NE",
            "footway": "crossing",
            "length": 13.42,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3156564199999,
                47.65677423999999
              ],
              [
                -122.31563963,
                47.65694958
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3156564, 47.6567742",
            "_v": "-122.3156396, 47.6569496",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 41ST ST",
            "footway": "crossing",
            "length": 19.53,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3156564199999,
                47.65677423999999
              ],
              [
                -122.31566579674498,
                47.65641791575025
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3156564, 47.6567742",
            "_v": "(-122.31566579674498, 47.65641791575025)",
            "description": "Sidewalk W of 12TH AVE NE",
            "footway": "sidewalk",
            "incline": 0.021,
            "layer": 0,
            "length": 49.89,
            "subclass": "footway",
            "surface": "concrete",
            "width": 3
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3176277799999,
                47.65977338999999
              ],
              [
                -122.3176363,
                47.65950904999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176278, 47.6597734",
            "_v": "-122.3176363, 47.659509",
            "description": "Sidewalk E of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": -0.043,
            "layer": 0,
            "length": 29.39,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31423739,
                47.65840801
              ],
              [
                -122.31420968225709,
                47.65946243956929
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3142374, 47.658408",
            "_v": "(-122.31420968225709, 47.65946243956929)",
            "description": "Sidewalk E of BROOKLYN AVE NE",
            "footway": "sidewalk",
            "incline": -0.056,
            "layer": 0,
            "length": 147.34,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.27
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31423739,
                47.65840801
              ],
              [
                -122.3142436699999,
                47.65824625999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3142374, 47.658408",
            "_v": "-122.3142437, 47.6582463",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 42ND ST",
            "footway": "crossing",
            "length": 17.98,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31539963,
                47.65974825
              ],
              [
                -122.3149073799999,
                47.65973657
              ],
              [
                -122.31490365,
                47.65973653
              ],
              [
                -122.31463560705859,
                47.65973643709687
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3153996, 47.6597482",
            "_v": "(-122.31463560705859, 47.65973643709687)",
            "description": "Sidewalk S of NE 43RD ST",
            "footway": "sidewalk",
            "incline": -0.041,
            "layer": 0,
            "length": 71.93,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31539963,
                47.65974825
              ],
              [
                -122.31543512,
                47.65839771
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3153996, 47.6597482",
            "_v": "-122.3154351, 47.6583977",
            "description": "Sidewalk E of 12TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.054,
            "layer": 0,
            "length": 150.13,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31786481,
                47.65939992999999
              ],
              [
                -122.3178902399999,
                47.65842685999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3178648, 47.6593999",
            "_v": "-122.3178902, 47.6584269",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0.052,
            "layer": 0,
            "length": 108.17,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.44
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31678888,
                47.65749207
              ],
              [
                -122.3165768399999,
                47.65748830999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3167889, 47.6574921",
            "_v": "-122.3165768, 47.6574883",
            "crossing": "unmarked",
            "curbramps": 0,
            "description": "Crossing at 11TH AVE NE",
            "footway": "crossing",
            "length": 15.93,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3187127399999,
                47.65758842999999
              ],
              [
                -122.3187134399999,
                47.65743211
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3187127, 47.6575884",
            "_v": "-122.3187134, 47.6574321",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 42ND ST",
            "footway": "crossing",
            "length": 17.37,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3142436699999,
                47.65824625999999
              ],
              [
                -122.3142684692832,
                47.657302654399
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3142437, 47.6582463",
            "_v": "(-122.3142684692832, 47.657302654399)",
            "description": "Sidewalk E of BROOKLYN AVE NE",
            "footway": "sidewalk",
            "incline": -0.052,
            "layer": 0,
            "length": 147.19,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.27
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31708921,
                47.65685000999999
              ],
              [
                -122.3167695799999,
                47.65712196999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3170892, 47.65685",
            "_v": "-122.3167696, 47.657122",
            "description": "Sidewalk SE of EASTLAKE AVE NE",
            "footway": "sidewalk",
            "incline": -0.019,
            "layer": 0,
            "length": 38.6,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31563963,
                47.65694958
              ],
              [
                -122.31574753485853,
                47.65695088099795
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3156396, 47.6569496",
            "_v": "(-122.31574753485853, 47.65695088099795)",
            "description": "Sidewalk N of NE 41ST ST",
            "footway": "sidewalk",
            "incline": -0.016,
            "layer": 0,
            "length": 72.76,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.29
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3166083699999,
                47.65696126
              ],
              [
                -122.31574753485853,
                47.65695088099795
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3166084, 47.6569613",
            "_v": "(-122.31574753485853, 47.65695088099795)",
            "description": "Sidewalk N of NE 41ST ST",
            "footway": "sidewalk",
            "incline": -0.016,
            "layer": 0,
            "length": 72.76,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.29
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31649935,
                47.65991051999999
              ],
              [
                -122.31647019554998,
                47.6610241857887
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3164994, 47.6599105",
            "_v": "(-122.31647019554998, 47.6610241857887)",
            "description": "Sidewalk E of 11TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.036,
            "layer": 0,
            "length": 144.79,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.84
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31649935,
                47.65991051999999
              ],
              [
                -122.31672258,
                47.65991322
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3164994, 47.6599105",
            "_v": "-122.3167226, 47.6599132",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at 11TH AVE NE",
            "footway": "crossing",
            "length": 16.76,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3155660799999,
                47.65974848999999
              ],
              [
                -122.31559459,
                47.65989969
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3155661, 47.6597485",
            "_v": "-122.3155946, 47.6598997",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 43RD ST",
            "footway": "crossing",
            "length": 16.94,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3155660799999,
                47.65974848999999
              ],
              [
                -122.31650736,
                47.65975976
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3155661, 47.6597485",
            "_v": "-122.3165074, 47.6597598",
            "description": "Sidewalk S of NE 43RD ST",
            "footway": "sidewalk",
            "incline": -0.014,
            "layer": 0,
            "length": 70.69,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31447749,
                47.6583862
              ],
              [
                -122.31444548924597,
                47.659604312716716
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3144775, 47.6583862",
            "_v": "(-122.31444548924597, 47.659604312716716)",
            "description": "Sidewalk W of BROOKLYN AVE NE",
            "footway": "sidewalk",
            "incline": 0.057,
            "layer": 0,
            "length": 150.08,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.27
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3179923499999,
                47.65623076
              ],
              [
                -122.31794175060983,
                47.65624363483842
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3179923, 47.6562308",
            "_v": "(-122.31794175060983, 47.65624363483842)",
            "crossing": "unmarked",
            "curbramps": 0,
            "description": "Crossing at ROOSEVELT WAY NE",
            "footway": "crossing",
            "length": 21.97,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3179406299999,
                47.65635285999999
              ],
              [
                -122.31796480143942,
                47.65629579633477
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3179406, 47.6563529",
            "_v": "(-122.31796480143942, 47.65629579633477)",
            "crossing": "unmarked",
            "curbramps": 0,
            "description": "Crossing at NE 40TH ALLEY ST",
            "footway": "crossing",
            "length": 14.12,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3179923499999,
                47.65623076
              ],
              [
                -122.31797747866845,
                47.65626586807365
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3179923, 47.6562308",
            "_v": "(-122.31797747866845, 47.65626586807365)",
            "crossing": "unmarked",
            "curbramps": 0,
            "description": "Crossing at NE 40TH ALLEY ST",
            "footway": "crossing",
            "length": 14.12,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3179923499999,
                47.65623076
              ],
              [
                -122.31799330109465,
                47.65619423842314
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3179923, 47.6562308",
            "_v": "(-122.31799330109465, 47.65619423842314)",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0.084,
            "layer": 0,
            "length": 17.63,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.27
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31539963,
                47.65974825
              ],
              [
                -122.31541061516425,
                47.65933021946411
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3153996, 47.6597482",
            "_v": "(-122.31541061516425, 47.65933021946411)",
            "description": "Sidewalk E of 12TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.054,
            "layer": 0,
            "length": 150.13,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31543512,
                47.65839771
              ],
              [
                -122.31541061516425,
                47.65933021946411
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3154351, 47.6583977",
            "_v": "(-122.31541061516425, 47.65933021946411)",
            "description": "Sidewalk E of 12TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.054,
            "layer": 0,
            "length": 150.13,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31563963,
                47.65694958
              ],
              [
                -122.3154731599999,
                47.65695030999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3156396, 47.6569496",
            "_v": "-122.3154732, 47.6569503",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at 12TH AVE NE",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31770647,
                47.65692224
              ],
              [
                -122.3177047899999,
                47.65683169999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3177065, 47.6569222",
            "_v": "-122.3177048, 47.6568317",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 41ST ST",
            "footway": "crossing",
            "length": 10.06,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3165989599999,
                47.65711727
              ],
              [
                -122.3167695799999,
                47.65712196999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.316599, 47.6571173",
            "_v": "-122.3167696, 47.657122",
            "crossing": "unmarked",
            "curbramps": 0,
            "description": "Crossing at 11TH AVE NE",
            "footway": "crossing",
            "length": 12.82,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3187034099999,
                47.65951422999999
              ],
              [
                -122.31870232495402,
                47.65973456914871
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3187034, 47.6595142",
            "_v": "(-122.31870232495402, 47.65973456914871)",
            "description": "Sidewalk E of 9TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.046,
            "layer": 0,
            "length": 189.81,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.52
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31659,
                47.65678549999999
              ],
              [
                -122.31679988,
                47.65682088999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.31659, 47.6567855",
            "_v": "-122.3167999, 47.6568209",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at 11TH AVE NE",
            "footway": "crossing",
            "length": 16.24,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31559459,
                47.65989969
              ],
              [
                -122.31558135782889,
                47.66040204760723
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3155946, 47.6598997",
            "_v": "(-122.31558135782889, 47.66040204760723)",
            "description": "Sidewalk W of 12TH AVE NE",
            "footway": "sidewalk",
            "incline": 0.039,
            "layer": 0,
            "length": 145.34,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.07
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31309351,
                47.65823804
              ],
              [
                -122.31284689170789,
                47.65823515443339
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3130935, 47.658238",
            "_v": "(-122.31284689170789, 47.65823515443339)",
            "description": "Sidewalk S of NE 42ND ST",
            "footway": "sidewalk",
            "incline": -0.036,
            "layer": 0,
            "length": 67.33,
            "subclass": "footway",
            "surface": "concrete",
            "width": 3
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31309351,
                47.65823804
              ],
              [
                -122.3130814299999,
                47.65838876
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3130935, 47.658238",
            "_v": "-122.3130814, 47.6583888",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at NE 42ND ST",
            "footway": "crossing",
            "length": 16.78,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31309351,
                47.65823804
              ],
              [
                -122.31309787677878,
                47.65807142419343
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3130935, 47.658238",
            "_v": "(-122.31309787677878, 47.65807142419343)",
            "description": "Sidewalk E of UNIVERSITY WAY NE",
            "footway": "sidewalk",
            "incline": -0.049,
            "layer": 0,
            "length": 146.92,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3130814299999,
                47.65838876
              ],
              [
                -122.31267687330217,
                47.658384020964235
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3130814, 47.6583888",
            "_v": "(-122.31267687330217, 47.658384020964235)",
            "description": "Sidewalk N of NE 42ND ST",
            "footway": "sidewalk",
            "incline": 0.036,
            "layer": 0,
            "length": 70.07,
            "subclass": "footway",
            "surface": "concrete",
            "width": 3
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3130814299999,
                47.65838876
              ],
              [
                -122.31307424848109,
                47.65866206224979
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3130814, 47.6583888",
            "_v": "(-122.31307424848109, 47.65866206224979)",
            "description": "Sidewalk E of UNIVERSITY WAY NE",
            "footway": "sidewalk",
            "incline": -0.044,
            "layer": 0,
            "length": 148.7,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3173445799999,
                47.65682738999999
              ],
              [
                -122.3171987399999,
                47.65675269999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3173446, 47.6568274",
            "_v": "-122.3171987, 47.6567527",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at EASTLAKE AVE NE",
            "footway": "crossing",
            "length": 13.74,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3133288599999,
                47.65839717
              ],
              [
                -122.31331728049858,
                47.65883780609692
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3133289, 47.6583972",
            "_v": "(-122.31331728049858, 47.65883780609692)",
            "description": "Sidewalk W of UNIVERSITY WAY NE",
            "footway": "sidewalk",
            "incline": 0.045,
            "layer": 0,
            "length": 147.33,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.93
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3133288599999,
                47.65839717
              ],
              [
                -122.3133249899999,
                47.65823529
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3133289, 47.6583972",
            "_v": "-122.313325, 47.6582353",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at NE 42ND ST",
            "footway": "crossing",
            "length": 17.99,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3155660799999,
                47.65974848999999
              ],
              [
                -122.31557153279688,
                47.65974855528665
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3155661, 47.6597485",
            "_v": "(-122.31557153279688, 47.65974855528665)",
            "description": "Sidewalk S of NE 43RD ST",
            "footway": "sidewalk",
            "incline": -0.014,
            "layer": 0,
            "length": 70.69,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31650736,
                47.65975976
              ],
              [
                -122.31557153279688,
                47.65974855528665
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3165074, 47.6597598",
            "_v": "(-122.31557153279688, 47.65974855528665)",
            "description": "Sidewalk S of NE 43RD ST",
            "footway": "sidewalk",
            "incline": -0.014,
            "layer": 0,
            "length": 70.69,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3154731599999,
                47.65695030999999
              ],
              [
                -122.31485475914153,
                47.656942823291054
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3154732, 47.6569503",
            "_v": "(-122.31485475914153, 47.656942823291054)",
            "description": "Sidewalk N of NE 41ST ST",
            "footway": "sidewalk",
            "incline": 0.044,
            "layer": 0,
            "length": 71.46,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31761982,
                47.65992415
              ],
              [
                -122.31672258,
                47.65991322
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176198, 47.6599242",
            "_v": "-122.3167226, 47.6599132",
            "description": "Sidewalk N of NE 43RD ST",
            "footway": "sidewalk",
            "incline": -0.011,
            "layer": 0,
            "length": 67.38,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.42
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31761982,
                47.65992415
              ],
              [
                -122.3176061616356,
                47.660452731708105
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176198, 47.6599242",
            "_v": "(-122.3176061616356, 47.660452731708105)",
            "description": "Sidewalk E of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": -0.041,
            "layer": 0,
            "length": 143.7,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.22
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31547774,
                47.65677619
              ],
              [
                -122.31511700066545,
                47.65677182268653
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3154777, 47.6567762",
            "_v": "(-122.31511700066545, 47.65677182268653)",
            "description": "Sidewalk S of NE 41ST ST",
            "footway": "sidewalk",
            "incline": -0.043,
            "layer": 0,
            "length": 71.46,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.13
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31547774,
                47.65677619
              ],
              [
                -122.315484157632,
                47.65653247326921
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3154777, 47.6567762",
            "_v": "(-122.315484157632, 47.65653247326921)",
            "description": "Sidewalk E of 12TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.021,
            "layer": 0,
            "length": 53.02,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.44
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3179298499999,
                47.65683400999999
              ],
              [
                -122.31792858,
                47.65689061999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3179298, 47.656834",
            "_v": "-122.3179286, 47.6568906",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0,
            "layer": 0,
            "length": 6.29,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.13
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3179406299999,
                47.65635285999999
              ],
              [
                -122.3179358970204,
                47.65656410982236
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3179406, 47.6563529",
            "_v": "(-122.3179358970204, 47.65656410982236)",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0.048,
            "layer": 0,
            "length": 53.48,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.13
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3179298499999,
                47.65683400999999
              ],
              [
                -122.3179358970204,
                47.65656410982236
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3179298, 47.656834",
            "_v": "(-122.3179358970204, 47.65656410982236)",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0.048,
            "layer": 0,
            "length": 53.48,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.13
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31672258,
                47.65991322
              ],
              [
                -122.31669312983625,
                47.6610382909188
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3167226, 47.6599132",
            "_v": "(-122.31669312983625, 47.6610382909188)",
            "description": "Sidewalk W of 11TH AVE NE",
            "footway": "sidewalk",
            "incline": 0.036,
            "layer": 0,
            "length": 144.04,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31761982,
                47.65992415
              ],
              [
                -122.31755523022929,
                47.659923363180205
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3176198, 47.6599242",
            "_v": "(-122.31755523022929, 47.659923363180205)",
            "description": "Sidewalk N of NE 43RD ST",
            "footway": "sidewalk",
            "incline": -0.011,
            "layer": 0,
            "length": 67.38,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.42
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31672258,
                47.65991322
              ],
              [
                -122.31755523022929,
                47.659923363180205
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3167226, 47.6599132",
            "_v": "(-122.31755523022929, 47.659923363180205)",
            "description": "Sidewalk N of NE 43RD ST",
            "footway": "sidewalk",
            "incline": -0.011,
            "layer": 0,
            "length": 67.38,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.42
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31676853,
                47.65830110999999
              ],
              [
                -122.3165453099999,
                47.65829845999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3167685, 47.6583011",
            "_v": "-122.3165453, 47.6582985",
            "crossing": "marked",
            "curbramps": 1,
            "description": "Crossing at 11TH AVE NE",
            "footway": "crossing",
            "length": 16.76,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31676853,
                47.65830110999999
              ],
              [
                -122.31766994,
                47.65831176999999
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3167685, 47.6583011",
            "_v": "-122.3176699, 47.6583118",
            "description": "Sidewalk S of NE 42ND ST",
            "footway": "sidewalk",
            "incline": 0.015,
            "layer": 0,
            "length": 67.7,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.22
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3179406299999,
                47.65635285999999
              ],
              [
                -122.31802677060915,
                47.65634856341987
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3179406, 47.6563529",
            "_v": "(-122.31802677060915, 47.65634856341987)",
            "description": "Sidewalk N of NE 40TH ALLEY ST",
            "footway": "sidewalk",
            "incline": 0.015,
            "layer": 0,
            "length": 60.51,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3133249899999,
                47.65823529
              ],
              [
                -122.31333345249837,
                47.657912329842
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.313325, 47.6582353",
            "_v": "(-122.31333345249837, 47.657912329842)",
            "description": "Sidewalk W of UNIVERSITY WAY NE",
            "footway": "sidewalk",
            "incline": 0.049,
            "layer": 0,
            "length": 147.21,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.49
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31886984,
                47.6595146
              ],
              [
                -122.31886930902121,
                47.65962246950932
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3188698, 47.6595146",
            "_v": "(-122.31886930902121, 47.65962246950932)",
            "description": "Sidewalk W of 9TH AVE NE",
            "footway": "sidewalk",
            "incline": 0.046,
            "layer": 0,
            "length": 189.89,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.52
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31886984,
                47.6595146
              ],
              [
                -122.31887039,
                47.65940217
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3188698, 47.6595146",
            "_v": "-122.3188704, 47.6594022",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 43RD ST",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31886984,
                47.6595146
              ],
              [
                -122.31902950969396,
                47.659514954658775
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3188698, 47.6595146",
            "_v": "(-122.31902950969396, 47.659514954658775)",
            "description": "Sidewalk N of NE 43RD ST",
            "footway": "sidewalk",
            "incline": 0.02,
            "layer": 0,
            "length": 62.2,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31786481,
                47.65939992999999
              ],
              [
                -122.31786869385138,
                47.65925131579329
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3178648, 47.6593999",
            "_v": "(-122.31786869385138, 47.65925131579329)",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0.052,
            "layer": 0,
            "length": 108.17,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.44
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3178902399999,
                47.65842685999999
              ],
              [
                -122.31786869385138,
                47.65925131579329
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3178902, 47.6584269",
            "_v": "(-122.31786869385138, 47.65925131579329)",
            "description": "Sidewalk W of ROOSEVELT WAY NE",
            "footway": "sidewalk",
            "incline": 0.052,
            "layer": 0,
            "length": 108.17,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.44
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31887039,
                47.65940217
              ],
              [
                -122.31887145516147,
                47.659181834433454
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3188704, 47.6594022",
            "_v": "(-122.31887145516147, 47.659181834433454)",
            "description": "Sidewalk W of 9TH AVE NE",
            "footway": "sidewalk",
            "incline": 0.053,
            "layer": 0,
            "length": 201.86,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.52
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31887917,
                47.65758597
              ],
              [
                -122.31887732974886,
                47.65796663789588
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3188792, 47.657586",
            "_v": "(-122.31887732974886, 47.65796663789588)",
            "description": "Sidewalk W of 9TH AVE NE",
            "footway": "sidewalk",
            "incline": 0.053,
            "layer": 0,
            "length": 201.86,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.52
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31887917,
                47.65758597
              ],
              [
                -122.31944257362795,
                47.65758687467816
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3188792, 47.657586",
            "_v": "(-122.31944257362795, 47.65758687467816)",
            "description": "Sidewalk N of NE 42ND ST",
            "footway": "sidewalk",
            "incline": 0.02,
            "layer": 0,
            "length": 62.2,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.49
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31887985,
                47.65743513
              ],
              [
                -122.3187134399999,
                47.65743211
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3188799, 47.6574351",
            "_v": "-122.3187134, 47.6574321",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at 9TH AVE NE",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31887985,
                47.65743513
              ],
              [
                -122.31888081958733,
                47.6572052576333
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3188799, 47.6574351",
            "_v": "(-122.31888081958733, 47.6572052576333)",
            "description": "Sidewalk W of 9TH AVE NE",
            "footway": "sidewalk",
            "incline": 0.053,
            "layer": 0,
            "length": 133.86,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.52
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31887985,
                47.65743513
              ],
              [
                -122.31922009262651,
                47.65743568050123
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3188799, 47.6574351",
            "_v": "(-122.31922009262651, 47.65743568050123)",
            "description": "Sidewalk S of NE 42ND ST",
            "footway": "sidewalk",
            "incline": -0.022,
            "layer": 0,
            "length": 62.19,
            "subclass": "footway",
            "surface": "concrete",
            "width": 2.59
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3167695799999,
                47.65712196999999
              ],
              [
                -122.3167757599999,
                47.65693307
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3167696, 47.657122",
            "_v": "-122.3167758, 47.6569331",
            "description": "Sidewalk W of 11TH AVE NE",
            "footway": "sidewalk",
            "incline": 0.039,
            "layer": 0,
            "length": 21,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31886984,
                47.6595146
              ],
              [
                -122.31886985124181,
                47.659512301969585
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3188698, 47.6595146",
            "_v": "(-122.31886985124181, 47.659512301969585)",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 43RD ST",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31887039,
                47.65940217
              ],
              [
                -122.31886985124181,
                47.659512301969585
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3188704, 47.6594022",
            "_v": "(-122.31886985124181, 47.659512301969585)",
            "crossing": "unmarked",
            "curbramps": 1,
            "description": "Crossing at NE 43RD ST",
            "footway": "crossing",
            "length": 12.5,
            "subclass": "footway"
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.31887039,
                47.65940217
              ],
              [
                -122.31919652690006,
                47.65940289049656
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3188704, 47.6594022",
            "_v": "(-122.31919652690006, 47.65940289049656)",
            "description": "Sidewalk S of NE 43RD ST",
            "footway": "sidewalk",
            "incline": -0.02,
            "layer": 0,
            "length": 62.2,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              [
                -122.3187134399999,
                47.65743211
              ],
              [
                -122.31871487031266,
                47.65709310048305
              ]
            ],
            "type": "LineString"
          },
          "properties": {
            "_layer": "transportation",
            "_u": "-122.3187134, 47.6574321",
            "_v": "(-122.31871487031266, 47.65709310048305)",
            "description": "Sidewalk E of 9TH AVE NE",
            "footway": "sidewalk",
            "incline": -0.051,
            "layer": 0,
            "length": 133.56,
            "subclass": "footway",
            "surface": "concrete",
            "width": 1.83
          },
          "type": "Feature"
        }
      ],
      "type": "FeatureCollection"
    },
    "node_costs": {
      "features": [
        {
          "geometry": {
            "coordinates": [
              -122.316778,
              47.6584137
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 8.180991375885657
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3165426,
              47.6584109
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 9.499008624114342
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3165453,
              47.6582985
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 21.999008624114342
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3167685,
              47.6583011
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 20.710991375885655
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3176669,
              47.6584242
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 74.94099137588566
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3156015,
              47.6583997
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 80.17900862411435
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3176699,
              47.6583118
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 87.44099137588566
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3156045,
              47.6582873
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 92.65900862411434
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3154351,
              47.6583977
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 92.67900862411435
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3178902,
              47.6584268
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 91.71099137588565
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3154381,
              47.6582853
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 105.15900862411434
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3178932,
              47.6583144
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 104.20099137588566
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3178917,
              47.6583706
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 110.45099137588566
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3167889,
              47.6574921
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 110.64099137588566
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3165768,
              47.6574883
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 112.06900862411433
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3165773,
              47.6574764
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 113.38900862411433
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3178902,
              47.6584269
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 116.70099137588566
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3169709,
              47.6572051
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 145.44099137588566
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.316599,
              47.6571173
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 153.3390086241143
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3165074,
              47.6597598
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 159.43900862411434
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3167428,
              47.6597626
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 158.13099137588566
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3167696,
              47.657122
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 163.16099137588566
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3144775,
              47.6583862
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 164.59900862411436
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3176886,
              47.6575844
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 168.29099137588568
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3166084,
              47.6569613
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 170.6890086241143
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3164994,
              47.6599105
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 176.20900862411435
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3167226,
              47.6599132
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 174.94099137588566
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3144865,
              47.6582739
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 176.61900862411434
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3176905,
              47.6575129
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 176.2509913758857
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3142374,
              47.658408
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 182.78900862411436
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3172259,
              47.6569233
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 182.15099137588567
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3167758,
              47.6569331
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 183.6390086241143
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3176397,
              47.6593971
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 183.0909913758857
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3179119,
              47.6575871
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 185.05099137588567
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3176928,
              47.657428
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 185.6809913758857
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3168491,
              47.6569339
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 189.1490086241143
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31659,
              47.6567855
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 190.26900862411432
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3176381,
              47.6594545
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 189.48099137588568
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3142437,
              47.6582463
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 195.10900862411435
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3167999,
              47.6568209
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 196.2390086241143
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3170892,
              47.65685
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 195.26099137588565
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3176363,
              47.659509
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 195.54099137588568
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3173446,
              47.6568274
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 196.05099137588567
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.317097,
              47.6568434
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 196.20099137588565
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3168519,
              47.6568215
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 200.1490086241143
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3178648,
              47.6593999
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 200.0009913758857
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3179157,
              47.6574308
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 202.4209913758857
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3171987,
              47.6567527
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 208.85099137588566
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3178619,
              47.6595124
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 212.48099137588568
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3177065,
              47.6569222
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 218.24099137588567
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3177048,
              47.6568317
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 223.10099137588568
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3176278,
              47.6597734
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 224.59099137588564
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3155661,
              47.6597485
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 230.10900862411435
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3179278,
              47.6569246
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 234.86099137588567
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3166049,
              47.6563658
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 236.92900862411432
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3179286,
              47.6568906
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 238.64099137588568
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3179298,
              47.656834
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 240.0009913758857
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3156396,
              47.6569496
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 241.35900862411432
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3153996,
              47.6597482
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 242.60900862411435
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3176198,
              47.6599242
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 241.36099137588565
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3178551,
              47.6597761
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 241.66099137588563
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3155946,
              47.6598997
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 244.15900862411436
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3168159,
              47.6563692
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 246.4590086241143
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3187127,
              47.6575884
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 245.19099137588566
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3133289,
              47.6583972
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 251.01900862411438
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3178531,
              47.6598515
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 250.05099137588562
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3154732,
              47.6569503
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 253.55900862411434
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3188792,
              47.657586
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 257.69099137588563
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3153551,
              47.6598981
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 259.5990086241144
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3178512,
              47.6599269
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 258.4309913758856
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3156564,
              47.6567742
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 260.38900862411435
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3187134,
              47.6574321
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 262.3209913758857
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.313325,
              47.6582353
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 264.0990086241144
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.318704,
              47.6594018
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 263.0109913758857
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3130814,
              47.6583888
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 269.61900862411443
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3154777,
              47.6567762
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 272.9090086241144
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3188799,
              47.6574351
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 274.4509913758856
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3187034,
              47.6595142
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 275.5109913758857
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3188704,
              47.6594022
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 275.5109913758857
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3177173,
              47.6563502
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 276.62099137588564
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3130935,
              47.658238
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 281.4790086241144
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3177185,
              47.6563004
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 282.1509913758856
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3188698,
              47.6595146
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 288.0109913758857
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3179406,
              47.6563529
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 293.40099137588567
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3177302,
              47.6560814
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 294.06099137588564
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3179923,
              47.6562308
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 295.93999999999994
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31451569383785,
              47.65716394482954
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31844464831721,
              47.65951365806263
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31784149832754,
              47.66030125877703
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31481727977685,
              47.65988733078482
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31534551621287,
              47.66026156736299
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31871035226993,
              47.658081577821605
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 446.73099137588565
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31870557140952,
              47.65906898885298
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31566579674498,
              47.65641791575025
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31420968225709,
              47.65946243956929
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31463560705859,
              47.65973643709687
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3142684692832,
              47.657302654399
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31574753485853,
              47.65695088099795
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31647019554998,
              47.6610241857887
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31444548924597,
              47.659604312716716
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31794175060983,
              47.65624363483842
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31796480143942,
              47.65629579633477
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 307.52099137588567
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31797747866845,
              47.65626586807365
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31799330109465,
              47.65619423842314
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31541061516425,
              47.65933021946411
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31870232495402,
              47.65973456914871
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31558135782889,
              47.66040204760723
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31284689170789,
              47.65823515443339
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31309787677878,
              47.65807142419343
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31267687330217,
              47.658384020964235
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31307424848109,
              47.65866206224979
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31331728049858,
              47.65883780609692
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31557153279688,
              47.65974855528665
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31485475914153,
              47.656942823291054
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3176061616356,
              47.660452731708105
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31511700066545,
              47.65677182268653
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.315484157632,
              47.65653247326921
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.3179358970204,
              47.65656410982236
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31669312983625,
              47.6610382909188
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31755523022929,
              47.659923363180205
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31802677060915,
              47.65634856341987
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31333345249837,
              47.657912329842
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31886930902121,
              47.65962246950932
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31902950969396,
              47.659514954658775
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31786869385138,
              47.65925131579329
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31887145516147,
              47.659181834433454
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 477.3709913758857
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31887732974886,
              47.65796663789588
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31944257362795,
              47.65758687467816
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31888081958733,
              47.6572052576333
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31922009262651,
              47.65743568050123
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31886985124181,
              47.659512301969585
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31919652690006,
              47.65940289049656
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        },
        {
          "geometry": {
            "coordinates": [
              -122.31871487031266,
              47.65709310048305
            ],
            "type": "Point"
          },
          "properties": {
            "cost": 300
          },
          "type": "Feature"
        }
      ],
      "type": "FeatureCollection"
    }
  }

  const breaks = [0, 50, 100, 150, 200, 250, 299];
  const colors = ["#08306b", "#08519c", "#2171b5", "#4292c6", "#6baed6", "#9ecae1", "#c6dbef"];
  const interpolateDist = 0.005;
  class MyRBush extends rbush {
    toBBox(trig) { 
      let bbox = turf.bbox(trig);
      return {
        minX: bbox[0],
        minY: bbox[1],
        maxX: bbox[2],
        maxY: bbox[3]
      };
    }
    compareMinX(a, b) {
      let aMinX = turf.bbox(a)[0];
      let bMinX = turf.bbox(b)[0];
      return aMinX - bMinX; 
    }
    compareMinY(a, b) {
      let aMinY = turf.bbox(a)[1];
      let bMinY = turf.bbox(b)[1];
      return aMinY - bMinY; 
    }
  }

  // let pointGrid = triangleInterpolate(dataPoints);
  // let contours = turf.isobands(pointGrid, breaks, {zProperty: "cost"});

  map.on("load", function() {

    // addRoutes(dataPoints.edges);

    // addPointsLayer("points", dataPoints.node_costs, 7, true);

    let interpolatedPoints = triangleInterpolate(dataPoints.node_costs, preInterlopate(dataPoints));
    
    // addPointsLayer("interpolatedPoints", interpolatedPoints, 5, true);

    // addTriangles("triangles", turf.tin(interpolatedPoints, "cost"), true);

    let pointGrid = turf.pointGrid(turf.bbox(dataPoints.node_costs), interpolateDist);
    pointGrid = triangleInterpolate(interpolatedPoints, pointGrid);

    // addPointsLayer("pointGrid", pointGrid, 2, true);

    let contours = turf.isobands(pointGrid, breaks, {zProperty: "cost"});
    addContourLayers("contours", contours, colors);
    
  });

  /***********************************************/
  /**************** MAP FUNCTIONS ****************/
  /***********************************************/

  /**
   * Adds a Mapbox Marker at given longitude and latitude.
   * @param {double} lng - longitude of the position
   * @param {double} lat - latitude of the position
   * @return - A Mapbox Marker at the given position
   */
  function addMarker(lng, lat) {
    return new mapboxgl.Marker()
              .setLngLat([lng, lat])
              .setDraggable(false)
              .addTo(map);
  }

  function addRoutes(data) {
    if (map.getLayer("routes")) {
        map.removeLayer("routes");
        map.removeSource("routes");
      }
    map.addLayer({
      "id": "routes",
      "type": "line",
      "source": {
        "type": "geojson",
        "data": data
      },
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#888",
        "line-width": 2
      }
    });
    return data;
  }

  /**
   * Draws contours starting from a origin based on given data points.
   * @param {GeoJSON} dataPoints - A feature collection of points with 
   *                               a property cost represents the cost 
   *                               of getting to the point from origin
   */
  function drawContours(dataPoints) {
    // dataPoints.features = dataPoints.features.filter(f => f.properties.cost <= maxCost);

    // add the data points layer
    addPointsLayer("dataPoints", dataPoints, 5, false);

    // add the triangles layer
    addTriangles("triangles", turf.tin(dataPoints, "cost"), false);

    let pointGrid = triangleInterpolate(dataPoints, interpolateDist);
    console.log(pointGrid);
    addPointsLayer("gridPoints", pointGrid, 2, false);
    let contours = turf.isobands(pointGrid, breaks, {zProperty: "cost"});
    addContourLayers("contours", contours, colors);

    // let idwPointGrid = turf.interpolate(dataPoints, interpolateDist, {
    //   gridType: 'points', property: 'cost', units: 'kilometers', weight: interpolateWeight
    // });
    // addPointsLayer("gridPoints", idwPointGrid, 2, false);
    // let idwContours = turf.isobands(idwPointGrid, breaks, {zProperty: "cost"});
    // addContourLayers("idwContours", idwContours, idwColors);
  }

  /**
   * Add several layers of contours to the map with given id,
   * using the contour source and colors given.
   * @param {string} id - id of the contour, each layer of the contour
   *                      has id in the form "id + i", where i is an int
   * @param {string[]} colors - colors for each layer of the contour
   */
  function addContourLayers(id, source, colors) {
    for (let i = 0; i < source.features.length; i++) {
      let layerID = id + i;
      if (map.getLayer(layerID)) {
        map.removeLayer(layerID);
        map.removeSource(layerID);
      }
      map.addLayer({
        "id": layerID,
        "type": "fill",
        "source": {
          "type": "geojson",
          "data": source.features[i]
        },
        "paint": {
          "fill-color": colors[i],
          "fill-opacity": 0.5
        }
      });
    }
  }

  function addTriangles(id, source, visible) {
    if (map.getLayer(id)) {
      map.removeLayer(id);
      map.removeSource(id);
    }
    map.addLayer({
      "id": id,
      "type": "line",
      "source": {
        "type": "geojson",
        "data": source
      }
    });
    if (!visible) {
      map.setLayoutProperty(id, 'visibility', 'none');
    }
  }

  function addPointsLayer(id, source, pointRadius, visible) {
    if (map.getLayer(id)) {
      map.removeLayer(id);
      map.removeSource(id);
    }
    map.addLayer({
      "id": id,
      "type": "circle",
      "source": {
        "type": "geojson",
        "data": source
      },
      "paint": {
        "circle-radius": pointRadius,
        "circle-color": [
          "case",
          [">=", ["get", "cost"], 300],
          "red",
          [
            "interpolate",
            ["linear"],
            ["get", "cost"],
            0, "#08306b",
            50, "#08519c",
            100, "#2171b5",
            150, "#4292c6",
            200, "#6baed6",
            250, "#9ecae1",
            300, "#c6dbef"
          ]
        ]
      }
    });
    if (!visible) {
      map.setLayoutProperty(id, 'visibility', 'none');
    }
  }

  /***********************************************/
  /*********** INTERPOLATION FUNCTIONS ***********/
  /***********************************************/

  /**
   * Takes in a GeoJSON of a feature collection of points
   * and a feature collection of edges whose starting and
   * end points are the other collection of points.
   * Preinterpolate some points along the edges. Distance
   * between the interpolated points. in kilometers,  can
   * be specified as parameters, default to 0.02 kilometers.
   * @param {GeoJSON} dataPoints GeoJSON of points and edges
   * @param {double} dist distance between interpolated points
   * @return {GeoJSON} a feature collection of points of
   *                   both the orginal points and the new points
   */
  function preInterlopate(dataPoints, dist = 0.02) {
    let points = dataPoints.node_costs.features;
    let edges = dataPoints.edges.features;
    for (let i = 0; i < Object.keys(edges).length; i++) {
      let length = turf.length(edges[i].geometry);
      let coords = edges[i].geometry.coordinates;
      let n = Math.max(parseInt(length / dist), 2);
      let interpolatedPoints = turf.points(interpolateLineRange(coords, n)).features;
      points = points.concat(interpolatedPoints.slice(1, interpolatedPoints.length - 1));
    }
    return turf.featureCollection(points);
  }

  /**
   * Interpolate and produce a point grid based on given
   * data points by first triangulizing the given data points
   * and using IDW to interpolate cost of each grid point 
   * within each triangle.
   * @param {GeoJSON} data a feature collection of points
   *                       with a property cost
   * @param {GeoJSON} points a feature collection of points
   *                         with property cost to be interpolated
   * @return - A point grid in GeoJSON format
   */
  function triangleInterpolate(data, points) {
    let trigs = turf.tin(data, 'cost');
    let hull = turf.convex(data);
    // construct and load a custom RBush tree that
    // accepts GeoJSON triangles for fast look up
    const tree = new MyRBush();
    tree.load(trigs.features);

    // loop through each point in the point grid
    // interpolate the cost at that point using
    // IDW on the vertices of the triangle that
    // contains the point
    for (let i = 0; i < points.features.length; i++) {
      let point = points.features[i];
      if (!turf.booleanPointInPolygon(point, hull)) {
        point.properties.cost = 300;
      } else {
        let targetRegion = tree.search({
          minX: point.geometry.coordinates[0],
          minY: point.geometry.coordinates[1],
          maxX: point.geometry.coordinates[0],
          maxY: point.geometry.coordinates[1]
        });
        for (let j = 0; j < targetRegion.length; j++) {
          let trig = targetRegion[j];
          if (turf.booleanPointInPolygon(point, trig)) {
            point.properties.cost = trigIDW(point, trig);
            break;
          }
        }
      }
    }
    return points;
  }

  /**
   * Given a single point and the triangle that the point is in.
   * Use IDW to interpolate the cost of the point by the vertices
   * of the triangle.
   * @param {GeoJSON} point: the point to interpolate
   * @param {GeoJSON} trig: a triangle polygon
   * @return - the interpolated value of the point
   */
  function trigIDW(point, trig) {
    let zw = 0;
    let sw = 0;

    let dataPoints = trig.geometry.coordinates[0];
    let dataCosts = [trig.properties["a"], trig.properties["b"], trig.properties["c"]];

    for (let i = 0; i < 3; i++) {
      let d = turf.distance(point, turf.point(dataPoints[i]));
      if (d === 0) {
        return dataCosts[i];
      }
      let w = 1.0 / Math.pow(d, 2);
      sw += w;
      zw += w * dataCosts[i];
    }
    return zw / sw;
  }

  /***********************************************/
  /************** LINE INTERPOLATION *************/
  /***********************************************/

  /**
   * @param {Point} pt1
   * @param {Point} pt1
   * @return number The Euclidean distance between `pt1` and `pt2`.
   */
  function distance( pt1, pt2 ){
    var deltaX = pt1[0] - pt2[0];
    var deltaY = pt1[1] - pt2[1];
    return Math.sqrt( deltaX * deltaX + deltaY * deltaY );
  }

  /**
   * @param {Point} point The Point object to offset.
   * @param {number} dx The delta-x of the line segment from which `point` will
   *    be offset.
   * @param {number} dy The delta-y of the line segment from which `point` will
   *    be offset.
   * @param {number} distRatio The quotient of the distance to offset `point`
   *    by and the distance of the line segment from which it is being offset.
   */
  function offsetPoint( point, dx, dy, distRatio ){
    return [
      point[ 0 ] - dy * distRatio,
      point[ 1 ] + dx * distRatio
    ];
  }

  /**
   * @param {array of Point} ctrlPoints The vertices of the (multi-segment) line
   *      to be interpolate along.
   * @param {int} number The number of points to interpolate along the line; this
   *      includes the endpoints, and has an effective minimum value of 2 (if a
   *      smaller number is given, then the endpoints will still be returned).
   * @param {number} [offsetDist] An optional perpendicular distance to offset
   *      each point from the line-segment it would otherwise lie on.
   * @param {int} [minGap] An optional minimum gap to maintain between subsequent
   *      interpolated points; if the projected gap between subsequent points for
   *      a set of `number` points is lower than this value, `number` will be
   *      decreased to a suitable value.
   */
  function interpolateLineRange( ctrlPoints, number, offsetDist, minGap ){
    minGap = minGap || 0;
    offsetDist = offsetDist || 0;

    // Calculate path distance from each control point (vertex) to the beginning
    // of the line, and also the ratio of `offsetDist` to the length of every
    // line segment, for use in computing offsets.
    var totalDist = 0;
    var ctrlPtDists = [ 0 ];
    var ptOffsetRatios = [];
    for( var pt = 1; pt < ctrlPoints.length; pt++ ){
      var dist = distance( ctrlPoints[ pt ], ctrlPoints[ pt - 1 ] );
      totalDist += dist;
      ptOffsetRatios.push( offsetDist / dist );
      ctrlPtDists.push( totalDist );
    }

    if( totalDist / (number - 1) < minGap ){
      number = totalDist / minGap + 1;
    }

    // Variables used to control interpolation.
    var step = totalDist / (number - 1);
    var interpPoints = [ offsetPoint(
      ctrlPoints[ 0 ],
      ctrlPoints[ 1 ][ 0 ] - ctrlPoints[ 0 ][ 0 ],
      ctrlPoints[ 1 ][ 1 ] - ctrlPoints[ 0 ][ 1 ],
      ptOffsetRatios[ 0 ]
    )];
    var prevCtrlPtInd = 0;
    var currDist = 0;
    var currPoint = ctrlPoints[ 0 ];
    var nextDist = step;

    for( pt = 0; pt < number - 2; pt++ ){
      // Find the segment in which the next interpolated point lies.
      while( nextDist > ctrlPtDists[ prevCtrlPtInd + 1 ] ){
        prevCtrlPtInd++;
        currDist = ctrlPtDists[ prevCtrlPtInd ];
        currPoint = ctrlPoints[ prevCtrlPtInd ];
      }

      // Interpolate the coordinates of the next point along the current segment.
      var remainingDist = nextDist - currDist;
      var ctrlPtsDeltaX = ctrlPoints[ prevCtrlPtInd + 1 ][ 0 ] -
        ctrlPoints[ prevCtrlPtInd ][ 0 ];
      var ctrlPtsDeltaY = ctrlPoints[ prevCtrlPtInd + 1 ][ 1 ] -
        ctrlPoints[ prevCtrlPtInd ][ 1 ];
      var ctrlPtsDist = ctrlPtDists[ prevCtrlPtInd + 1 ] -
        ctrlPtDists[ prevCtrlPtInd ];
      var distRatio = remainingDist / ctrlPtsDist;

      currPoint = [
        currPoint[ 0 ] + ctrlPtsDeltaX * distRatio,
        currPoint[ 1 ] + ctrlPtsDeltaY * distRatio
      ];

      // Offset currPoint according to `offsetDist`.
      var offsetRatio = offsetDist / ctrlPtsDist;
      interpPoints.push( offsetPoint(
        currPoint, ctrlPtsDeltaX, ctrlPtsDeltaY, ptOffsetRatios[ prevCtrlPtInd ])
      );
      // console.log(currDist);

      currDist = nextDist;
      nextDist += step;
    }

    interpPoints.push( offsetPoint(
      ctrlPoints[ ctrlPoints.length - 1 ],
      ctrlPoints[ ctrlPoints.length - 1 ][ 0 ] -
        ctrlPoints[ ctrlPoints.length - 2 ][ 0 ],
      ctrlPoints[ ctrlPoints.length - 1 ][ 1 ] -
        ctrlPoints[ ctrlPoints.length - 2 ][ 1 ],
      ptOffsetRatios[ ptOffsetRatios.length - 1 ]
    ));
    return interpPoints;
  }
};