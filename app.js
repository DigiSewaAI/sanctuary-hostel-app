// Authentication System
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // In real implementation, use proper authentication
    if (username === "admin" && password === "SecurePass123!") {
        localStorage.setItem('authToken', 'admin');
        showDashboard();
    } else if (username === "user" && password === "UserPass123!") {
        localStorage.setItem('authToken', 'user');
        showDashboard();
    } else {
        alert('Invalid credentials');
    }
}

function logout() {
    localStorage.removeItem('authToken');
    window.location.reload();
}

// Dashboard Initialization
function showDashboard() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('app-container').style.display = 'grid';
    checkUserRole();
    loadAllData();
}

function checkUserRole() {
    if (localStorage.getItem('authToken') === 'user') {
        document.querySelectorAll('.master-only').forEach(el => el.style.display = 'none');
    }
}

// Data Management
function loadAllData() {
    loadRooms();
    loadRules();
    loadGallery();
}

// Room Management
function openRoomModal(action) {
    // Modal implementation
}

function saveRoom() {
    // Save to localStorage
}

// Photo Gallery
document.getElementById('photoUpload').addEventListener('change', function(e) {
    const files = Array.from(e.target.files);
    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(event) {
            const gallery = document.getElementById('gallery');
            gallery.innerHTML += `
                <div class="gallery-item">
                    <img src="${event.target.result}" alt="Hostel photo">
                    <button class="icon-btn danger" onclick="deletePhoto(this)"><i class="fas fa-trash"></i></button>
                </div>
            `;
        }
        reader.readAsDataURL(file);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('authToken')) {
        showDashboard();
    }
});