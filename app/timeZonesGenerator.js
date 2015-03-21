var timeZoneGenerator = (function(){
  
  "use strict"

  var dataLoaded  = false,
      timeZones;

  var jsonpLoader = document.createElement('script');

  jsonpLoader.src = "data/timezones.json";

  document.body.appendChild(jsonpLoader);  

  /**
   * [_generate description]
   * @param  {[type]} template [description]
   * @return {[type]}          [description]
   */
  function _generate(template){
    
    var output = template.startTag ? template.startTag : "";

    output += "\n";

    // {
    //  "value": "Pacific Standard Time (Mexico)",
    //  "abbr": "PDT",
    //  "offset": -7,
    //  "isdst": true,
    //  "text": "(UTC-08:00) Baja California"
    // }
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
    generate: function(template){

      if(!dataLoaded){
        throw "Datas not loaded";
      }

      return _generate(template);
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
})();