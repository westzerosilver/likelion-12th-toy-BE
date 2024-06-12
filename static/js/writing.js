

    function selectFiles() {
        document.getElementById('fileInput').click();
    }

    document.getElementById('upload-section').addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });

    document.getElementById('upload-section').adddocument.getElementById('fileInput').click()EventListener('dragleave', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
    });

    document.getElementById('upload-section').addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    document.getElementById('fileInput').addEventListener('change', function(e) {
        const files = e.target.files;
        handleFiles(files);
    });

    function handleFiles(files) {
        for (const file of files) {
            console.log('파일 이름:', file.name);
            console.log('파일 크기:', file.size);
            console.log('파일 유형:', file.type);
        }
    }

// create.js
document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.querySelector('input[type="file"]');
    const previewElement = document.getElementById('image-preview');
    const selectedElement = document.getElementById('image-selected');

    inputElement.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                previewElement.style.display = 'none';
                selectedElement.src = event.target.result;
                selectedElement.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            previewElement.style.display = 'block';
            selectedElement.style.display = 'none';
            selectedElement.src = '';
        }
    });
});


//function uploadContent() {
//    const textContent = document.getElementById('textInput').value;
//    const files = document.getElementById('fileInput').files;
//
//    if (files.length > 0) {
//        const reader = new FileReader();
//        reader.onload = function(event) {
//            const base64String = event.target.result;
//            window.location.href = 'feed.html?text=' + encodeURIComponent(textContent) + '&image=' + encodeURIComponent(base64String);
//        };
//        reader.readAsDataURL(files[0]);
//    } else {
//        window.location.href = 'feed.html?text=' + encodeURIComponent(textContent);
//    }
//}


// create.js
document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.querySelector('input[type="file"]');
    const previewElement = document.getElementById('image-preview');

    inputElement.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                previewElement.src = event.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            previewElement.src = ""; // 파일이 선택되지 않은 경우 미리보기 초기화
        }
    });
});
