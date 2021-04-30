"use strict";

function UsuariosComunes(){

   /// FORM CRUD COMPONENT
   function formCRUDComponent( config = {}, data = {} ) {
      return `
      <form class="formS1">
         <div class="formS1fielsSection">
            <h3 class="formS1fielsSectionHeader">Datos Generales</h3>
            <div class="formS1fielsWrapper">
               <input type="hidden" name="id" value="${ checkValue(data.id) }">
               <input type="hidden" name="nombreCompleto" value="${ checkValue(data.nombreCompleto) }">
               <div class="fW"><p>Nombre(s)</p><input type="text" name="nombre" placeholder="" value="${ data.nombre || nombreRandom() }" required></div>
               <div class="fW"><p>Apellido Paterno</p><input type="text" name="apellidoPaterno" placeholder="" value="${ data.apellidoPaterno || apellidoRandom() }"></div>
               <div class="fW"><p>Apellido Materno</p><input type="text" name="apellidoMaterno" placeholder="" value="${ data.apellidoMaterno || apellidoRandom() }"></div>
               <div class="fW"><p>Fecha Nacimiento</p><input type="date" name="fechaNacimiento" placeholder="Año-Mes-Día" value="${ data.fechaNacimiento || afechaNacimientoRandom() }"></div>
               <div class="fW"><p>Edad</p><input type="number" name="edad" placeholder="" value="${ checkValue(data.edad) }"></div>
               <div class="fW"><p>Correo</p><input type="mail" name="correo" placeholder="" value="${ data.correo || crearCorreo() }"></div>
               <div class="fW"><p>Número Celular</p><input type="tel" name="numeroCelular" placeholder="10 dígitos" value="${ data.numeroCelular || numerosRandom(10) }"></div>
               <div class="fW">
                  <p>Sexo</p>
                  <select name="sexo">
                     <option value="0" ${ data.sexo  == 0 || data.sexo == ""  || data.sexo == null ? "selected" : "" }>No Especificado</option>
                     <option value="1" ${ data.sexo  == 1 ? "selected" : "" }>Masculino</option>
                     <option value="2" ${ data.sexo  == 2 ? "selected" : "" }>Femenido</option>
                     <option value="3" ${ data.sexo  == 3 ? "selected" : "" }>No Binario</option>
                     <option value="4" ${ data.sexo  == 4 ? "selected" : "" }>Otro</option>
                  </select>
               </div>
               <div class="fW"><p>CURP</p><input type="text" name="curp" placeholder="" value="${ data.curp || CURPRandom() }"></div>
            </div>
         </div>
         <div class="formS1fielsSection">
            <h3 class="formS1fielsSectionHeader">Dirección</h3>
            <div class="formS1fielsWrapper">
               <div class="fW"><p>Número Casa</p><input type="number" name="numeroCasa" placeholder="" value="${ data.numeroCasa || numerosRandom(10) }"></div>
               <div class="fW"><p>Calle</p><input type="text" name="calle" placeholder="" value="${ data.calle || direcciónRandom() }"></div>
               <div class="fW"><p>Número Exterior</p><input type="text" name="numeroExterior" placeholder="" value="${ data.numeroExterior || numerosRandom(2) }"></div>
               <div class="fW"><p>Número Interior (Opcional)</p><input type="text" name="numeroInterior" placeholder="" value="${ checkValue(data.numeroInterior) }"></div>
               <div class="fW"><p>Colonia</p><input type="text" name="colonia" placeholder="" value="${ data.colonia || direcciónRandom() }"></div>
               <div class="fW">
                  <p>Estado</p>
                  <select name="estado">
                     <option value="0"  ${ data.estado  == 0 || data.estado == "" || data.estado == null ? "selected" : "" }>No especificado</option>
                     <option value="1"  ${ data.estado == 1 ? "selected" : "" } >Aguascalientes</option>
                     <option value="2"  ${ data.estado == 2 ? "selected" : "" } >Baja California</option>
                     <option value="3"  ${ data.estado == 3 ? "selected" : "" } >Baja California Sur</option>
                     <option value="4"  ${ data.estado == 4 ? "selected" : "" } >Campeche</option>
                     <option value="5"  ${ data.estado == 5 ? "selected" : "" } >Chiapas</option>
                     <option value="6"  ${ data.estado == 6 ? "selected" : "" } >Chihuahua</option>
                     <option value="7"  ${ data.estado == 7 ? "selected" : "" } >Ciudad de México</option>
                     <option value="8"  ${ data.estado == 8 ? "selected" : "" } >Coahuila</option>
                     <option value="9"  ${ data.estado == 9 ? "selected" : "" } >Colima</option>
                     <option value="10" ${ data.estado == 10 ? "selected" : "" } >Durango</option>
                     <option value="11" ${ data.estado == 11 ? "selected" : "" } >Estado de México</option>
                     <option value="12" ${ data.estado == 12 ? "selected" : "" } >Guanajuato</option>
                     <option value="13" ${ data.estado == 13 ? "selected" : "" } >Guerrero</option>
                     <option value="14" ${ data.estado == 14 ? "selected" : "" } >Hidalgo</option>
                     <option value="15" ${ data.estado == 15 ? "selected" : "" } >Jalisco</option>
                     <option value="16" ${ data.estado == 16 ? "selected" : "" } >Michoacán</option>
                     <option value="17" ${ data.estado == 17 ? "selected" : "" } >Morelos</option>
                     <option value="18" ${ data.estado == 18 ? "selected" : "" } >Nayarit</option>
                     <option value="19" ${ data.estado == 19 ? "selected" : "" } >Nuevo León</option>
                     <option value="20" ${ data.estado == 20 ? "selected" : "" } >Oaxaca</option>
                     <option value="21" ${ data.estado == 21 ? "selected" : "" } >Puebla</option>
                     <option value="22" ${ data.estado == 22 ? "selected" : "" } >Querétaro</option>
                     <option value="23" ${ data.estado == 23 ? "selected" : "" } >Quintana Roo</option>
                     <option value="24" ${ data.estado == 24 ? "selected" : "" } >San Luis Potosí</option>
                     <option value="25" ${ data.estado == 25 ? "selected" : "" } >Sinaloa</option>
                     <option value="26" ${ data.estado == 26 ? "selected" : "" } >Sonora</option>
                     <option value="27" ${ data.estado == 27 ? "selected" : "" } >Tabasco</option>
                     <option value="28" ${ data.estado == 28 ? "selected" : "" } >Tamaulipas</option>
                     <option value="29" ${ data.estado == 29 ? "selected" : "" } >Tlaxcala</option>
                     <option value="30" ${ data.estado == 30 ? "selected" : "" } >Veracruz</option>
                     <option value="31" ${ data.estado == 31 ? "selected" : "" } >Yucatán</option>
                     <option value="32" ${ data.estado == 32 ? "selected" : "" } >Zacatecas</option>
                  </select>
               </div>
               <div class="fW"><p>Código Postal</p><input type="number" name="codigoPostal" placeholder="" value="${ data.codigoPostal || numerosRandom(5) }"></div>
            </div>
         </div>
         <div class="messageForm hidden"></div>
         <div class="btnsActionsForm">
            <button class="btnCreateForm ${ config.create ? "" : "hidden" }" type="submit">Registar</button>
            <button class="btnUpdateForm ${ config.update ? "" : "hidden" }" type="submit">Guardar Cambios</button>
            <button class="btnDeleteForm ${ config.delete ? "" : "hidden" }" type="submit">Eliminar</button>
         </div>
      </form>`
   }

   /// LIST RESULTS ITEM COMPONENT
   function resultListItemComponent( data = {} ){
      return `
         <div class="resultadoBusquedaWrapper">
            <div class="resultadoNombreCampo">Nombre</div>
            <div class="resultadoValor">${data.nombre} ${data.apellidoPaterno} ${data.apellidoMaterno}</div>
         </div>
         <div class="resultadoBusquedaWrapper">
            <div class="resultadoNombreCampo">Correo</div>
            <div class="resultadoValor">${data.correo}</div>
         </div>
         <div class="resultadoBusquedaWrapper">
            <div class="resultadoNombreCampo">Número Celular</div>
            <div class="resultadoValor">${data.numeroCelular}</div>
         </div>
         <div class="resultadoBusquedaWrapper">
            <div class="resultadoNombreCampo">Sexo</div>
            <div class="resultadoValor">
               ${ data.sexo  == 0 || data.sexo == ""  || data.sexo == null ? "No Especificado" : "" }
               ${ data.sexo == 1 ? 'Masculino' : ''}
               ${ data.sexo == 2 ? 'Femenino' : ''}
               ${ data.sexo == 3 ? 'No Binario' : ''}
               ${ data.sexo == 4 ? 'Otro' : ''}
            </div>
         </div>
         <div class="resultadoBusquedaWrapper">
         <div class="resultadoNombreCampo">CURP</div>
         <div class="resultadoValor">${data.curp}</div>
      </div>
         <div class="resultadoBusquedaWrapper">
            <div class="resultadoNombreCampo">Código Postal</div>
            <div class="resultadoValor">${data.codigoPostal}</div>
         </div>
      `
   }

   /// GET FORM VALUES
   function getFormValues( formElement ){
      let formElements = formElement.elements
      let data = {}

      /// Add user data
      data.nombreUsuario = localStorage.getItem("nombreUsuario")
      data.password = localStorage.getItem("password")
      /// Get form field values and put into data
      for (let index = 0; index < formElements.length; index++) {
         const element = formElements[index]
         data[element.name] = element.value
      }
      return data
   }

   /// DEFINE #ID SECTION CONTAINER, AND URL API END POINTS
   const containerSectionID = d.querySelector("#usuariosComunes"),
         urlCreate = urlBase + '/usuarioComun/create.php',
         urlReadSingle = urlBase + '/usuarioComun/read_single.php',
         urlUpdate = urlBase + '/usuarioComun/update.php',
         urlDelete = urlBase + '/usuarioComun/delete.php'

   /// FORM CONTAINERS
   const modeloBuscar = containerSectionID.querySelector(".modeloBuscar"),
         modeloActualizar = containerSectionID.querySelector(".modeloActualizar"),
         modeloActualizarFormWrapper = modeloActualizar.querySelector(".formWrapper"),
         modeloRegistrar = containerSectionID.querySelector(".modeloRegistrar"),
         modeloRegistrarformWrapper = modeloRegistrar.querySelector(".formWrapper")

   /// MAIN FORM FUCTION
   function formModelCRUD( config = {}, data = {}, formWrapper ){
      /// Insert form component in formWrapper with new data, or empty when accion is registrar
      formWrapper.innerHTML = formCRUDComponent( config, data )
      ////  Get the form buttons and message elements
      let formElement = formWrapper.querySelector(".formS1"),
         btnCreateForm = formElement.querySelector(".btnCreateForm"),
         btnUpdate = formElement.querySelector(".btnUpdateForm"),
         btnDelete = formElement.querySelector(".btnDeleteForm"),
         messageForm = formElement.querySelector(".messageForm")

      /// Define action [ create, update, delete ] when submit form trigger
      let accionTypeURL = "",
         menssageConfirm = ""

      /// Prevent submit form with enter key
      window.addEventListener("keydown", function(event){ if(event.keyCode == 13) { event.preventDefault(); return false; } })
      /// Send and get data from API endpoint URL
      function callAPIURL(url){
         messageForm.classList.remove("hidden", "error", "success", "show")
         messageForm.innerHTML = "Procesando los datos..."
         APIendPointData( accionTypeURL, getFormValues(formElement) )
         .then(data => {
            messageForm.innerHTML = data.message /// display server response menssage
            c(data)
            if(data.error){
               messageForm.classList.add("error", "show")
               messageForm.innerHTML += " " + data.error.errorInfo[2]
            }else{
               messageForm.classList.add("success", "show")
            }
         })
      }

      /// Form send data to callAPIURL function
      formElement.addEventListener("submit", function(e){
         e.preventDefault()
         // c(accionTypeURL)
         async function asyncCall() {
            if( await alertModal({ messageText: menssageConfirm, btnOKText: 'Confirmar', btnCancelText:'Cancelar' }) ){
               callAPIURL( accionTypeURL )
            }
         }asyncCall()
      })

      /// CRUD Alumnos form buttons actions
      btnCreateForm.addEventListener("click", function(e){
         accionTypeURL = urlCreate
         menssageConfirm = '<strong>Confirmar el registro</strong> en la base de datos'
      })

      btnUpdate.addEventListener("click", function(e){
         accionTypeURL = urlUpdate
         menssageConfirm = 'Confirmar <strong>guardar cambios</strong> del registro en la base de datos'
      })

      btnDelete.addEventListener("click", function(e){
         accionTypeURL = urlDelete
         menssageConfirm = 'Confirmar <strong>borrar</strong> el registro de la base de datos'
      })

      /// Calculate age
      formElement.fechaNacimiento.addEventListener("change", function(){
         formElement.edad.value = getEdad(String(formElement.fechaNacimiento.value))
      })

      

   } /// END FORM


   /// REGISTRAR
   formModelCRUD( { create : true, update : false, delete : false }, { }, modeloRegistrarformWrapper ) //! cambiar config a "actionType = create, update"


   /// LISTAR RESULTADOS DE BÚSQUEDA
   const listaResultadosWrapper = containerSectionID.querySelector(".listaResultadosWrapper")
   let resultados = d.createElement("div")
   /// Close Actualizar form window
   modeloActualizar.querySelector(".btnCloseForm").addEventListener("click", function(){
      modeloActualizar.classList.add("hidden")
      listaResultadosWrapper.innerHTML = ""
      modeloBuscar.querySelector(".messageForm").classList.add("hidden")
   })

   function desplegarResultados( data = {} ){
      resultados.innerHTML = ""
      resultados.classList.remove("show")
      /// Iterate in data items and create element list and add event to view result in CRUD component
      data.forEach( function(itemData){
         let resultado = d.createElement("div")
         resultado.setAttribute("data-id", itemData.id)
         resultado.classList.add("resultadoBusqueda")
         resultado.innerHTML = resultListItemComponent( itemData )

         /// Open Actualizar form window
         resultado.addEventListener('click', function(){
            formModelCRUD( { create : false, update : true, delete : true }, itemData, modeloActualizarFormWrapper, resultado )
            modeloActualizar.classList.remove("hidden")
         })

         resultados.append(resultado)
      })
      resultados.classList.add("show")
      listaResultadosWrapper.append(resultados)
   }

   /// BUSCAR ALUMNOS (Get data from read_single.php)
   const formBuscar = containerSectionID.querySelector(".formBuscar")
   formBuscar.addEventListener("submit", function(e){
      e.preventDefault()
      const messageForm = this.querySelector(".messageForm")
      /// set Query value
      let query = JSON.parse( `{
         "nombreUsuario" : "${ localStorage.getItem("nombreUsuario") }",
         "password" : "${ localStorage.getItem("password") }",
         "${ formBuscar.queryKey.value }" : "${ formBuscar.queryValue.value }"
      }`)
      messageForm.classList.remove("hidden", "error", "success", "show")
      messageForm.innerHTML = "Consultando base de datos..."
      /// get end point data url with query parameters
      APIendPointData( urlReadSingle, query )
      .then(data => {
         /// display server response menssage
         messageForm.innerHTML = `${data.message} Se encontraron <strong>${data.numeroResultados}</strong> resultado(s) para <strong>${formBuscar.queryValue.value}</strong>`
         /// delete previous content
         borrarContenido( listaResultadosWrapper )
         // c(data)
         if(data.error){
            messageForm.classList.add("error", "show")
         }else{
            if( data.data ){
               /// Display data in result item list
               desplegarResultados(data.data)
               messageForm.classList.add("success", "show")
            }
         }
      })
   })

   // c("Alumnos init 9:59")
}