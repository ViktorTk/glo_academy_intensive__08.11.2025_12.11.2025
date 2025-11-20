const loadCostStudent = () => {
  const courseProgress = document.querySelector('.course__progress')
  const courseNumber = courseProgress.querySelector('.course__number')
  const progress = courseProgress.querySelector(
    '.course__progress-element progress'
  )

  let numberValue = 0
  courseNumber.textContent = '0₽'
  progress.value = 0

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  let randCost = getRandomInt(350000, 600000)

  const inervalValue = setInterval(() => {
    numberValue += 1000
    courseNumber.textContent = `${numberValue}₽`
    progress.value = numberValue

    if (numberValue >= randCost) clearInterval(inervalValue)
  }, 5)
}

loadCostStudent()
