document.querySelector(".User-icon").addEventListener('click', () =>{
    const userBox = document.querySelector(".user-icon-box");

    if(userBox.style.display === "none"){
        userBox.style.display = "flex";
    }else{
        userBox.style.display ="none"
    }
});

document.querySelector(".User-icon").addEventListener('mouseover', () =>{
    const userBox = document.querySelector(".user-icon-box");
    userBox.style.display = "flex";
});

document.querySelector(".User-icon").addEventListener('mouseleave', () =>{
    const userBox = document.querySelector(".user-icon-box");
    userBox.style.display = "none";
});


document.querySelector(".product-btn").addEventListener('click', () =>{
    const userBox = document.querySelector(".products-box");

    if(userBox.style.display === "none"){
        userBox.style.display = "flex";
    }else{
        userBox.style.display ="none"
    }
});

document.querySelector(".product-btn").addEventListener('mouseover', () =>{
    const userBox = document.querySelector(".products-box");
    userBox.style.display = "flex";
});

document.querySelector(".product-btn").addEventListener('mouseleave', () =>{
    const userBox = document.querySelector(".products-box");
    userBox.style.display = "none";
});

document.querySelector(".otherlink-btn").addEventListener('click', () =>{
    const userBox = document.querySelector(".otherlink-box");

    if(userBox.style.display === "none"){
        userBox.style.display = "flex";
    }else{
        userBox.style.display ="none"
    }
});

document.querySelector(".otherlink-btn").addEventListener('mouseover', () =>{
    const userBox = document.querySelector(".otherlink-box");
    userBox.style.display = "flex";
});

document.querySelector(".otherlink-btn").addEventListener('mouseleave', () =>{
    const userBox = document.querySelector(".otherlink-box");
    userBox.style.display = "none";
});