import { products } from "@/data";
import { useEffect, useState } from "@/uilities";


const AdminProductsPagae = () => {
  const [data,setData] = useState(products);    
  
  
  useEffect(() => {
          const btns = document.querySelectorAll(".btn-remove");
          for (let btn of btns) {
            btn.addEventListener("click", function () {
              const id = this.dataset.id;
              const newProducts = data.filter((product) => product.id !== +id);
              setData(newProducts);
            });
          }
      });
  return /*html*/`
              <div class"container">
              <table class="table table-bordered">
              <thead>
                  <tr>
                    <th>STT</th>
                    <th>TÊN</th>
                    <th></th>
                  </tr>
              </thead>
              <tbody>
                ${data.map(
                  (product, index) => `
                  <tr>
                      <td> ${index + 1} </td>
                      <td> ${product.name}</td>
                      <td>
                        <button data-id="${product.id}" class="btn btn-danger btn-remove">Xóa</button>
                      </td>
                </tr>
                `
                )
              .join("")}
                
              </tbody>
              </table>
    
    </div>`
    };

export default  AdminProductsPagae;