//* ======================================================
//*                        EVENTS
//* ======================================================

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//?METHOD-1 (HTML-INLINE)
//?---------------------------------------------------------------
//! alttaki kod index.html de, görmek için buraya da yazdık
//*  <h1 onmouseover="style.color='blue'"  onmouseout="style.color='red'">DOM SELECTOR</h1>

//?METHOD-2 (Function calling in HTML)
//?---------------------------------------------------------------

//!index.html deki kodu buraya görmek için yazdık
{/* <h1 class="header"  onmouseover=mavi() 
   onmouseout=kirmizi()
>DOM BASİC</h1> */}

const header = document.querySelector(".header")
const mavi = () => header.style.color = "blue"
const kirmizi = () => header.style.color = "red"