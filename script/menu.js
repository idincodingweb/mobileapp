// Menambahkan event listener untuk window load
window.addEventListener('load', function() {
  // Secara default, buka tab 'Home'
  openTab(event, 'Home');
});

// Fungsi untuk membuka tab konten dengan efek transisi
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    tabcontent[i].style.display = "none"; // Tambahkan ini untuk memastikan konten tersembunyi
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  setTimeout(function() { // Tambahkan setTimeout untuk memberikan waktu bagi transisi
    document.getElementById(tabName).className += " active";
  }, 100); // Delay 100ms untuk memastikan display: block diterapkan sebelum transisi
  evt.currentTarget.className += " active";
}
