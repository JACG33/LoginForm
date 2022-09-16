
export function App() {
  const d = document
  const $ctaBtn = d.getElementById('ctaBtn');
  const $floatModal = d.getElementById('floatModal')
  let step = 1
  let data = [[], [], []];
  let val = false

  function resetAll() {
    $floatModal.innerHTML = null
    step = 1
    data = [[], [], []];
  }

  function existData(stepIndex) {
    const $inputs = d.querySelectorAll('form [required]')
    let i = 0
    $inputs.forEach(input => {
      input.value = data[stepIndex - 1][i]
      i++
    })
  }

  function saveDataArr() {
    const $inputs = d.querySelectorAll('form [required]')
    let i = 0
    $inputs.forEach(input => {
      input.value == '' ? [input.classList.add('error__inputs'), val = false] : ''
      if (val) {
        data[step - 1][i] = input.value;
        i++
      }
    })
  }

  d.addEventListener('keyup', e => {
    let target = e.target
    if (target.matches('form [required]')) {
      let value = target.value,
        pattern = target.pattern || target.dataset.pattern,
        regEx = new RegExp(pattern);

      if (!regEx.test(value)) {
        val = false
        target.classList.add('error__inputs')
      } else {
        val = true
        target.classList.remove('error__inputs')
      }
    }
  })

  $floatModal.addEventListener('close', () => {
    resetAll()
  })

  $ctaBtn.addEventListener('click', () => {
    $floatModal.showModal()
    import("./components/Steps/Steps.js")
      .then(res => {
        $floatModal.innerHTML = null
        $floatModal.append(res.Step1(step))
      })
  })

  d.addEventListener('click', e => {
    let target = e.target
    // Next btns
    if (target.dataset.next == 1) {
      saveDataArr()
      if (val) {
        step++
        import("./components/Steps/Steps.js")
          .then(res => {
            $floatModal.innerHTML = null
            $floatModal.append(res.Step2(step))
            if (data[step - 1].length > 0) existData(step)
          })
      }
    }
    if (target.dataset.next == 2) {
      saveDataArr()
      if (val) {
        step++
        import("./components/Steps/Steps.js")
          .then(res => {
            $floatModal.innerHTML = null
            $floatModal.append(res.Step3(step))
            if (data[step - 1].length > 0) existData(step)
          })
      }
    }

    // Send btn
    if (target.dataset.next == 'send') {
      saveDataArr()
      if (val) {
        step++
        console.log(data)
        import("./components/Steps/LastStep.js")
          .then(res => {
            let status = 'ok'
            $floatModal.innerHTML = null
            $floatModal.append(res.LastStep(status, step))
          })
      }
    }

    // Close btn
    if (target.dataset.close == 'close') {
      resetAll()
      $floatModal.close()
    }
    // Prev btns
    if (target.dataset.prev == 2) {
      step--
      import("./components/Steps/Steps.js")
        .then(res => {
          $floatModal.innerHTML = null
          $floatModal.append(res.Step1(step))
          existData(step)
        })
    }
    if (target.dataset.prev == 3) {
      step--
      import("./components/Steps/Steps.js")
        .then(res => {
          $floatModal.innerHTML = null
          $floatModal.append(res.Step2(step))
          existData(step)
        })
    }
    if (target.dataset.prev == 4) {
      step--
      import("./components/Steps/Steps.js")
        .then(res => {
          $floatModal.innerHTML = null
          $floatModal.append(res.Step3(step))
          existData(step)
        })
    }
    if (target.matches('.btn')) console.log(data)
  })
}