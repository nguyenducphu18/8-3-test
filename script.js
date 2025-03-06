const nameMapping = {
    'TranMo': 'Trần Mơ',
    'NguyenThuy': 'Nguyễn Thúy',
    'NguyenNgoc': 'Nguyễn Ngọc',
    'ThuyLinh': 'Thùy Linh',
    'NhatLinh': 'Nhật Linh',
    'KhanhHuyen': 'Khánh Huyền',
    'KhanhLy': 'Khánh Ly',
    'ThuyHang': 'Thúy Hằng',
    'ThuyDung': 'Thùy Dung'
};

const wishes = [
    `Nhân ngày Quốc tế Phụ nữ 8/3, chúc chị [name] luôn xinh đẹp, hạnh phúc và thành công trong cuộc sống. Cảm ơn vì những đóng góp quý báu của chị cho công ty Euro Santé của chúng ta!`,
    `Chúc mừng ngày 8/3! Chị [name] ơi, chúc chị luôn tươi trẻ, năng động và đạt được nhiều thành tựu trong sự nghiệp. Cảm ơn vì sự tận tâm và nỗ lực không ngừng của chị!`,
    `Gửi đến chị [name] lời chúc mừng nhân ngày 8/3! Chúc chị mãi xinh đẹp, tràn đầy năng lượng và gặt hái nhiều thành công. Euro Santé rất may mắn khi có chị!`
];

function getNameFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    return nameParam && nameMapping[nameParam] ? nameMapping[nameParam] : null;
}

function getRandomWish(name) {
    const wishIndex = Math.floor(Math.random() * wishes.length);
    return wishes[wishIndex].replace('[name]', name);
}

function generateLinkList() {
    const linkList = document.getElementById('link-list');
    if (!linkList) return;
    const baseUrl = window.location.href.split('?')[0];
    let linksHTML = '';
    Object.entries(nameMapping).forEach(([key, value]) => {
        const fullUrl = `${baseUrl}?name=${key}`;
        linksHTML += `<div class="link-item"><a href="${fullUrl}" class="link-button"> ${value}</a></div>`;
    });
    linkList.innerHTML = linksHTML;
}

function generatePersonList() {
    const personList = document.querySelector('.person-list');
    if (!personList) return;
    const baseUrl = window.location.href.split('?')[0];
    let personsHTML = '';
    Object.entries(nameMapping).forEach(([key, value]) => {
        const fullUrl = `${baseUrl}?name=${key}`;
        personsHTML += `<a href="${fullUrl}" class="person-button"> ${value}</a>`;
    });
    personList.innerHTML = personsHTML;
}

window.onload = function() {
    const name = getNameFromUrl();
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    if (name) {
        document.getElementById('home-page').style.display = 'none';
        document.getElementById('wish-card').style.display = 'block';
        document.getElementById('person-name').textContent = name;
        document.getElementById('wish-text').textContent = getRandomWish(name);
    } else if (nameParam) {
        document.getElementById('home-page').style.display = 'none';
        document.getElementById('error-card').style.display = 'block';
    } else {
        generateLinkList();
        generatePersonList();
    }
};