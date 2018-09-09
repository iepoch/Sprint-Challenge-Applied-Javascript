class Carousel {
    constructor(link){
       
       this.element = link;
       this.leftButton = this.element.querySelector(".left-button");
       this.rightButton = this.element.querySelector(".right-button");
       this.images = this.element.querySelectorAll(".img");
         
       this.images[0].classList.add('show');
         


       this.leftButton.addEventListener('click', () => {
           this.toggleLeft();
       });

       this.rightButton.addEventListener('click', () => {
          this.toggleRight();
       })

    }
    toggleLeft(){
     this.images = document.querySelectorAll('.img');
     this.images = Array.from(this.images.map((img) => {
         img.classList.remove('show')}));
       
    }
    toggleRight() {
        this.images = document.querySelectorAll('.img');
        this.images = Array.from(this.images.map((img) => {
            img.classList.remove('show')}));
   
   
   
    }



}

let carousel = document.querySelectorAll('.carousel');
carousel = Array.from(carousel).map((link) => new Carousel(link));

// carousel[0].style.display = null;
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/