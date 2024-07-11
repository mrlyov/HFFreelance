function ha() {
    const sectionLinks = document.querySelectorAll('.ha');
    sectionLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({behavior: 'smooth'});
            }
        });
    });
}
ha();
const section = document.getElementById('headerSection');
const back = document.getElementById('back');
const fileId = localStorage.getItem('id');
function header(){
    if(window.location.pathname === '/auth/login' || window.location.pathname === '/auth/register' || window.location.pathname === `/PersonalArea` || window.location.pathname === `/sendReviews/${fileId}` || window.location.pathname === `/aboutUs` || window.location.pathname === `/privacyPolicy` || window.location.pathname === `/rules` || window.location.pathname === '/allReviews' || window.location.pathname === '/moreDetails'){
        section.hidden = true;
        back.hidden = false;
    }
    else{
        section.hidden = false;
        back.hidden = true;
    }
}
header();
