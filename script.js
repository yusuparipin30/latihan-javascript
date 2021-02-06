 //console.log("Hello, World!!")

//document.getElementById('heading').innerHTML = "Hello, World"
//
            /*VARIABEL */
//
        // belajar variabel string/ text
//
//var name= "Yusup";
//console.log(name);
//
//var lastName = "Aripin";
//console.log(lastName);
//
        //belajar variabel angka, umur
//
//var umur = 26;
//console.log(umur);
//
        //menggabungkan kedua variabel 
        // membuat spasi dengan menambahkan titil 2 dan setip menambahkan sesuatu harus ada tanda +
//
//var fullName = name + ' ' + lastName ;
//console.log(fullName);
//
////coba bolean true
//
//var fullName = true;
//console.log(fullName);
//
//var job = "Trainer";
//console.log(job);
//
////menggabungkan semua menjadi kalimat 
//
//var biodata = "Nama Saya" +" "+ name + " " + lastName + " " + "Umur Saya" + " "+ umur + " " + "Pekerjaan Saya Adalah" + " " + job;

//console.log(biodata);


                  /* Operator aritmetik*/

  //macam - macam operator

//penambahan (+)
//pengurangan (-)
//perkalian (x)
//pembagian (/)
//modulus (%)
//increment ++ (penambahan secara otomatis /satu persatu)
//decrement -- (pengurangan satu persatu)


                    /*operator assigmment */

// operator     contoh               sama seperti
//  =       contoh x = y               x = y
// +=       contoh x += y              x = x + y
// -=       contoh x -= y              x = x - y
// *=       contoh x *= y              x = x * y
// /=       contoh x /= y              x = x / y
// %=       contoh x % = y             x = x % y



//penambahan
//var x = 5;
//var y = 7;
//var z = x + y;
//console.log(z);

//perkalian
//

//var x = 3;
//var y = 4;
//var z = x * y ;
//console.log(z);


//var x = 5;
//   x += 5;
//console.log(x);

        //STRING OPERATOR
//text1 = "Yusup";
//text2 = "Aripin";
//text3 = text1 + " " + text2;
//console.log(text3);

 
        // operator penambahan 
//x = 5+5 ;
//y = "5" + 5;
//z = "Hello" + 5;
//console.log(x);
//console.log(y);
//console.log(z);


        //Comparison Operator

//  ==      equal to (value)  Mengecek kebenaran, apakah 2 operand yang dibandingkan bernilai sama. Jika bernilai sama maka nilai kebenarannya true.


//  ===     equal value and equal type(idential)  Mengecek kebenaran, apakah 2 operand yang dibandingkan bernilai dan bertipe sama. Jika ya, maka nilai kebenarannya adalah true.

//  !=      not idential      ( Membandingkan 2 operand apakah nilainya tidak sama. Jika tidak sama, maka nilai kebenarannya adalah true.)

//  !==     not idential value atau not equal type Membandingkan 2 operand, apakah nilai dan tipenya tidak sama. Jika tidak sama, hasilnya adalah true.

// >       greather than
// <       less than
// >=      greather than atau equal to
// <=      less than atau equal to
// ?       ternary operator


        //logical operator
 
//  &&      logical and
//  ||      logical or
//  !       logical not

        //type Operator

//  typeof      return-->tipe
//  instanceof  return-->bolean (true/false)

        //Bitwise

//    &|-*<< >> >>>

        
        /* if else statement */

//var name = "Brandon";
//var ago = 16;
//var isYoung = "Yes";
//
//if(isYoung == 'Yes'){
//    console.log(name + " is young man")   
//} else {
//    console.log("I hope mature soon") 
//   }
//
//var hour = 18;
//if(hour < 18) {
//    console.log('say yes')
//}else {
//    console.log('say nop')
//}


//var time = 20;
//if (time < 10){
//    console.log ("say no way!!")
//} else if(time < 20){
//    console.log("say meby yes!!")
//} else{
//    console.log("good on you")
//}
 

        /*------------------------------------------------------------------------------------*/

    /*TIPE DATA*/
// * number : float, decimal , integer
// * string : Charakter , text
// * Boolean: logical 2 nilai saja true dan false
// * undefined : fariabel belum memiliki nilai ,yakni nul.
// * Null :non-existent, memiliki nilai, yakni null

        /*-----------------------------------------------------------------------------------*/

/*BOOLEAN*/

// yes or no
// on or of
// true of false

// boolean (10 > 9)
//
//console.log(Boolean(10>9));
//console.log(Boolean(10>19));


// Comparison dan Condition

// == equal          ---> if (day == 'senin')
// > greater than   ----> if (gaji > 1000000)
// < less than      ----> if (age < 18)


// Everything With a "Value" is true

//console.log(Boolean(100));
//console.log(Boolean(3.14));
//console.log(Boolean(-15));
//console.log(Boolean("Hello"));
//console.log(Boolean("false"));
//
// 
////BOOLEAN INTEGER TANPA PETIK2
//console.log(Boolean(false));
//console.log(Boolean(true));

//EVERYTHING without a "value" is false

//var x = 0;
//console.log(Boolean(x));
//
//var y = "";
//console.log(Boolean(y));

//var z = "NaN";
//console.log(Boolean(z));


  // Tool Debugging JS ada 3 TOOLS 

// * console.log()
// * alert ()
// * prompt ()

//console.log(Boolean(z));
//alert(Boolean(z));


// //menampilkan nama yang kita tulis di console.og
//var name = prompt("what is your name");
// console.log(name);
//
//alert(name);

     
//var time = 20;
//if (time < 10){
//    console.log ("say no way!!")
//} else if(time < 20){
//    console.log("say meby yes!!")
//} else{
//    console.log("good on you")
//}


   /* SWICH ADALAH PENGGANTINYA IF ELSE lebih efisien*/
   /* CASE sama saja seperti if */

//
//var job = 'Trainer';
//
//switch (job) {
//    case 'Trainer':   //cara baca :kalo dia trainer
//    console.log ('Dyo adalah betul seorang Trainer');
//    break; 
//    //di beri break supaya break atau tidak luping terus
//
//    case 'Driver':
//    console.log('Dyo bukan seorang Driver');
//    break;
//    
//    case 'Polisi':
//    console.log('Polisi itu mengejar penjahat');
//    break;
//    
//    default: 
//    // default itu untuk memberi solusi ketika kondisi di atas tidak ada jawabannya, kira2 apa jawabannya di default.
//    console.log('Byo bukan Driver atau Polisi');
//}
//    
//        //conton dari default
//
//var job = 'Tukang';
//
//switch (job) {
//    case 'Trainer':   //kalo dia trainer
//    console.log ('Dyo adalah betul seorang Trainer');
//    break; 
//    //di beri break supaya break atau tidak luping terus
//
//    case 'Driver':
//    console.log('Dyo bukan seorang Driver');
//    break;
//    
//    case 'Polisi':
//    console.log('Polisi itu mengejar penjahat');
//    break;
//    
//    default: 
//    // default itu untuk memberi solusi ketika kondisi di atas tidak ada jawabannya, kira2 apa jawabannya di default.
//    console.log('Byo bukan Driver atau Polisi dan bukan apa-apa');
//}
//    
//
//    //contoh menggunakan debugin promp
//
//
//var job = 'Trainer';
//
//job = prompt("Apa profesi si Dyo?")
//
//switch (job) {
//    case 'Trainer':   //kalo dia trainer
//    console.log ('Dyo adalah betul seorang Trainer');
//    break; 
//    //di beri break supaya break atau tidak luping terus
//
//    case 'Driver':
//    console.log('Dyo bukan seorang Driver');
//    break;
//    
//    case 'Polisi':
//    console.log('Polisi itu mengejar penjahat');
//    break;
//    
//    default: 
//    // default itu untuk memberi solusi ketika kondisi di atas tidak ada jawabannya, kira2 apa jawabannya di default.
//    console.log('Byo bukan Driver atau Polisi dan bukan apa-apa');
// }
    
//itu Di atas adalah cara lain di dalam sebuah kondision di JAVA SCRIPT ana bisa menggunakan if ,else jika kondisi yang di tanyakannya sedikit 1 kondisi atau 2 maximal 3 kondisi, tapi lebih dari 3 kondisi lebih elegan menggunakan SWITCH.

  /*----------------------------------------------*/

/*Java Script Function*/

//* Function adalah aspek penting dalam JavaScript dan bahasa programing yang lain.

//* Block of Code, untuk menjalankqan task khusus dalam programming.

//* Function akan tereksekusi apabila di panggil (call).

//* Function di buat untuk mengurangi penulisan code secara berulang-ulang ,mengembalikan return.

// DRY = Do Not Repeat Your Self

// contoh penulisan function


//  function xxx (argument) {    // xxx adalah nama function  kurung () fungsinya untuk menempatkan parameter atau argumen.
//  ........    // di kolom titik2 adalah body penempatan hasil atau perintah berbentuk kode

//     }

//  xxx ();              // kita menulis di sini untuk memanggil parameter atau perintahnya.
//   

   /* contoh function yg pertama tidak menggunakan parameter/argumen*/

//function yo(){
//    console.log('Yo !!!')
//}
//yo();

    /* contoh function yang kedua menggunakan parameter atau argument name*/

//  function yo(name){
//    console.log(name)
//  }
//  yo("dyo !!!");

    /* contoh yang ketiga menggunakan variabel, variabel di ibaratkan sama seperti argument/ pengganti argumet */

//var name = "Brandon"
//function yo(){
//    console.log(name)
//}
//
//yo(name);

        /*contoh ke empat menggunakan 2 buah argument   dan contoh memanggil perintah berkali-kali*/

//function yo(name, age){
//    console.log(name + ' ' +age)
//}
//
//yo("dyo !!", 35);
//yo("Hery!!", 40);
//yo("mahes",3);
//
//        /* contoh function,  return */
//
//function tambah(satu,dua){
//    return satu + dua;
//}
//console.log(tambah(5,10));


        /* function dengan kondisi if sederhana*/

//function yo(name, age){
//    if (age >35){
//    return name + ', not that old!';
//} else {
//    return name+ ', is still young';
//}
//}
//
//var nama = yo('Dyo',40);  // kalo kita ingin menyimpan haril kita harus memberikan variabel  yaitu nama =
//console.log(nama);
//console.log(yo('Dyo', 30));    //ini kalo tidak menggunakan variabel. tetapi lebih efektif menggunakan fariabel

        /* contoh function lagi*/

//function coba (a , b){
//    return a + b;
//}
//var cobi = coba("Dyo", " is coll!!!");
//console.log(cobi);                              // console untuk menampilkan di console
//
//document.getElementById("element1").innerHTML = cobi;     //itu adalah cara untuk menampilkan di halaman html broser
//alert(cobi);        // menampilkan menggunakan alert


                /*---------------------------------------------
                statement dan Expresion di dalam java script
                ---------------------------------------------*/
                
        /*contoh statement  adalah sebuah sintax yang tidak mengeluarkan nilai /hasil */

//    function myFunc() {
//        //code
//    }


    /*contoh lagi*/

//    if(x === 5){
//        //do something here
//    }


        /*Expression*/

//    3 + 4;
//    var x =3;


            /*----------------------------------------------------------------------
                           java script array  arrai itu seperti kumpulan dr variabel   
            ------------------------------------------------------------------------*/

//var name ="Joni";
//var LastName = "Gudel";
//
//var names = ["Joni", "Gudel",1190, "Instruktur"]
//
//            /*CARA AKSES SEBUAH ARAY   ARAI ITU DI MULAI DARI O   ARRAY ADALAH JAMAK*/
//        console.log(names);
//        console.log(names[0]);
//        console.log(names[2]);


            /*MUTATION adalah proses merubah nilai dari sebuah variabel atau ARRAY*/
            // contoh akan merubah variabel Gudel menjadi doer

//            names[1] = 'Dorer';
//            console.log(names);

          /*cara melakukan mutation yg lain menggunakan PUSH bertujuan menambahkan nilai array atau variabel di JavaScript*/

//    names.push('merah');
//     console.log(names[4]);

            /* UNSHIFT untuk menambahkan nilai atau variabel atau data baru pada array tetapi di tempatkandi paling depan*/

//       names.unshift('Bapak');
//       console.log(names);

        

            /*pop untuk menghapus element terakhir pada ARRAY*/
        
//        names.pop();

        /*SHIFT untuk meremove atau menghapus arrai bagian paling depan*/
//       names.shift(); 



        /* JvaScript OBJECT */


        //cara menuliskan sebuah object
//var car = {
//    color:'blue',
//   year:2010,
//   driver: function(){return'drive'}
//};

        //cara menuliskan sebuah aray

//var shoplist = [
//    'aplle',
//    'orange',
//    'pear'
//] 
       //PR ARRAY
//var hewan = [
//    'Kuda',
//    'Kambing',
//    'Kucing',
//    'Harimau',
//    'Singa'
//]

// var car = {
//     made :"Honda",
//     speed : 160,
//     engine: {
//         size:2.5,
//         made:'Daihatsu',
//         fuel:'Pertamax',
//         piston:[
//             '2010',
//             {make : 'Cina'},
//             {make : 'Jepang'}
//         ],
//     },
//     drive : function(){return'drive';}
// };
//
//
//var array = [
//    'string',
//    1000,
//    [true,100],
//    {nama:'Jhon'},
//    function(){return 'Drive';}
//];
 
//console.log(car);
//console.log(car.made);
//console.log(car.engine);

//        TUGAS
//
//membuat satu buah array,bisa apa saja yang memuat,
//type data string ,number, bollean,array juga object
// dan function. buat array yang selogika mungkin apa yang
// ada dalam kehidupan kita sehari-hari.
//

//var mahluk = [
//    'string',
//    300618,
//    [true,1234],
//    {ayam : 'bertelur'},
//    function(){return 'hewan';}
//];



  /*------------------------------------
       Mengakses array dan Object
  ------------------------------------*/

//console.log(car);
//console.log(car.made);
//console.log(car.engine);


            /*TUGAS LAGIIII BROOO*/

//tugas
//dari object dan array yang telah anda buat,
//buatlah sintax cara mengaksesnya. 
//baik dengan cara tradisionoal atau menggunakan dengan 
//square bracket [] seperti yang saya contohkan di atas
//
//
//silakan upload jawaban anda di trello


/*CREAT ASIGN & DELET MEMBER ARRAY DAN OBJECT*/

//var array = [
//    'string',
//    1000,
//    [true,100],
//    {nama:'Jhon'},
//    function(){return 'Drive';}
//]; 

//CARA merubah member

//array
//(5) ["string", 1000, Array(2), {…}, ƒ]
//array[1]
//1000
//array[1] = 'strong';
//"strong"
//array
//(5) ["string", "strong", Array(2), {…}, ƒ]
//array[0]= 'ster';
//"ster"
//array
//(5) ["ster", "strong", Array(2), {…}, ƒ]


// MENAMBAHKAN MEMBER DARI ARRAy

//rray
//(5) ["string", 1000, Array(2), {…}, ƒ]0: "string"1: 10002: (2) [true, 100]3: {nama: "Jhon"}4: ƒ ()length: 5__proto__: Array(0)
//
//kaloau mau menambahkan kita lihat dlu length array sudah berapa
//contoh : menambahkan index 6 karna array sebelumnya length sampai length 5
//
//array[6] = true
//true
//
//array
//(7) ["string", 1000, Array(2), {…}, ƒ, empty, true]0: "string"1: 10002: (2) [true, 100]3: {nama: "Jhon"}4: ƒ ()6: truelength: 7__proto__: Array(0)


/*Prebuilt method*/

//shift --> menghapus element pertama pada array

//array
//(5) ["string", 1000, Array(2), {…}, ƒ]
//array.shift()
//"string"
//
//array yang pertama "string" hilang:
//
//array
//(4) [1000, Array(2), {…}, ƒ]


//POP adalah untuk menghapus element yang terakhir

//array
//(5) ["string", 1000, Array(2), {…}, ƒ]0: "string"1: 10002: (2) [true, 100]3: {nama: "Jhon"}4: ƒ ()length: 5__proto__: Array(0)
//array.pop()
//ƒ (){return 'Drive';}
//
//yang hilang function!
//
//array
//(4) ["string", 1000, Array(2), {…}]0: "string"1: 10002: (2) [true, 100]3: {nama: "Jhon"}length: 4__proto__: Array(0)

// -->unshift adalah untuk menambahkan element yang pertamaa pada array

//array
//(5) ["string", 1000, Array(2), {…}, ƒ]
//array.unshift('function','tambah baru')
//7
//array
//(7) ["function", "tambah baru", "string", 1000, Array(2), {…}, ƒ]0: "function"1: "tambah baru"2: "string"3: 10004: (2) [true, 100]5: {nama: "Jhon"}6: ƒ ()length: 7__proto__: Array(0)

//-->menambahkan element array pada urutan akhir 

//array
//(5) ["string", 1000, Array(2), {…}, ƒ]
//array.push('car','motor')
//7
//array
//(7) ["string", 1000, Array(2), {…}, ƒ, "car", "motor"]0: "string"1: 10002: (2) [true, 100]3: {nama: "Jhon"}4: ƒ ()5: "car"6: "motor"length: 7__proto__: Array(0)


//--> splice() menambahkan dan mengurangi element pada array

//array.splice(2,2)

//--> angka 2 pertama dlm tanda kurung menghapus element mulai dari index ke 2.

//--> angka 2 ke dua dalam tanda kurung adalah jumlah element yang akan di hapus start dari indek ke 2

// menghapus element

//array
//(5) ["string", 1000, Array(2), {…}, ƒ]0: "string"1: 10002: (2) [true, 100]3: {nama: "Jhon"}4: ƒ ()length: 5__proto__: Array(0)
//array.splice(2,2)
//(2) [Array(2), {…}]
//array
//(3) ["string", 1000, ƒ]0: "string"1: 10002: ƒ ()length: 3__proto__: Array(0)

// menambahkan element di antara element yang ada
//array.splice(1,0,'Hello','world',2021)
//1 --> menambahkan element dari mulai indek ke 1
//0 --> jumlah element yang akan di hapus
//'Hello', 'World',2021 adalah jumlah element yang di tambahkan

//array
//(5) ["string", 1000, Array(2), {…}, ƒ]0: "string"1: 10002: (2) [true, 100]3: {nama: "Jhon"}4: ƒ ()length: 5__proto__: Array(0)
//array.splice(1,0,'Hello','World')
//[]
//
//array
//(7) ["string", "Hello", "World", 1000, Array(2), {…}, ƒ]0: "string"1: "Hello"2: "World"3: 10004: (2) [true, 100]5: {nama: "Jhon"}6: ƒ ()length: 7__proto__: Array(0)


//array
//(5) ["string", 1000, Array(2), {…}, ƒ]0: "string"1: 10002: (2) [true, 100]3: {nama: "Jhon"}4: ƒ ()length: 5__proto__: Array(0)
//array.splice(2,2,'jhon', 'tay')
//(2) [Array(2), {…}]
//array
//(5) ["string", 1000, "jhon", "tay", ƒ]

    /*JS LOOPS*/
//
//loop adalah pengulangan (interation)
//loop sangat pentign dalam sebuah programing karena menghemat waktu dan tenaga, ketimbang menulis program berulang - ulang untk sebuah taks tertentu, lebih baik membuat kode intrusi pengulangan (metode loop),sehingga program akan melakukan tugas berulang- ulang hingga syarat yang di inginkan seorang programer terpenuhi. 
//
//contoh kita ingin menuliskan number dari 0 sampai 10, di bandingkan kita menuliskan manual.
//
//1
//2
//3
//4
//5
//
//
//kita gunakan for loop 
//
//
//for (var i){
//    
//}
//
//
//sebagai pengganti menggunakan 1,2,3 kita menggunakan i sebagai variabel maka kita tuliskan  
//
//for (var i){
//    
//}
//
//kita ingin mencetak pengulangan dari 0 maka:
//
//for (var i=0;){
//    
//}
//     
//kita ingin mencetak pengulangan dari 0 hingga 10
//     
//     for (var i=0; i < 11; i++){
//    
//}
//     
//jika i lebih kecil dari 11 maka terus tambahkan secara otomatis i tersebut hingga i < 11, yaitu 10:
//
//for (var i=0; i < 11; i++){
//    console.log(i);
//}
//     

//var i;
//for(i=0; i < 11; i++){
//    console.log(i);
//}
//
//i=0 --> i < 11, i++
//i=1 --> i < 11, i++
//i=2 --> i < 11, i++
//dan seterusnya sampai 11


//var family = [
//    'Ayah',
//    'Ibu',
//    'Kakak',
//    'Adik',
//    'Nenek'
//]

// looping menambahkan
//
//var i;
//for (i=0; i < family.length; i++){
//    console.log(family[i]);
//}
//
//jawaban :
//Ayah
//script.js:770 Ibu
//script.js:770 Kakak
//script.js:770 Adik
//script.js:770 Nenek
//
//i=0 itu adalah semicolon, kalo tidak ada itu tidak jalan
//i < family.length adalah kondisi.
//
//
//looping mengurangi
//
//var i;
//for (i = family.length-1; i >= 0; i--){
//    console.log(family[i]);
//}
//
//jawaban :
//Nenek
//script.js:790 Adik
//script.js:790 Kakak
//script.js:790 Ibu
//script.js:790 Ayah
//
//mengapa di kurang 1(-1), karna jumlah length 5, kalau tidak di kurangi mka length 5 akan terbaca menjadi undefined di kurangi agar mulai dari nenek =index 4.
// mengapa i >= 0 , i lebih dari samadengan karena indek 0 adalah ayah dan ayah harus di tampilkan jadi i >=0.
// i = family.length-1 artinya i di sama dengankan length yang terakhir yaitu length 5 dan index terakhir adalah 4 yaitu nenek. 
//
//



/*JS  WHILE LOOP*/
//var i =0;
//while (i < family.length){
//    console.log(family[i]);
//    i++;
//}


/*JS FOR LOOP*/

//for (var i = 1; i <= 10; i++){
//    console.log(i);
//    //menambahkan kondisi break berhenti di 3
//    if (i === 3){
//        break;
//    }
//}
//
//jawaban : 
//1
//script.js:819 2
//script.js:819 3




//for (var i = 1; i <= 10; i++){
//    //menghilangkan angka 6
//    if (i===6){
//        continue;
//    }
//    console.log(i);
//}
//
//jawaban :
//
//1
//script.js:831 2
//script.js:831 3
//script.js:831 4
//script.js:831 5
//script.js:831 7
//script.js:831 8
//script.js:831 9
//script.js:831 10


//
//## EVERYTHING IS OBJECT
//
//ada 2 Type Data 
//
//1. PRIMITIVE
//----------------
//-Number 
//-string
//-Boolean
//-Undefined
//-null
//
// 2 Object
// ----------
//-Array
//-Function
//-Object
//-Date
//
//OPP (Object Oriented Programming)
//---------------------------------
//-sesama object saling berinteraktif melalui method dan properti
//- Menggunakan store data, structur aplikasi kedalam module dan keep code clean 
//
//contoh object :
//
//var toyota = {
//    nama : 'avanza',
//    tahun: 2000,
//    warna: 'putih'
//}
//
//var suzuki = {
//    nama : 'apv',
//    tahun: 2005,
//    warna: 'biru'
//}
//
//var honda = {
//    nama : 'brio',
//    tahun: 2015,
//    warna: 'merah'
//}
//
////objec object diata bisa di masukan di object besar contohnya di masukan di dalam object car:
//
//car = {
//    nama 
//    tahun 
//    pabrik 
//    dsb
//}
//
//// itulah sering di sebut class tetapi kalo di java scrip lebih populer dengan sebutan konstructor atau prototype.
//
//
//Construktorkita bisa membuat banyak instansi ,contohnya construktor car bisa membuat object baru misalnya toyota,suszuki, honda dsb. 
//
//Inheritance
//-----------
//
//inheritance adalah turunan dari object  itu sendiri object besar.
//
//contoh apa turunan dari car
//
//sport car = {
//    type 
//    tahun 
//    mesin 
//    ukuran
//    
//}
//
//family car = {
//    type 
//    tahun 
//    mesin 
//    ukuran
//    
//}
//
//contoh object besar yang ada turunannya
//--------------------------------------
//
//car = {
//    tahun : 2010
//    pabrik: 'sunter'
//    jenis :car barang = {
//    
//    type : 'solar',
//    karoseri : 'Aduhai',
//    mesin : 2000,
//    kapasitas: 10 th
//}
//}
//
//
//CONSTRUKTUR Function
//
//function(){....}
//
//Kenapa kita membutuhkan konstruktur function dan pada saat apa?
//
//    karena kita perlu membuat object object baru pada saat kita membutuhkan new instance new instance maka kita membutuhkan function construktor . instance atu copy dari blue print dari sebuah object / function/class. 
//    
//    function Motor () {return object;}
//
//Membuat construktor function
//-function nama function gunakan huruf besar contoh Motor 
//--lewatkan pass parameter
//-akses parameter dengan this 
//-gunakan new keyword untuk invoke/memanggil konstruktor function
//-menambahkan value untuk parameter di atas sebagai argumen
//-gunakan variabel invoke untuk menyimpan new object tersebut
//-dengan demikian anda bisa mulai membuat instance baru dengan berbeda value,instance(baca mengcopy)
//-tampilkan pada console. 
//
//
//contoh function konstructor, jgn lupa awalan pakai huruf besar
//
//function Car (nama,tahun,x,y){
//
//    this.nama = nama;
//    this.tahun = tahun;
//    this.x = x;
//    this.y = y;
//}
//
////cara manggilnya kalo untuk konstruktor kita harus menggunakan new di depannya
//
//var car1 = new Car('Honda' ,2010,20,10);
//var car2 = new Car('Suzuki' ,2010,20,10);
//var car3 = new Car('Toyota' ,2010,20,10);
//
////jawaban :
//
//car1
//Car {nama: "Honda", tahun: 2010, x: 20, y: 10}nama: "Honda" tahun: 2010 x: 20 y: 10__proto__: Object
//car2
//Car {nama: "Suzuki", tahun: 2010, x: 20, y: 10}nama: "Suzuki" tahun: 2010 x: 20 y: 10__proto__: Object
//car3
//Car {nama: "Toyota", tahun: 2010, x: 20, y: 10}nama: "Toyota" tahun: 2010x: 20y: 10__proto__: Object
//
//
//
//## DOM 
//## Document Object Model 
// DOM adalah presentasi dari Java Script ,gunanya adalah untuk komunikasi dan interaktif dengan object2 di dalam broser.
//
















































































