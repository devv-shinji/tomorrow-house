const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistory)
  }
}

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length === 0) {
    return
  }

  if (!gnbSearchHistory.classList.contains('is-active')) {
    gnbSearchHistory.classList.add('is-active')
    window.addEventListener('click', closeGnbSearchHistory)
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

function deleteAllSearchHistoryItems() {
  gnbSearchHistoryList.innerHTML = ''
  gnbSearchHistory.classList.remove('is-active')
}

deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems)

// const gnbSearch = document.querySelector('.gnb-search')
// const gnbSearchInput = gnbSearch.querySelector('input')
// const gnbSearchHistory = gnbSearch.querySelector('.search-history')
// const gnbSearchHistoryList = gnbSearch.querySelector('.search-history-list')
// const gnbSearchHistoryItems = gnbSearch.querySelectorAll('.search-history-item')
// const gnbSearchDeleteButtons = gnbSearch.querySelectorAll('.delete-button')

// function closeGnbSearchOnclickingOutside(e) {
//   if (!gnbSearch.contains(e.target)) {
//     gnbSearchHistory.classList.remove('is-active')
//   }
// }

// function toggleGnbSearch() {
//   gnbSearchHistory.classList.add('is-active')

//   if (gnbSearchHistory.classList.contains('is-active')) {
//     window.addEventListener('click', closeGnbSearchOnclickingOutside)
//   }
// }

// gnbSearchInput.addEventListener('focus', toggleGnbSearch)

// gnbSearchDeleteButtons.forEach((button) => {
//   button.addEventListener('click', function (e) {
//     gnbSearchHistoryItems.forEach((item, index) => {
//       if (item.contains(e.target)) {
//         // newItems = Array.from(newItems).filter((item, idx) => idx !== index)
//         gnbSearchHistoryItems[index].remove()
//       }
//     })
//   })
// })
