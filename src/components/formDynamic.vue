<script>
export default {
  props: {
    config: {
      type: Array,
      require: true
    },
    button: {
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
              label: element['addible']['label']
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
    },
    saveData () {
      console.log('guardar')
    },
    cancelAdd () {
      this.$router.go(-1)
    },
    restore () {
      console.log(this)
    },
    createButtons (createElement, self, buttons) {
      return buttons.map(element => {
        return createElement('v-btn', {
          props: {
            ...element['props']
          },
          class: {
            ...element['class']
          },
          on: {
            click: function () {
              console.log()
              switch (element['action'].toLowerCase()) {
                case 'add':
                  self.saveData()
                  break
                case 'cancel':
                  self.cancelAdd()
                  break
                case 'restore':
                  self.restore()
                  break
                default:
              }
            }
          }
        }, [(element['name'])])
      })
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
      [createElement('v-flex', {
        props: {
          xs12: true,
          md8: true
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
          createElement('v-form',
            [
              createElement('v-container', {
                props: {
                  'py-0': true
                }
              },
              [
                createElement('v-layout', {
                  props: {
                    wrap: true
                  }
                },
                [
                  createElement('v-flex', {
                    props: {
                      'xs12': true,
                      'md4': true
                    }
                  },
                  [self.createInput(createElement, self.config)])
                ])
              ])
            ]),
          createElement('v-card-actions',
            [
              self.createButtons(createElement, self, self.button)
            ]
          )
        ])
      ])])
    ])
  }
}
</script>
