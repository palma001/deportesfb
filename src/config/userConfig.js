export const userConfig = [
  {
    addible: {
      propTag: 'name',
      label: 'Nombre',
      addible: true,
      component: {
        name: 'v-text-field',
        props: {
        },
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
      label: 'Pais',
      addible: true,
      component: {
        name: 'v-Autocomplete',
        props: {
          items: ['Venezuela', 'Colombia']
        },
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
      label: 'Ciudad',
      component: {
        name: 'v-text-field',
        props: {
        },
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
      label: 'Salario',
      addible: true,
      component: {
        name: 'v-text-field',
        props: {
        },
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
