export const userConfig = [
  {
    addible: {
      propTag: 'name',
      addible: true,
      component: {
        name: 'v-text-field',
        props: {
          label: 'Nombre'
        },
        directives: [
          {
            name: 'validate',
            value: {
              required: true
            }
          }
        ],
        class: {
          'purple-input': true
        }
      }
    },
    tabulated: {
      sortable: true,
      text: 'Name',
      value: 'name'
    }
  },
  {
    addible: {
      propTag: 'country',
      addible: true,
      component: {
        name: 'v-Autocomplete',
        props: {
          label: 'Pais',
          items: ['Venezuela', 'Colombia'],
          'return-object': true

        },
        directives: [
          {
            name: 'validate',
            value: {
              required: true
            }
          }
        ],
        class: {
          'purple-input': true
        }
      }
    },
    tabulated: {
      sortable: false,
      text: 'Country',
      value: 'country'
    }
  },
  {
    addible: {
      addible: true,
      propTag: 'city',
      component: {
        name: 'v-text-field',
        props: {
          label: 'Ciudad'
        },
        directives: [
          {
            name: 'validate',
            value: {
              required: true
            }
          }
        ],
        class: {
          'purple-input': true
        }
      }
    },
    tabulated: {
      sortable: false,
      text: 'City',
      value: 'city'
    }
  },
  {
    addible: {
      propTag: 'salary',
      addible: true,
      component: {
        name: 'v-text-field',
        props: {
          label: 'Salario'
        },
        directives: [
          {
            name: 'validate',
            value: {
              required: true
            }
          }
        ],
        class: {
          'purple-input': true
        }
      }
    },
    tabulated: {
      sortable: false,
      text: 'Salary',
      value: 'salary'
    }
  }
]

export const buttonFormAdd = [
  {
    name: 'Cancelar',
    action: 'cancel',
    props: {
      color: 'error'
    }
  },
  {
    name: 'Limpiar',
    action: 'restore',
    props: {
      color: 'warning'
    },
    class: {
      'my-2': true
    }
  },
  {
    name: 'Agregar',
    action: 'add',
    props: {
      color: 'success'
    },
    class: {
      'my-2': true
    }
  }
]
