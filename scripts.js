const champions = [
    { name: 'Ahri', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg', description: 'Ahri là một tướng pháp sư với khả năng di chuyển linh hoạt và sát thương lớn.' },
    { name: 'Yasuo', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg', description: 'Yasuo là một kiếm sĩ với khả năng tấn công liên tục và né tránh đòn đánh.' },
    { name: 'Lux', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg', description: 'Lux là một pháp sư với khả năng kiểm soát đám đông và gây sát thương từ xa.' },
];

window.onload = function() {
    const championList = document.getElementById('champion-list');
    champions.forEach(champion => {
        const championDiv = document.createElement('div');
        championDiv.className = 'champion';
        championDiv.innerHTML = `
            <img src="${champion.image}" alt="${champion.name}">
            <h3>${champion.name}</h3>
            <p>${champion.description}</p>
        `;
        championList.appendChild(championDiv);
    });
};