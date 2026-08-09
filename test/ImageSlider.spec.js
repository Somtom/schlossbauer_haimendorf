import { mount } from '@vue/test-utils'
import ImageSlider from '@/components/global/ImageSlider/index.vue'

describe('ImageSlider', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ImageSlider, {
      props: { images: ['/one.jpg', '/two.jpg'] },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
