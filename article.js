

document.addEventListener('DOMContentLoaded', function() {
    const shareImg = document.getElementById('shareimg');
    const iconShareActive = document.getElementById('icon-share-active');
    const shareOpenContainer = document.querySelector('.share-open-container');
    const wholeImgContainer = document.querySelector('.wholeImgContainer');
    
    shareOpenContainer.style.display = 'none';

    function toggleShare() {
        if (window.innerWidth <= 1400) {
            if (shareOpenContainer.style.display === 'none') {
                shareOpenContainer.style.display = 'flex';
                wholeImgContainer.style.display = 'none';
            } else {
                shareOpenContainer.style.display = 'none';
                wholeImgContainer.style.display = 'flex';
            }
        } else {
            if (shareOpenContainer.style.display === 'none') {
                shareOpenContainer.style.display = 'flex';
                shareImg.style.display = 'none'; 
                wholeImgContainer.appendChild(iconShareActive);
            } else {
                shareOpenContainer.style.display = 'none';
                shareImg.style.display = 'block'; 
                if (iconShareActive.parentNode === wholeImgContainer){
                    wholeImgContainer.removeChild(iconShareActive);
                }
            }
        }
    }

    shareImg.addEventListener('click', toggleShare);
    iconShareActive.addEventListener('click', toggleShare);
});
