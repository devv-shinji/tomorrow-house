const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderModalOverlay.addEventListener('click', closeOrderModal)

function toggleOrderCtaBookmark() {
  // 3. 카운트 숫자 값을 변경 (aria-label도 함께)
  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))
  let newCount = count

  if (this.classList.contains('is-active')) {
    icon.setAttribute('class', 'ic-bookmark')
    newCount = newCount - 1
  } else {
    icon.setAttribute('class', 'ic-bookmark-filled')
    newCount = newCount + 1
  }

  newCount = newCount.toLocaleString()
  countSpan.innerHTML = newCount
  countSpan.setAttribute('aria-label', `북마크 ${newCount}회`)

  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)
