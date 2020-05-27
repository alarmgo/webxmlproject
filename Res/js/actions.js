function hnp(){
    $.ajax({
        url: '../../xml/akn.xml',
        //dataType: 'xml',
        error: function () {
            $('#table tbody').append('<tr id="status"><td colspan="7" class="text-center">Data Gagal Dimuat</td></tr>'); 
        },
        
        success: function (response) {
            var inv = $(response).find('hnp').children('invoice');
            
            var i;

            for (i=0; i < inv.length; i++){
                
                var baris = inv[i];
                
                var tgl = $(baris).children('tanggal').text();						
                var tgt =	$(baris).children('tenggat').text();
                var tp = $(baris).children('tp').text();
                var divisi = $(baris).children('divisi').text();
                var cur = $(baris).children('cur').text();
                var debit = $(baris).children('debit').text();
                var credit = $(baris).children('credit').text();
                                            
                $('#table tbody').append('<tr id="status">'+
                '<td>' + tgl + '</td>' +
                '<td>' + tgt + '</td>' +
                '<td>' + tp + '</td>' +
                '<td>' + divisi + '</td>' +
                '<td>' + cur + '</td>' +
                '<td>' + debit + '</td>' +
                '<td>' + credit + '</td>');				
            }
        },
       
    })
};    

function sumakn(){
    $.ajax({
        url: '../../xml/akn.xml',
        //dataType: 'xml',
        error: function () {
          alert(response); 
        },
        
        success: function (response) {
            var sum = $(response).find('sums');
                                        
           
            var din = $(sum[0]).children('days').text();	
            var min = $(sum[0]).children('month').text();					
            var yin = $(sum[0]).children('year').text();					
            var tin = $(sum[0]).attr('total');
            
            $('#dayin').append(din);
            $('#monthin').html(min);
            $('#yearin').html(yin);
            $('#totalin').html(tin);

            var dout = $(sum[1]).children('days').text();	
            var mout = $(sum[1]).children('month').text();					
            var yout = $(sum[1]).children('year').text();					
            
            $('#dayout').append(dout);
            $('#monthout').html(mout);
            $('#yearout').html(yout);
 
        },
    })
};

function sumsdm(){
    $.ajax({
        url: '../../xml/sdm.xml',
        //dataType: 'xml',
        error: function () {
          alert('failed to load data...'); 
        },
        
        success: function (response) {
            var sum = $(response).find('attend');
                                        
           
            var tkar = $(sum).children('tkar').text();	
            var pres = $(sum).children('pres').text();					
            var abs = $(sum).children('abs').text();					
            var izin = $(sum).children('izin').text();					
            
            
            $('#tkar').html(tkar);
            $('#pres').html(pres);
            $('#abs').html(abs);
            $('#izin').html(izin);


        },
    })
};


function time(){
    var t = new Date().toLocaleString();
    $('#timenow').html(t);
    setInterval(time, 1000);
}

function maintenance(){
    $(document).ready(function(){
   
        $('#maintenance').load('../../Error/main.html');
     
     });
}

