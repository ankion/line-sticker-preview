// Saves options to localStorage.
function save_options() {
  var authkey = document.getElementById("authkey");
  var encode_authkey = document.getElementById("encode_authkey");
  var accesstoken = document.getElementById("accesstoken");
  var encode_accesstoken = document.getElementById("encode_accesstoken");
  
  localStorage["authkey"] = authkey.value;
  localStorage["encode_authkey"] = encode_authkey.value;
  localStorage["accesstoken"] = accesstoken.value;
  localStorage["encode_accesstoken"] = encode_accesstoken.value;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var authkey = document.getElementById("authkey");
  var encode_authkey = document.getElementById("encode_authkey");
  var accesstoken = document.getElementById("accesstoken");
  var encode_accesstoken = document.getElementById("encode_accesstoken");
 
  if (localStorage["authkey"]) authkey.value = localStorage["authkey"];
  if (localStorage["encode_authkey"]) encode_authkey.value = localStorage["encode_authkey"];
  if (localStorage["accesstoken"]) accesstoken.value = localStorage["accesstoken"];
  if (localStorage["encode_accesstoken"]) encode_accesstoken.value = localStorage["encode_accesstoken"];
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);