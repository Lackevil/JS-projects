const reviews = [
  {
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    text: 'I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.',
    name: 'Rosetta Q'
  },
  {
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    text: 'This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.',
    name: 'Cherise G'
  },
  {
    image: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    text: 'Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.',
    name: 'Constantine V'
  }
]

const reviewsImage = document.querySelector('.reviews__image')
const reviewsText = document.querySelector('.reviews__text')
const reviewsAuhtor = document.querySelector('.reviews__author')

let countOfReview = 0

updateReviews()

function updateReviews() {
  const { image, text, name } = reviews[countOfReview]

  reviewsImage.src = image
  reviewsText.textContent = text
  reviewsAuhtor.textContent = name

  countOfReview++

  if (countOfReview === reviews.length) {
    countOfReview = 0
  }

  setTimeout(() => {
    updateReviews()
  }, 5000)
}
