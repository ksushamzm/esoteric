const form = document.getElementById('form');
const info = document.getElementById ('info');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name_surname = document.querySelector('[name="name_surname"]');
    const date = document.querySelector('[name="date"]');
    const time = document.querySelector('[name="time"]');
    const id = document.querySelector('[name="id"]');
    const country = document.querySelector('[name="country"]');
    const city = document.querySelector('[name="city"]');
    const place = document.querySelector('[name="place"]');

    const student = {
        "name": name_surname.value,
        "date": date.value,
        "time": time.value,
        "time": time.value,
        "id": id.value,
        "country": country.value,
        "city": city.value,
        "place": place.value,
      };

      let json = JSON.stringify(student);

      console.log(json);
    
      const finalElement = document.getElementById("final");
    
      function finalOutput (obj) {
        let outputString = "<p>";
        for (const value of Object.entries(obj)) {
          outputString += value[1] + "<p>";
        }
        outputString += "<p>";
        return outputString;
        
      }
    
      finalElement.innerHTML = finalOutput(student);

    })
    ;


    const open = document.getElementById('open');

    function openPage(){
      window.open("Ui.html");
    }
    
    open.addEventListener('click', openPage);
    


    const accordeonElement = document.getElementById('accordeon'); 

    function openAccordeonPage(){ 
        window.open("accordeon.html");
    }
    
    accordeonElement.addEventListener('click', openAccordeonPage); 