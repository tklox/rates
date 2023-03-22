fetch("https://cdn.jsdelivr.net/gh/tklox/rates@ae77eab727fc00ed1ea6ac3b7f888b21fbd40130/rates.json", {cache: "no-store"})
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
