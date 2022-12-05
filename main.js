
let modal = document.getElementById("modal");
let boton = document.getElementById("button");
let cerrar = document.getElementById("cancel")
boton.addEventListener("click",()=>modal.classList.add("scale-100"));
cerrar.addEventListener("click",()=>{
    modal.classList.remove("scale-100");
})
let guardar = document.getElementById("guardar")
let tabla = document.getElementById("tabla");

guardar.addEventListener("click",()=>{
    tabla.innerHTML +=` <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
    <td class="p-4 w-4">
        <div class="flex items-center">
            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="checkbox-table-1" class="sr-only">checkbox</label>
        </div>
    </td>
    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1</td>
    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Desktop PC</td>
    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">UID-Product1</td>
    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">UID-Product1</td>
    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Nombre Producto</td>
    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Ropa</td>    
    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">camisas</td>
    

</tr> `
})
