function productsManage(){
    $.ajax({
        url: '../../../xml/pemasaran.xml',
        dataType: 'xml',

        error: function () {
            $('#table tbody').append('<tr id="status"><td colspan="7" class="text-center">Can not load data</td></tr>'); 
        },
        
        success: function (response) {
            var products = $(response).find('debetMaster').children('produk');
            
            var i;

            for (i=0; i < products.length; i++){
                
                var data = products[i];
                
                var bukti = $(data).children('bukti').text();
                var keterangan = $(data).children('keterangan').text();
                var divisi = $(data).children('divisi').text();
                var debet = $(data).children('debet').text();
                var kredit = $(data).children('kredit').text();
                                            
                $('#table tbody').append('<tr id="status">'+
                '<td>' + (i+1) + '</td>' +
                '<td>' + bukti + '</td>' +
                '<td>' + keterangan + '</td>' +
                '<td>' + divisi + '</td>' +
                '<td>' + debet + '</td>' +
                '<td>' + kredit + '</td>'
                );			
                
            }
        },
       
    })
};    

function cashFlow(){
    $.ajax({
        url: '../../../xml/pemasaran.xml',
        dataType: 'xml',

        error: function () {
            $('#table tbody').append('<tr id="status"><td colspan="7" class="text-center">Can not load data</td></tr>'); 
        },
        
        success: function (response) {
            var products = $(response).find('report').children('moneyFlow');
            
            var i;

            for (i=0; i < products.length; i++){
                
                var data = products[i];
                
                var bukti = $(data).children('bukti').text();
                var keterangan = $(data).children('keterangan').text();
                var divisi = $(data).children('divisi').text();
                var debet = $(data).children('debet').text();
                var kredit = $(data).children('kredit').text();
                var saldo = $(data).children('saldo').text();
                                            
                $('#table tbody').append('<tr id="status">'+
                '<td>' + (i+1) + '</td>' +
                '<td>' + bukti + '</td>' +
                '<td>' + keterangan + '</td>' +
                '<td>' + divisi + '</td>' +
                '<td>' + debet + '</td>' +
                '<td>' + kredit + '</td>' +
                '<td>' + saldo + '</td>' 
                );			
                
            }
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
   
        $('#maintenance').load('../../../Error/main.html');
     
     });
}

function addFuncConf() {
    alert("Produk telah ter-upload !");
  }