

    document.addEventListener('DOMContentLoaded', function() {
        const searchInput = document.querySelector('.search-bar input');
        const recommendations = document.querySelector('.recommendations');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        
        // 필터링 된 card 요소들이 항상 중앙 정렬을 유지하도록 함
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const category = card.getAttribute('data-category').toLowerCase();
            if (category.includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });

        // recommendations 요소를 항상 중앙 정렬로 유지
        recommendations.style.alignItems = 'center';
    });
});

    // 좋아요 버튼을 누를 경우 좋아요 수 증가 기능 구현
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        let likeCounter = 10;
        button.addEventListener('click', function() {
            likeCounter++;
            const likeCount = button.closest('.post').querySelector('.post-like');
            likeCount.textContent = `좋아요 ${likeCounter}개`;
        });
    });


    // URL에서 텍스트와 이미지를 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const textContent = urlParams.get('text');
    const imageUrl = urlParams.get('image');

    if (textContent || imageUrl) {
        createFeed(textContent, imageUrl); // 텍스트와 이미지 url을 기반으로 피드 생성
    }

    // 피드 생성 기능 구현
    function createFeed(text, image) {
        const feedSection = document.getElementById('feed');
        const existingPosts = document.querySelectorAll('.post');
        existingPosts.forEach(post => {
            post.style.display = 'none'; // 새로운 피드가 생성될 때 기존 피드를 숨김
        });

        const newFeed = document.createElement('div');
        newFeed.classList.add('post');

        newFeed.innerHTML = `
            <div class="feed-profile">
                <img src="pic/Feed_profile.png" alt="운동 요정 프로필">
                <p>운동 요정</p>
            </div>
            <img src="${image}" alt="업로드된 이미지">
            <div class="post-icons">
                <i class="fas fa-heart like-button"></i>
                <i class="fas fa-comment"></i>
                <i class="fas fa-share"></i>
            </div>
            <div class="post-info">
                <div class="post-meta">
                    <span class="post-like">좋아요 0개</span>
                    <div class="post-write">
                        <p class="post-name">운동 요정</p>
                        <p>${text}</p>
                    </div>
                    <span class="post-mention">댓글 0개 보기</span>
                    <br>
                    <br>
                    <br>
                    <span class="post-hours">방금 전</span>
                </div>
            </div>
        `;

        feedSection.appendChild(newFeed); // 생성된 새로운 피드를 피드 섹션에 추가

        // 새롭게 추가된 피드에도 좋아요 수 증가 기능 적용
        const newLikeButton = newFeed.querySelector('.like-button');
        let likeCounter = 0;
        newLikeButton.addEventListener('click', function() {
            likeCounter++;
            const likeCount = newFeed.querySelector('.post-like');
            likeCount.textContent = `좋아요 ${likeCounter}개`;
        });
    }