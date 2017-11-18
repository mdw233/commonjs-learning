exports.translate = function (load) {
    console.log("plugin.translate->load", load);    
    //return load.source;
    return "alert('alert replacement');";
};

exports.fetch = function (url, orig) {
    return new Promise(function (resolve, reject) {
    //   var link = document.createElement('link');
    //   link.rel = 'stylesheet';
    //   link.href = url;
    //   link.onload = resolve;
  
    //   document.head.appendChild(link);
      console.log("fetch.url", url);
      console.log("fetch.orig", orig);
      url.metadata.doesThisMakeItThrough = function() { alert("makes it"); }
      resolve();
    })
    .then(function () {
        console.log("then ...");
        return '';
    });
};

exports.instantiate = function(a, b, c) {
    return a.metadata.doesThisMakeItThrough;
}

exports.locate = function(load) {
    console.log("locate.load", load);
    return load.name + "x";
}