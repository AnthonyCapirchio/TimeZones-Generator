"use strict"

function timeZoneGenerator(){

  var dataLoaded  = false,
      timeZones,
      templates   = {
        json  : {
          startTag  : '[\n',
          endTag    : ']',
          separator : ',\n',
          entry     : '\t{\n\t\t"{TEXT}": "{OFFSET}"\n\t}'
        },
        php   : {
          startTag  : 'array(\n',
          endTag    : ')',
          separator : ',\n',
          entry     : '\t"{TEXT}" => "{OFFSET}"'
        }
      };

  var jsonpLoader = document.createElement('script');

  jsonpLoader.src = "data/timezones.json";

  document.body.appendChild(jsonpLoader);  

  // {
  //  "value": "Pacific Standard Time (Mexico)",
  //  "abbr": "PDT",
  //  "offset": -7,
  //  "isdst": true,
  //  "text": "(UTC-08:00) Baja California"
  // }
  function generate(template){
    
    var output = template.startTag ? template.startTag : "";

    output += "\n";

    for(var i = 0; i < timeZones.length; i++){
      output += "\t";
      output += template.entry.replace('{VALUE}'  , timeZones[i].value)
                              .replace('{ABBR}'   , timeZones[i].abbr)
                              .replace('{OFFSET}' , timeZones[i].offset)
                              .replace('{ISDST}'  , timeZones[i].isdst)
                              .replace('{TEXT}'   , timeZones[i].text);

      if(template.separator) output += template.separator;

      output += "\n"
    }

    return template.endTag ? output + template.endTag : output;
  }


  return {
    /**
     * [generate description]
     * @param  {[type]} template [description]
     * @param  {[type]} inline   [description]
     * @return {[type]}          [description]
     */
    generate: function(template, inline){


      if(!dataLoaded){
        throw "Datas not loaded";
      }

      if(inline){
        return generate(template);
      }
      else{
        if(templates[template]){
          return generate(templates[template]);
        }
        else{
          throw "Unknow template";
        }
      }
    },

    /**
     * [setTimeZones description]
     * @param {[type]} timeZonesObject [description]
     */
    setTimeZones: function(timeZonesObject){
      dataLoaded  = true;
      timeZones   = timeZonesObject;
    }
  }
}

var timeZoneGenerator = new timeZoneGenerator();