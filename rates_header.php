header("Access-Control-Allow-Origin: *");
header("content-type: application/json");
echo file_get_contents($_REQUEST['https://cdn.jsdelivr.net/gh/tklox/rates@ae77eab727fc00ed1ea6ac3b7f888b21fbd40130/rates.json'].".json");
