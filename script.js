const form = document.getElementById('formkontak');
form.addEventListener("submit", function (event) {


    // Mencegah form berpindah ke halaman lain
    event.preventDefault();

    //===========NOMOR WHATSAPP TUJUAN=====================
    const nomorWhatsApp = "6282144858868";

    //===========MENGAMBIL DATA DARI FORM===========//
    const nama =
        document.getElementById("nama").value;
    const email =
        document.getElementById("email").value;
    const telepon =
        document.getElementById("telepon").value;
    const minat =
        document.getElementById("minat").value; 
    const pesan =
        document.getElementById("pesan").value;
    //=========MEMBUAT ISI PESAN WHATSAPP===================//
        const isipesan =
    `Halo saya menghubungi melalui CV
Nama Lengkap : ${nama}
email        : ${email}
No.Telepon   : ${telepon}
Bidang Minat : ${minat}
Pesan        : 
${pesan}`;
//============MENGUBAH PESAN MENJADI FORMAT URL=============//
const pesanEncoded =
    encodeURIComponent(isipesan);

//==================MEMBUAT LINK WHATSAPP================//
const urlWhatsApp = 
//menggunakan aplikasi w.a
`https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`;
//============MEMBUKA WHATSAPP=======================//
window.open(urlWhatsApp, "_blank");
});
