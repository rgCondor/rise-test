const items = [{
    type: 'video',
    src: 'assets/img-1.jpg',
    title: 'the five best pastas',
    featured: true
  },
  {
    type: 'podcast',
    src: 'assets/img-2.png',
    title: 'one chef\' secrets to cooking with cheese',
    featured: true
  },
  {
    type: 'article',
    src: 'assets/img-3.png',
    title: 'Diary farmers going green: where chees comes from',
    featured: false
  },
  {
    type: 'article',
    src: 'assets/img-4.png',
    title: 'Diary farmers going green: where chees comes from',
    featured: false
  },
  {
    type: 'article',
    src: 'assets/img-5.jpg',
    title: 'Diary farmers going green: where chees comes from',
    featured: false
  },
  {
    type: 'article',
    src: 'assets/img-6.jpg',
    title: 'Diary farmers going green: where chees comes from',
    featured: false
  },
  {
    type: 'article',
    src: 'assets/img-7.png',
    title: 'Diary farmers going green: where chees comes from',
    featured: false
  },
  {
    type: 'article',
    src: 'assets/img-8.jpg',
    title: 'Diary farmers going green: where chees comes from',
    featured: false
  },
  {
    type: 'article',
    src: 'assets/img-9.jpg',
    title: 'Diary farmers going green: where chees comes from',
    featured: false
  },
  {
    type: 'article',
    src: 'assets/img-10.jpg',
    title: 'Diary farmers going green: where chees comes from',
    featured: false
  },
  {
    type: 'article',
    src: 'assets/img-11.jpg',
    title: 'Diary farmers going green: where chees comes from',
    featured: false
  },
]

window.addEventListener('load', () => {
  const grid = document.querySelector('#grid')
  
  items.forEach(({ type, src, title, featured }) => {
    if ('content' in document.createElement('template')) {
      const template = document.querySelector('#tpl--grid-element');
      const clone = template.content.cloneNode(true);
  
      const wrapper = clone.querySelector('.el')
      const flag = clone.querySelector('.el--featured')
      const img = clone.querySelector('.el--img')
      const h3 = clone.querySelector('.el--title')
      const tag = clone.querySelector('.el--tag')

      

      wrapper.classList.add(type)
      img.src = src
      img.alt = title
      h3.innerHTML = title
      tag.innerHTML = type
      if (featured) {
        wrapper.classList.add('featured')
      }

      grid.append(clone)
    }
  })
})