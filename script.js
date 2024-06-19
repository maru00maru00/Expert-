document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var birthday = document.getElementById('birthday').value;
    var submitButton = document.getElementById('submitButton');

    if (name && birthday) {
        var fortune = getFortune(birthday);
        var fortuneResultDiv = document.getElementById('fortuneResult');
        fortuneResultDiv.innerHTML = `<p>${name}の今年の運勢は ${fortune}です！</p>`;

        submitButton.disabled = true;
        submitButton.classList.add('bg-gray-500', 'cursor-not-allowed');
        submitButton.classList.remove('bg-primary', 'hover:bg-primary');
    } else {
        alert('名前と誕生日を入力してください。');
    }
});

function getFortune(birthday) {
    var fortunes = [
        "大吉",
        "中吉",
        "小吉",
        "吉",
        "末吉",
        "凶"
    ];

    var date = new Date(birthday);
    var day = date.getDate();
    var month = date.getMonth() + 1;

    var index = (day + month) % fortunes.length;
    return fortunes[index];
}
