/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function toggleVisibility(key, type) {
    var absId = 'a' + key;
    var bibId = 'b' + key;

    var showId = type + key;
    var el = document.getElementById(showId);

    // If the clicked section is already open, hide it
    if (el.style.display === 'block') {
        el.style.display = 'none';
    } else {
        // Hide both sections first
        document.getElementById(absId).style.display = 'none';
        document.getElementById(bibId).style.display = 'none';
        // Show the requested section
        el.style.display = 'block';
    }
}

function copyBibtex(key) {
    var pre = document.getElementById('bib-' + key);
    var bibtex = pre.innerText;
    navigator.clipboard.writeText(bibtex).then(function() {
        var copiedMsg = document.getElementById('copied-' + key);
        copiedMsg.style.display = 'block';
        pre.style.backgroundColor = '#ddfff8';
        setTimeout(function() {
            copiedMsg.style.display = 'none';
            pre.style.backgroundColor = '';
        }, 800);
    });
}
