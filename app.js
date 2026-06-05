let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};




let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id +']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrolly > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

   
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value || "Non renseigné";
    const sujet = document.getElementById('sujet').value;
    const message = document.getElementById('message').value;

    
    const votreNumero = "237650783430"; 

   
    const texteMessage = `Bonjour, je souhaite vous contacter via votre Portfolio.\n\n` +
                         `*👤 Nom :* ${nom}\n` +
                         `*📧 Email :* ${email}\n` +
                         `*📞 Tél :* ${telephone}\n` +
                         `*📌 Objet :* ${sujet}\n\n` +
                         `*💬 Message :*\n${message}`;

    
    const texteEncode = encodeURIComponent(texteMessage);

    
    const urlWhatsApp = `https://wa.me/${votreNumero}?text=${texteEncode}`;
    window.open(urlWhatsApp, '_blank');
});


var typed = new Typed(".typing", {
    strings: ["Un Developpeur Web", "Une Etudiante en Genie Informatique"],
    typeSpeed: 100,      
    backSpeed: 60,       
    backDelay: 1000,     
    loop: true          
});

ScrollReveal({ 
    
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.accueil-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.accueil-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.accueil-content h1, .apropos-img', { origin: 'left'});
ScrollReveal().reveal('.accueil-content p, .apropos-content', { origin: 'right'});

