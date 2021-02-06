## EVERYTHING IS OBJECT

ada 2 Type Data 

1. PRIMITIVE
----------------
-Number 
-string
-Boolean
-Undefined
-null

 2 Object
 ----------
-Array
-Function
-Object
-Date

OPP (Object Oriented Programming)
---------------------------------
-sesama object saling berinteraktif melalui method dan properti
- Menggunakan store data, structur aplikasi kedalam module dan keep code clean 

contoh object :

var toyota = {
    nama : 'avanza',
    tahun: 2000,
    warna: 'putih'
}

var suzuki = {
    nama : 'apv',
    tahun: 2005,
    warna: 'biru'
}

var honda = {
    nama : 'brio',
    tahun: 2015,
    warna: 'merah'
}

//objec object diata bisa di masukan di object besar contohnya di masukan di dalam object car:

car = {
    nama 
    tahun 
    pabrik 
    dsb
}

// itulah sering di sebut class tetapi kalo di java scrip lebih populer dengan sebutan konstructor atau prototype.


Construktorkita bisa membuat banyak instansi ,contohnya construktor car bisa membuat object baru misalnya toyota,suszuki, honda dsb. 

Inheritance
-----------

inheritance adalah turunan dari object  itu sendiri object besar.

contoh apa turunan dari car

sport car = {
    type 
    tahun 
    mesin 
    ukuran
    
}

family car = {
    type 
    tahun 
    mesin 
    ukuran
    
}

contoh object besar yang ada turunannya
--------------------------------------

car = {
    tahun : 2010
    pabrik: 'sunter'
    jenis :car barang = {
    
    type : 'solar',
    karoseri : 'Aduhai',
    mesin : 2000,
    kapasitas: 10 th
}
}


CONSTRUKTUR Function

function(){....}

Kenapa kita membutuhkan konstruktur function dan pada saat apa?

    karena kita perlu membuat object object baru pada saat kita membutuhkan new instance new instance maka kita membutuhkan function construktor . instance atu copy dari blue print dari sebuah object / function/class. 
    
    function Motor () {return object;}

Membuat construktor function
-function nama function gunakan huruf besar contoh Motor 
--lewatkan pass parameter
-akses parameter dengan this 
-gunakan new keyword untuk invoke/memanggil konstruktor function
-menambahkan value untuk parameter di atas sebagai argumen
-gunakan variabel invoke untuk menyimpan new object tersebut
-dengan demikian anda bisa mulai membuat instance baru dengan berbeda value,instance(baca mengcopy)
-tampilkan pada console. 


contoh function konstructor, jgn lupa awalan pakai huruf besar

function Car (nama,tahun,x,y){

    this.nama = nama;
    this.tahun = tahun;
    this.x = x;
    this.y = y;
}

//cara manggilnya kalo untuk konstruktor kita harus menggunakan new di depannya

var car1 = new Car('Honda' ,2010,20,10);
var car2 = new Car('Suzuki' ,2010,20,10);
var car3 = new Car('Toyota' ,2010,20,10);

//jawaban :

car1
Car {nama: "Honda", tahun: 2010, x: 20, y: 10}nama: "Honda" tahun: 2010 x: 20 y: 10__proto__: Object
car2
Car {nama: "Suzuki", tahun: 2010, x: 20, y: 10}nama: "Suzuki" tahun: 2010 x: 20 y: 10__proto__: Object
car3
Car {nama: "Toyota", tahun: 2010, x: 20, y: 10}nama: "Toyota" tahun: 2010x: 20y: 10__proto__: Object



## DOM 
## Document Object Model 
 DOM adalah presentasi dari Java Script ,gunanya adalah untuk komunikasi dan interaktif dengan object2 di dalam broser.

