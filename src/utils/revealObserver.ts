// 任意のclaccNameのDOM要素に対して、InterSectionObserverで画面内にきた時callBackに設定された関数を実行させる

export const setIntersectionObserver = (
  className: string,
  options: object,
  callback: Function
) => {
  const entries = document.querySelectorAll(className)
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      callback(entry)
    }
  }, options)

  const targets = document.querySelectorAll(className)
  targets.forEach(target => observer.observe(target))
}
