fetch("https://cdn.jsdelivr.net/gh/tklox/rates@609730a61d9e12071ff00dae669441fa2a1b45a6/rates_header.php", {cache: "no-store"})
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
				
            });
        function appendData(data) {
			for (var i = 0; i < data.length; i++) {
              if(document.getElementById(data[i].id+'ir')){
			  document.getElementById(data[i].id+'ir').innerHTML = data[i].ir;
               };
              if(document.getElementById(data[i].id+'ir2')){
			  document.getElementById(data[i].id+'ir2').innerHTML = data[i].ir;
                 };
               if(document.getElementById(data[i].id+'cr')){
			  document.getElementById(data[i].id+'cr').innerHTML = data[i].cr;
                 };
               if(document.getElementById(data[i].id+'cr2')){
			  document.getElementById(data[i].id+'cr2').innerHTML = data[i].cr;
                 };
               if(document.getElementById(data[i].id+'dhcr')){
			  document.getElementById(data[i].id+'dhcr').innerHTML = data[i].cr;
                 };
              if(document.getElementById(data[i].id+'dhcr2')){
			  document.getElementById(data[i].id+'dhcr2').innerHTML = data[i].cr;
                 };
			}
            }
