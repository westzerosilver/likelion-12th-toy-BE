let selectedRegion = "전체";
let selectedSport = "전체";

// 운동 종목 모달 열기
function openSportModal() {
  document.getElementById("sportModal").style.display = "block";
}

// 운동 종목 모달 닫기
function closeSportModal() {
  document.getElementById("sportModal").style.display = "none";
}

// 지역 모달 열기
function openRegionModal() {
  document.getElementById("regionModal").style.display = "block";
}

// 지역 모달 닫기
function closeRegionModal() {
  document.getElementById("regionModal").style.display = "none";
}

// 지역 버튼 클릭 시 선택된 상태로 표시
document.querySelectorAll('.regions button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.regions button').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedRegion = button.getAttribute('data-region');
  });
});

// 종목 버튼 클릭 시 선택된 상태로 표시
document.querySelectorAll('.sports button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.sports button').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedSport = button.getAttribute('data-category');
  });
});

// 초기화 버튼 클릭 시
function resetRegion() {
  selectedRegion = "전체";
  document.querySelectorAll('.regions button').forEach(btn => btn.classList.remove('selected'));
  document.querySelector('[data-region="전체"]').classList.add('selected');
  applyFilters();
}

function resetSport() {
  selectedSport = "전체";
  document.querySelectorAll('.sports button').forEach(btn => btn.classList.remove('selected'));
  document.querySelector('[data-category="전체"]').classList.add('selected');
  applyFilters();
}

// 페이지 로드 시 초기 카드 표시
document.addEventListener('DOMContentLoaded', () => {
  applyFilters();
});

// 현재 URL 경로를 가져옵니다.
const currentPath = window.location.pathname;

// 모든 네비게이션 링크를 선택합니다.
const navLinks = document.querySelectorAll('nav ul li a');

// 각 링크를 순회하며 현재 경로와 일치하는 링크에 active 클래스를 추가합니다.
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});

document.addEventListener('DOMContentLoaded', () => {
applyFilters();
});

function applyFilters() {
const crewCardsContainer = document.getElementById('crew-cards');
crewCardsContainer.innerHTML = ''; // 기존 카드 제거

crewData.forEach(crew => {
  if ((selectedRegion === "전체" || crew.region === selectedRegion) &&
      (selectedSport === "전체" || crew.category === selectedSport)) {

    const ddayClass = crew.dday <= 14 ? 'dday-orange' : 'dday-black';
    const borderClass = crew.dday == 1 ? 'border-mint' : '';

    const crewCard = document.createElement('div');
    crewCard.className = 'crew-card';
    crewCard.innerHTML = `
      <img src="${crew.image}" alt="${crew.category}" />
      <div class="card-content ${borderClass}">
        <div class="category-d-day">
          <span class="category">${crew.category}</span> 
          <span class="d-day ${ddayClass}">D-${crew.dday}</span>
        </div>
        <h3>${crew.title}</h3>
        <a href="${crew.link}">상세보기</a>
      </div>
    `;
    crewCardsContainer.appendChild(crewCard);
  }
});

document.getElementById('region-button').textContent = `지역 : ${selectedRegion}`; // 지역 버튼 텍스트 업데이트
document.getElementById('sport-button').textContent = `운동 종목 : ${selectedSport}`; // 운동 종목 버튼 텍스트 업데이트
closeRegionModal();
closeSportModal();
}