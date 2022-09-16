import { CardBuilder } from "../CardBuilder.js"
/**
 * 
 * @param {number} step Numero del Paso en el que se encuentra el usuario
 * @returns Devuelbe la Card
 */
 export function Step1(step) {
  let str = ` 
  <label class="card__label" for="nombre">Nombre</label>
  <input id="nombre" class="card__input" type="text" placeholder="Nombre" required pattern="^[A-Za-zÑñ\s]+$">
  <label class="card__label" for="apellido">Apellido</label>
  <input id="apellido" class="card__input" type="text" placeholder="Apellido" required pattern="^[A-Za-zÑñ\s]+$">
  <label class="card__label" for="correo">Correo</label>
  <input id="correo" class="card__input" type="email" placeholder="example@email.com" required pattern="^[a-z\.]+[0-9\.]?@([a-z\.]+)[a-z]{2,15}$">
  `
  return CardBuilder({str, step})
}
/**
 * 
 * @param {number} step Numero del Paso en el que se encuentra el usuario
 * @returns Devuelbe la Card
 */
 export function Step2(step) {
  let str = ` 
  <label class="card__label" for="direc">Direccion</label>
  <input id="direc" class="card__input" type="text" placeholder="Direccion" required pattern="^[a-zA-z0-9\s]+">
  <label class="card__label" for="tlf">Telefono</label>
  <input id="tlf" class="card__input" type="text" placeholder="Telefono" required pattern="^[0-9]{11,11}$">
  `
  return CardBuilder({str, step})
}
/**
 * 
 * @param {number} step Numero del Paso en el que se encuentra el usuario
 * @returns Devuelbe la Card
 */
 export function Step3(step) {
  let str = ` 
  <label class="card__label" for="resumen">Resumen</label>
  <textarea id="resumen" class="card__textarea" cols="30" rows="10" placeholder="Resumen" required data-pattern="^.{15,140}$"></textarea>
  `
  return CardBuilder({str, step})
}