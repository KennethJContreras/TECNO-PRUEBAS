//import categorias from "../../models/database";
let categorias = [{
    "laptops": {
    "apple": [
      {
      modelo: "MacBook Air M1", 
      precio: 999,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."   
      },
      {
      modelo: "MacBook Pro 13 M1", 
      precio: 1299,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.", 
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
      {
      modelo: "MacBook Pro 16 M1", 
      precio: 2399,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.", 
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
      {
      modelo: "MacBook Air 2020", 
      precio: 899,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares." 
      },
      {
      modelo: "MacBook Pro 13 2020", 
      precio: 1299,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.",
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."
      }
    ],
    "samsung": [
      {
      modelo: "Galaxy Book Flex", 
      precio: 949,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."
      },
      {
      modelo: "Galaxy Book Ion", 
      precio: 999,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."
      },
      {
      modelo: "Galaxy Chromebook", 
      precio: 999,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."
      },
      {
      modelo: "Notebook 9 Pro", 
      precio: 1099,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.",
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."
      },
      {
      modelo: "Notebook 9 Pen", 
      precio: 1399,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.",
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."
      }
    ],
    "huawei": [
      {
      modelo: "MateBook X Pro", 
      precio: 1399,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
      {
      modelo: "MateBook 14", 
      precio: 849,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.",
      },
      {
      modelo: "MateBook D 15", precio: 599,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.",},
      
      {
      modelo: "MateBook 13", precio: 999,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.",},
      
      {
      modelo: "MateBook X", precio: 1299,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."}
    ],
    imagen: "/ordenador-portatil.png",
    id : 1
}},
{
    "celulares": {
        "apple": [
          {
          modelo: "iPhone 13 Pro Max", precio: 1099,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "iPhone 13 Pro", precio: 999,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "iPhone 13", precio: 799,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "iPhone SE (2020)", precio: 399,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "iPhone 11", precio: 599,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          
        ],
        "samsung": [
          {
          modelo: "Galaxy S21 Ultra", precio: 1199,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "Galaxy S21+", precio: 999,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "Galaxy S21", precio: 799, descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.",},
          {
          modelo: "Galaxy Note 20 Ultra", precio: 1299,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "Galaxy A52 5G", precio: 499,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
        ],
        "huawei": [
          {
          modelo: "Mate 40 Pro", precio: 1199,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "P40 Pro", precio: 999,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "P30 Pro", precio: 799,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "Nova 8 SE", precio: 399,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          ,
          {
          modelo: "Y9s", precio: 299, descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          
        ],
        imagen: "/smartphone.png",
        id : 2
      }
},
{
    "consolas": {
        "apple": [
          {
          modelo: "Apple TV 4K", precio: 179,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "Apple Arcade", 
          precio: 4.99,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."
          },
          {
          modelo: "Apple Game Controller", precio: 69,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "Apple TV Remote", precio: 59,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "Apple TV Mount", precio: 19, descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares." },
       ],
        "samsung": [
          {
          modelo: "Samsung Smart TV", precio: 699,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          
          {
          modelo: "Samsung Galaxy Tab S7+", precio: 849,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          
          {
          modelo: "Samsung Galaxy S7", precio: 399,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          
          {
          modelo: "Samsung Galaxy Watch 4", precio: 249,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          
          {
          modelo: "Samsung Galaxy Buds Pro", precio: 1200, descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares." }
          ],
          imagen: "/smartphone.png",
        id : 3
      } 
},
{
    "laptops": {
        "apple": [
          {
          modelo: "MacBook Air M1", 
          precio: 999,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."   
          },
          {
          modelo: "MacBook Pro 13 M1", 
          precio: 1299,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.", 
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "MacBook Pro 16 M1", 
          precio: 2399,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.", 
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "MacBook Air 2020", 
          precio: 899,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares." 
          },
          {
          modelo: "MacBook Pro 13 2020", 
          precio: 1299,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.",
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."
          }
        ],
        "samsung": [
          {
          modelo: "Galaxy Book Flex", 
          precio: 949,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."
          },
          {
          modelo: "Galaxy Book Ion", 
          precio: 999,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."
          },
          {
          modelo: "Galaxy Chromebook", 
          precio: 999,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."
          },
          {
          modelo: "Notebook 9 Pro", 
          precio: 1099,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.",
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."
          },
          {
          modelo: "Notebook 9 Pen", 
          precio: 1399,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.",
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."
          }
        ],
        "huawei": [
          {
          modelo: "MateBook X Pro", 
          precio: 1399,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "MateBook 14", 
          precio: 849,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.",
          },
          {
          modelo: "MateBook D 15", precio: 599,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.",},
          
          {
          modelo: "MateBook 13", precio: 999,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.",},
          
          {
          modelo: "MateBook X", precio: 1299,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."}
        ],
        imagen: "/ordenador-portatil.png",
        id : 1
    }
},
{
    "celulares": {
        "apple": [
          {
          modelo: "iPhone 13 Pro Max", precio: 1099,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "iPhone 13 Pro", precio: 999,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "iPhone 13", precio: 799,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "iPhone SE (2020)", precio: 399,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "iPhone 11", precio: 599,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          
        ],
        "samsung": [
          {
          modelo: "Galaxy S21 Ultra", precio: 1199,
      descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "Galaxy S21+", precio: 999,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "Galaxy S21", precio: 799, descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares.",},
          {
          modelo: "Galaxy Note 20 Ultra", precio: 1299,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "Galaxy A52 5G", precio: 499,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
        ],
        "huawei": [
          {
          modelo: "Mate 40 Pro", precio: 1199,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "P40 Pro", precio: 999,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "P30 Pro", precio: 799,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "Nova 8 SE", precio: 399,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          ,
          {
          modelo: "Y9s", precio: 299, descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          
        ],
        imagen: "/smartphone.png",
        id : 2
    }
},
{
    "consolas": {
        "apple": [
          {
          modelo: "Apple TV 4K", precio: 179,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "Apple Arcade", 
          precio: 4.99,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."
          },
          {
          modelo: "Apple Game Controller", precio: 69,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "Apple TV Remote", precio: 59,
          descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          {
          modelo: "Apple TV Mount", precio: 19, descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares." },
       ],
        "samsung": [
          {
          modelo: "Samsung Smart TV", precio: 699,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          
          {
          modelo: "Samsung Galaxy Tab S7+", precio: 849,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          
          {
          modelo: "Samsung Galaxy S7", precio: 399,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          
          {
          modelo: "Samsung Galaxy Watch 4", precio: 249,descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares."},
          
          {
          modelo: "Samsung Galaxy Buds Pro", precio: 1200, descripcion: "4 pulgadas, procesador intel core i7-1360P de 13 generación 16 GB /512 GB, pantalla Amoled 3K , 120 HZ , lector de huellas dactilares." }
          ],
          imagen: "/smartphone.png",
        id : 3
    } 
}];

function dibujarCategorias() {

}

document.getElementById('ejemplo').style.display = "none";
document.getElementById('productos').style.display = "none";

function irCategoria(){
    document.getElementById('ejemplo').style.display = "block";
    document.getElementById('productos').style.display = "block";
    document.getElementById('productos').style.display = "flex";
    document.getElementById('contenido-1').style.display = "none";
}
function regresarCategorias(){
    document.getElementById('ejemplo').style.display = "none";
    document.getElementById('productos').style.display= "none";
    document.getElementById('contenido-1').style.display = "block";
}
console.log(categorias);
