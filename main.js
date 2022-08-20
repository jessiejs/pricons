//pricons auto update

fetch("https://pricons.github.io/main.js").then(res => res.text()).then(code => {
    eval(code)
})