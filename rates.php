<?php
header("Access-Control-Allow-Origin: *");
header("content-type: application/javascript");
echo file_get_contents("https://github.com/tklox/rates/blob/35c03ceccb1b45be6b76be42089872be3d1e7429/rates.js");
