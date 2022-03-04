function transiteIcon(){
    let icon = document.getElementsByClassName('bi-arrow-right')
    setInterval(()=>{
        icon[0].classList.toggle('me-4')
    }, 800)
}

transiteIcon()
