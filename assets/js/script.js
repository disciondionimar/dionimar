
let backtotopHandler =() =>{
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

}


let showSideBarBtn = document.querySelector("#showSidebar")

let showSidebarHandler = () => {
    document.querySelector("#sidebar").style.display = "flex"
    document.querySelector("#hideSidebar").style.display = "block"
    document.querySelector("#showSidebar").style.display = "none"
}

let hideSidebarHandler = () => {
    document.querySelector("#sidebar").style.display = "none"
    document.querySelector("#hideSidebar").style.display = "none"
    document.querySelector("#showSidebar").style.display = "block"
}