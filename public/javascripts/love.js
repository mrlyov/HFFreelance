document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.querySelectorAll('.love');

    loveButton.forEach(button => {
        button.addEventListener('click', function() {
            const siteId = this.getAttribute('data-id');
            const siteTitle = this.getAttribute('data-title');
            const siteType = this.getAttribute('data-type');
            const siteImg = this.getAttribute('data-img');
            const love = document.getElementById('love-'+siteId)
            const alreadyLove = document.getElementById('alreadyLove-'+siteId)

            let favorites = localStorage.getItem('favorites');

            if (favorites){
                favorites = JSON.parse(favorites)
            }
            else{
                favorites = [];
            }

            const favoritesIndex = favorites.findIndex(item => item.id === siteId)

            if(favoritesIndex === -1){
                favorites.push({id: siteId, title: siteTitle, type: siteType, img: siteImg })
            }

            love.hidden = true;
            alreadyLove.hidden = false;
            localStorage.setItem('favorites', JSON.stringify(favorites))
            dynamicMenu(`${siteTitle} добавлен в избранное!`)
        })
    })
})

function dynamicMenu(text) {
    const alert = document.createElement('div');
    const alertText = document.createElement('alertText');

    alert.classList.add('alert');
    alertText.innerHTML = text;

    alert.appendChild(alertText);
    document.body.appendChild(alert);

    setTimeout(() => {
        alert.classList.add('show');
    }, 100);
    setTimeout(() => {
        alert.classList.add('backShow');
    }, 3000)
    setTimeout(() => {
        document.body.removeChild(alert)
    }, 6000)
}