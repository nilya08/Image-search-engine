let clientId = "ZH89Sc3BkncSW4Pnc7kdwOjBiL4K2mVnM__9rxNF6Cg"
const searchForm = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const seachResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;

async function searchImage(){
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${clientId}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        seachResult.appendChild(imageLink);

    });
    showMoreBtn.style.display = "block";

    
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImage();
})