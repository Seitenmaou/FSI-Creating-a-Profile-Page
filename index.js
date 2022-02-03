let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class','dog-details')
let dogDetailsDescription = document.createElement('h3')
dogDetailsDescription.textContent = 'Description:'
dogDetails.append(dogDetailsDescription)
let dogDetailsDescriptionParagraph = document.createElement('p')
dogDetailsDescriptionParagraph.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.' 
dogDetails.append(dogDetailsDescriptionParagraph)
let dogDetailsFeedingTimes = document.createElement('h3')
dogDetailsFeedingTimes.textContent = 'Feeding Times:'
dogDetails.append(dogDetailsFeedingTimes)
let dogDetailsFeedingTimesList = document.createElement('ul')
let dogDetailsFeedingTimesListContent1 = document.createElement('li')
let dogDetailsFeedingTimesListContent2 = document.createElement('li')
let dogDetailsFeedingTimesListContent3 = document.createElement('li')
dogDetailsFeedingTimesListContent1.textContent = '9:00 am'
dogDetailsFeedingTimesListContent2.textContent = '12:00 pm'
dogDetailsFeedingTimesListContent3.textContent = '5:00 pm'
dogDetails.append(dogDetailsFeedingTimesListContent1, dogDetailsFeedingTimesListContent2, dogDetailsFeedingTimesListContent3)
dogContent.append(dogDetails)

