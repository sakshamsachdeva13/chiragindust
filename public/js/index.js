
     let feedback = document.getElementById('con3')
     let about = document.getElementById('con1')
     let pro = document.getElementById('con2')
     let home = document.getElementById('con4')
  
     pro.onclick = function() {

        window.location.replace('/products')
     }
     about.onclick = function() {

         window.location.replace('/about')
     }
    feedback.onclick = function() {

        window.location.replace('/feedback')
    }

    home.onclick = function() {

        window.location.replace('/')
    }
    