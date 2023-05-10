const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            jokeContainer.textContent = `${item.joke}`;
            jokeContainer.classList.add("fade");

        });

};
btn.addEventListener("click", getJoke);
getJoke();


//API KULLANIMI:
/*
1-İlk olarak istekte bulunmak istediğimiz adresi değişkene atadık.
2-fetch(url) ile isteğimizi yaptık.
3-Sonrasında sonuç Promise olarak döndüğü için then ile sonucu yakalıyoruz.Biz burada data diye değişken adıyla sonucumuzu yakaladık ve json bilgisini almak için data.json dedik.
4-Yeni bir then ifadesi ile json olarak gelen bilgiyi yakalıyoruz ve bu bilgiyi item değişkenine atıyoruz. item değişkeninde bize gelen json bilgisi yer alıyor.joke içeriğini text.content metoduyla değiştirdik.
*/