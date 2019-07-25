<script>
export default {
  props: {
    config: {
      type: Array,
      require: true
    }
  },
  methods: {
    createInput (createElement, config) {
      let input = []
      config.map(element => {
        let propTag = element['addible']['propTag']
        if (element['addible']['addible']) {
          input.push(createElement(element['addible']['component']['name'], {
            props: {
              ...element['addible']['component']['props'],
              label: propTag
            },
            class: {
              ...element['addible']['component']['class']
            },
            attrs: {
              name: propTag,
              ...element['addible']['component']['attrs']
            }
          }))
        }
      })
      return input
    }
  },
  render: function (createElement) {
    let self = this
    return createElement('v-container', {
      props: {
        'fill-height': true,
        'fluid': true,
        'grid-list-xl': true
      }
    },
    [
      createElement('v-layout', {
        props: {
          'justify-center': true,
          'wrap': true
        }
      },
      [
        createElement('material-card', {
          props: {
            color: 'green',
            title: 'Edit Profile',
            text: 'Complete your profile'
          }
        },
        [
          createElement('v-form', [self.createInput(createElement, self.config)])
        ])
      ])
    ])
  }
}
</script>
