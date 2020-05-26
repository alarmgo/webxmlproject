function productsData(){
    $.ajax({
        url: '../../xml/masterDataProduksi.xml',
        //dataType: 'xml',

        beforeSend: function () {
            $('#table').html('Loading...');
        },
        
        success: function (response) {
            var producs = $(response).find('dataBarang').children('barang');
            
            var i;

            for (i=0; i < producs.length; i++){
                
                var data = producs[i];
                
                var kode = $(data).children('kode').text();
                var nama = $(data).children('nama').text();
                var kategori = $(data).children('kategori').text();
                var batas = $(data).children('batas').text();
                var stok = $(data).children('stok').text();
                var status = $(data).children('status').text();
                                            
                $('#table tbody').append('<tr id="status">'+
                '<td>' + i + '</td>' +
                '<td>' + kode + '</td>' +
                '<td>' + nama + '</td>' +
                '<td>' + kategori + '</td>' +
                '<td>' + batas + '</td>' +
                '<td>' + stok + '</td>' +
                '<td>' + status + '</td>');				
            }
        },

        error: function () {
            $('#table tbody').append('<tr id="status"><td colspan="7" class="text-center">Can not load data</td></tr>'); 
        },
       
    })
};    

function summary(){
    $.ajax({
        url: '../../xml/akn.xml',
        //dataType: 'xml',
        error: function () {
          alert('failed to load data...'); 
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

