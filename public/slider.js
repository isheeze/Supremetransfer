function slider(){
    let slides = document.querySelectorAll('.txtSlider > div')
    if(slides.length){
      let i = 0;
      setInterval(()=>{
        console.log('=> ',slides[i])
          slides[i].classList.add("hide")
          i = (i + 1) % slides.length
          slides[i].classList.remove("hide")
      }, 1000)
    }
  }

  slider()