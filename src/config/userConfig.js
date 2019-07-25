export const userConfig = [
  {
    addible: {
      propTag: 'name',
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
