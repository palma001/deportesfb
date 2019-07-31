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
  data () {
    return {
      objectToBind: {}
    }
  },
  methods: {
    createInput (createElement, config) {
      let self = this
      let input = []
      config.map(element => {
        let propTag = element['addible']['propTag']
        if (element['addible']['addible']) {
          element['addible']['component']['props']['value'] = self.objectToBind[propTag]
          input.push(createElement(element['addible']['component']['name'], {
            props: {
              ...element['addible']['component']['props'],
              error: (self.errors.has(propTag)) ? (self.errors.has(propTag)) : false,
              'error-messages': (self.errors.first(propTag)) ? [(self.errors.first(propTag))] : ''
            },
            class: {
              ...element['addible']['component']['class']
            },
            attrs: {
              name: propTag,
              ...element['addible']['component']['attrs']
            },
            on: {
              input: function (value) {
                self.objectToBind[propTag] = value
              },
              select: function (value) {
                self.objectToBind[propTag] = value
              }
            },
            directives: (function () {
              if (element['addible']['component']['directives']) {
                let directives = [
                  ...element['addible']['component']['directives']
                ]
                return directives
              }
            })()
          }))
        }
      })
      return input
    },
    saveData () {
      this.validateBeforeSubmit().then(res => {
        if (res) {
          console.log(this.objectToBind)
          this.$emit('save', this.objectToBind)
        }
      })
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
    },
    /**
     * Verify formulary error
     * @param {String} event form to change
     */
    validateBeforeSubmit () {
      return this.$validator.validateAll()
        .then((result) => {
          return result
        })
        .catch((err) => {
          console.log(err)
        })
    },
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
