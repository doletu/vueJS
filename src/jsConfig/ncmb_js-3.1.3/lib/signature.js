"use strict";

var crypto = require("crypto");
var Url = require("url");

module.exports.create = create;

function create(
  url,
  method,
  query,
  timestamp,
  signatureMethod,
  signatureVersion,
  fqdn,
  apikey,
  clientkey,
  dataResponse
) {
  var parsedUrl = Url.parse(url);

  if (method === "DEL") method = "DELETE";

  var data = {
    SignatureMethod: signatureMethod || this.signatureMethod,
    SignatureVersion: signatureVersion || this.signatureVersion,
    "X-NCMB-Application-Key": apikey || this.apikey,
    "X-NCMB-Timestamp": timestamp || new Date().toISOString(),
  };
  Object.keys(query).forEach(function (key) {
    var q = query[key];
    if (typeof q === "object") q = JSON.stringify(q);
    data[key] = fixedEncodeURIComponent(q);
  });

  var sigStr = [
    method,
    fqdn || this.fqdn,
    parsedUrl.path,
    Object.keys(data)
      .sort()
      .map(function (key) {
        return [key, data[key]].join("=");
      })
      .join("&"),
  ].join("\n");
  if (dataResponse) sigStr += "\n" + dataResponse;
  var sig = crypto
    .createHmac("SHA256", clientkey || this.clientkey)
    .update(sigStr)
    .digest("base64");
  return sig;
}

function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/'/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16);
  });
}
