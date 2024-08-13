document.addEventListener('DOMContentLoaded', function() {
    const shareImg = document.getElementById('shareimg');
    const iconShareActive = document.getElementById('icon-share-active');
    const shareOpenContainer = document.querySelector('.share-open-container');
    const wholeImgContainer = document.querySelector('.wholeImgContainer');

    shareOpenContainer.style.display = 'none';

    function toggleShare() {
        if (shareOpenContainer.style.display === 'none') {
            shareOpenContainer.style.display = 'flex';
            wholeImgContainer.style.display = 'none';
        }else if(wholeImgContainer.style.display === 'none'){
            shareOpenContainer.style.display = 'none';
            wholeImgContainer.style.display = 'flex';
        }
    }

    shareImg.addEventListener('click', toggleShare);
    iconShareActive.addEventListener('click', toggleShare);
});
