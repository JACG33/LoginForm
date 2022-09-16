/**
 * 
 * @param {object} props Objetos de la propiedades que se usaran en la funccion
 * @returns Retorna el formulario que se insertara en la Tag dialog
 */
export function CardBuilder(props) {
  const d = document;
  const $form = d.createElement('form'); $form.id = 'form';
  const $cardDiv = d.createElement('div'); $cardDiv.className = 'card';

  $cardDiv.innerHTML = null

  const $cardDivStep = d.createElement('div'); $cardDivStep.className = 'card__step';

  const $cardSpan = d.createElement('span');
  $cardSpan.innerText = `Paso N°${props.step}`;

  const $cardDivData = d.createElement('div'); $cardDivData.className = 'card__data';

  const $cardDivInputs = d.createElement('div'); $cardDivInputs.className = 'card__btn'

  const $cardInputNext = d.createElement('button');
  $cardInputNext.setAttribute('data-next', props.step);
  $cardInputNext.innerText = 'Siguiente'; $cardInputNext.className = 'btn btn__next';
  $cardInputNext.type = 'button';

  const $cardInputPrev = d.createElement('button');
  $cardInputPrev.setAttribute('data-prev', props.step);
  $cardInputPrev.innerText = 'Anterior'; $cardInputPrev.className = 'btn btn__prev';
  $cardInputPrev.type = 'button';

  const $cardInputReg = d.createElement('button');
  $cardInputReg.setAttribute('data-next', 'send');
  $cardInputReg.innerText = 'Enviar'; $cardInputReg.className = 'btn btn__send';
  $cardInputReg.type = 'button';

  $cardDivStep.append($cardSpan);

  $cardDivData.insertAdjacentHTML('afterbegin', props.str);

  if (props.step == 1) {
    $cardDivInputs.className = 'card__btn flex-jus-end';
    $cardDivInputs.append($cardInputNext);
  }
  if (props.step > 1 && props.step == 2) {
    $cardDivInputs.className = 'card__btn flex-jus-btw';
    $cardDivInputs.append($cardInputPrev);
    $cardDivInputs.append($cardInputNext);
  }
  if (props.step == 3) {
    $cardDivInputs.className = 'card__btn flex-jus-btw';
    $cardDivInputs.append($cardInputPrev);
    $cardDivInputs.append($cardInputReg);
  }

  $cardDiv.append($cardDivStep); $cardDiv.append($cardDivData); $cardDiv.append($cardDivInputs); $form.append($cardDiv);

  return $form;

}