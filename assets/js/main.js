window.addEventListener('load',()=>{document.getElementById('window').style.height = `${window.innerHeight -50}px`;})
window.addEventListener('resize',()=>{document.getElementById('window').style.height = `${window.innerHeight - 50}px`;})

document.getElementById('search-icon').addEventListener('click', 
    ()=>{
        document.getElementById('search-form').style.display = 'flex'
        document.getElementById('search-icon').style.display = 'none'
    }
)